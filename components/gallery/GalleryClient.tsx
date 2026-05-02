"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Images } from "lucide-react";
import {
  GALLERY_ALBUMS,
  GALLERY_CATEGORY_OPTIONS,
  GALLERY_YEAR_OPTIONS,
  type GalleryFilterCategory,
  type GalleryYearFilter,
  type GalleryAlbum,
} from "@/lib/gallery-bento-data";
import { GalleryMasonry } from "@/components/gallery/GalleryMasonry";
import { GalleryFeaturedSpotlight } from "@/components/gallery/GalleryFeaturedSpotlight";
import { GalleryFilterPill, GalleryYearPill } from "@/components/gallery/gallery-filter-ui";
import { CAMPUS_NAME, GOOGLE_SHEET_IDS } from "@/lib/constants";
import { fetchSheetData } from "@/lib/google-sheets";
import { Loader2 } from "lucide-react";

export function GalleryClient({ initialData }: { initialData?: GalleryAlbum[] }) {
  const [albums, setAlbums] = useState<GalleryAlbum[]>(initialData || GALLERY_ALBUMS);
  const [isLoading, setIsLoading] = useState(!initialData);
  const [category, setCategory] = useState<GalleryFilterCategory>("All");
  const [year, setYear] = useState<GalleryYearFilter>("All");
  const [open, setOpen] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  
  useEffect(() => {
    if (initialData) return;
    async function loadAlbums() {
      try {
        const data = await fetchSheetData<GalleryAlbum>(GOOGLE_SHEET_IDS.ALBUMS);
        if (data && data.length > 0) {
          setAlbums(data);
        }
      } catch (error) {
        console.error("Failed to load gallery albums:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadAlbums();
  }, [initialData]);

  const filtered = useMemo(() => {
    return albums.filter((item) => {
      const catOk = category === "All" || item.category === category;
      const yearOk = year === "All" || item.year === (typeof item.year === 'string' ? parseInt(item.year) : item.year);
      return catOk && yearOk;
    });
  }, [albums, category, year]);

  const featured = useMemo(() => filtered.slice(0, 3), [filtered]);
  const gridRest = useMemo(() => filtered.slice(3), [filtered]);

  useEffect(() => {
    setOpen(null);
  }, [category, year]);

  const close = useCallback(() => setOpen(null), []);

  const goNext = useCallback(() => {
    setOpen((i) => {
      if (i === null) return i;
      return Math.min(filtered.length - 1, i + 1);
    });
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setOpen((i) => {
      if (i === null) return i;
      return Math.max(0, i - 1);
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (open === null) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, goNext, goPrev, open]);

  const onLightboxTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0]?.screenX ?? null;
  };

  const onLightboxTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start === null) return;
    const end = e.changedTouches[0]?.screenX;
    if (end === undefined) return;
    const dx = end - start;
    if (dx < -48) goNext();
    if (dx > 48) goPrev();
  };

  return (
    <div className="w-full max-w-none bg-[#FDFBF7] text-neutral-600">
      {/* Reference-style header */}
      <div className="mx-auto max-w-4xl px-4 pb-6 pt-4 text-center sm:px-6 md:pb-8 md:pt-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#1B4332]/15 bg-white px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1B4332]/80">
          <Images className="h-3.5 w-3.5" aria-hidden />
          Photo gallery
        </span>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-[#0A2463] md:text-4xl lg:text-[2.75rem]">
          Life at {CAMPUS_NAME}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-neutral-500 md:text-base">
          Choose a category and year, then tap any album to open the lightbox. Arrows or swipe to browse.
        </p>
      </div>

      {/* Filters first — results update below */}
      <div
        className="border-b border-[#0A2463]/[0.06] bg-[#fafbff]/90 pb-6 pt-2"
        role="region"
        aria-label="Filter gallery by category and year"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-4 sm:gap-2.5 sm:px-6 md:gap-3">
          {GALLERY_CATEGORY_OPTIONS.map((c) => (
            <GalleryFilterPill key={c} active={category === c} onClick={() => setCategory(c)}>
              {c}
            </GalleryFilterPill>
          ))}
        </div>
        <div className="mx-auto mt-5 flex max-w-7xl flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:gap-4 sm:px-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400">Year</p>
          <div className="flex flex-wrap justify-center gap-2">
            <GalleryYearPill active={year === "All"} onClick={() => setYear("All")}>
              All years
            </GalleryYearPill>
            {GALLERY_YEAR_OPTIONS.map((y) => (
              <GalleryYearPill key={y} active={year === y} onClick={() => setYear(y)}>
                {y}
              </GalleryYearPill>
            ))}
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-32 text-gray-400">
          <Loader2 className="w-12 h-12 animate-spin mb-6" />
          <p className="text-sm font-bold uppercase tracking-widest">Loading Photo Gallery...</p>
        </div>
      ) : filtered.length === 0 ? (
        <p className="px-4 py-16 text-center text-sm text-neutral-500">No albums match these filters. Try another category or year.</p>
      ) : (
        <div className="pt-8 md:pt-10" aria-live="polite" aria-atomic="false">
          <GalleryFeaturedSpotlight
            items={featured}
            onPhotoClick={setOpen}
            getGlobalIndex={(pos) => pos}
          />

          {gridRest.length > 0 && (
            <div className="mx-auto mt-10 max-w-[90rem] px-4 pb-12 sm:px-6 md:mt-12 md:pb-16">
              <GalleryMasonry items={gridRest} onTileClick={setOpen} indexOffset={3} />
            </div>
          )}
        </div>
      )}

      <AnimatePresence>
        {open !== null && filtered[open] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-neutral-950/90 p-0 sm:items-center sm:justify-center sm:p-4"
            onClick={close}
            onTouchStart={onLightboxTouchStart}
            onTouchEnd={onLightboxTouchEnd}
          >
            <div className="flex w-full items-center justify-between px-3 pb-2 pt-[max(0.75rem,env(safe-area-inset-top))] sm:absolute sm:left-0 sm:right-0 sm:top-0 sm:z-10 sm:px-6 sm:pb-0 sm:pt-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-white/70 sm:hidden">
                {open + 1} / {filtered.length}
              </p>
              <button
                type="button"
                className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 active:scale-95 sm:h-10 sm:w-auto sm:px-4 sm:py-2"
                onClick={close}
                aria-label="Close gallery"
              >
                <X className="h-5 w-5 sm:mr-1" />
                <span className="hidden sm:inline">Close</span>
              </button>
            </div>

            <motion.div
              key={open}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.2 }}
              className="relative flex min-h-0 w-full flex-1 flex-col items-center justify-center px-2 sm:max-h-[90vh] sm:max-w-6xl lg:max-w-7xl sm:flex-none sm:px-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full max-h-[min(76vh,calc(100vh-11rem))] sm:aspect-video sm:max-h-[min(88vh,960px)]">
                <Image
                  src={filtered[open].src}
                  alt={filtered[open].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, min(90vw, 1280px)"
                  quality={95}
                  priority
                />
              </div>
              <div className="mt-3 w-full max-w-5xl px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:mt-4 sm:pb-0">
                <p className="text-center font-display text-lg font-semibold text-white md:text-xl">{filtered[open].title}</p>
                <p className="mt-1 text-center text-sm text-white/55">{filtered[open].alt}</p>
                <p className="mt-3 text-center font-mono text-[11px] text-white/40 sm:hidden">
                  Swipe left or right for more
                </p>
              </div>
            </motion.div>

            <div className="flex w-full items-center justify-center gap-3 border-t border-white/10 bg-neutral-950/80 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:absolute sm:bottom-6 sm:left-1/2 sm:w-auto sm:-translate-x-1/2 sm:border-0 sm:bg-transparent sm:py-0">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                disabled={open <= 0}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-30 sm:h-11 sm:w-11"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <span className="hidden font-mono text-sm text-white/80 sm:inline">
                {open + 1} / {filtered.length}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                disabled={open >= filtered.length - 1}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-30 sm:h-11 sm:w-11"
                aria-label="Next photo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
