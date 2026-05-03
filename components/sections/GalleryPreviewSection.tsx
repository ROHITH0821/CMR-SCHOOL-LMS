"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Images, Loader2 } from "lucide-react";
import { fetchSheetData } from "@/lib/google-sheets";
import { GOOGLE_SHEET_IDS } from "@/lib/constants";
import { CAMPUS_ADDRESS_LINE, CAMPUS_NAME } from "@/lib/constants";
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

export function GalleryPreviewSection({ initialData }: { initialData?: GalleryAlbum[] }) {
  const reduceMotion = useReducedMotion();
  const [category, setCategory] = useState<GalleryFilterCategory>("All");
  const [year, setYear] = useState<GalleryYearFilter>("All");
  
  const albums = useMemo(() => {
    if (initialData && initialData.length > 0) {
      return initialData.map(item => ({
        ...item,
        year: Number(item.year),
        photos: Number(item.photos)
      }));
    }
    return GALLERY_ALBUMS;
  }, [initialData]);

  const filtered = useMemo(() => {
    return albums.filter((item) => {
      const catOk = category === "All" || item.category === category;
      const yearOk = year === "All" || item.year === year;
      return catOk && yearOk;
    });
  }, [category, year, albums]);

  const featured = useMemo(() => filtered.slice(0, 3), [filtered]);
  const gridRest = useMemo(() => filtered.slice(3), [filtered]);

  return (
    <section className="border-t-[0.5px] border-[#1B4332]/10 bg-[#FDFBF7] py-10 md:py-14">
      <div className="mx-auto max-w-4xl px-4 pb-6 text-center md:pb-8 sm:px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1B4332]/15 bg-white px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1B4332]/80">
            <Images className="h-3.5 w-3.5" aria-hidden />
            Photo gallery
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-[#0A2463] md:text-4xl">Life at {CAMPUS_NAME}</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-neutral-500 md:text-base">
            Tap any photo to open the full gallery. Filters match the main gallery page.
          </p>
        </motion.div>
      </div>

      <div
        className="border-b border-[#0A2463]/[0.06] bg-white/60 pb-6 pt-1"
        role="region"
        aria-label="Filter gallery preview"
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

      {filtered.length === 0 ? (
        <p className="px-4 pt-8 text-center text-sm text-neutral-500">No albums match. Adjust filters.</p>
      ) : (
        <div className="pt-8 md:pt-10">
          <GalleryFeaturedSpotlight items={featured} getGlobalIndex={(p) => p} linkAllTo="/gallery" />
          {gridRest.length > 0 && (
            <div className="mx-auto mt-8 max-w-[90rem] px-4 sm:px-6">
              <GalleryMasonry items={gridRest} linkHref="/gallery" indexOffset={3} />
            </div>
          )}
        </div>
      )}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-10 max-w-[min(100%,22rem)] px-4 text-center sm:mt-12 sm:max-w-md md:max-w-lg"
      >
        <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
          <div className="h-px min-w-0 flex-1 bg-[#F48A36]" aria-hidden />
          <span className="shrink-0 whitespace-nowrap font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-[#F48A36] sm:text-[9px] md:text-[10px]">
            EXPLORE TO INVENT
          </span>
          <div className="h-px min-w-0 flex-1 bg-[#F48A36]" aria-hidden />
        </div>
        <p className="mt-4 font-sans text-[10px] font-semibold leading-snug tracking-wide text-[#C41E3A] sm:mt-5 sm:text-[11px] md:text-xs">
          {CAMPUS_ADDRESS_LINE}
        </p>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.45 }}
        className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-center gap-4 px-4 sm:mt-10 sm:flex-row sm:gap-6"
      >
        <Button href="/gallery" variant="outlineDark" size="lg" className="min-w-[200px] border-[0.5px]">
          View full gallery
        </Button>
        <p className="max-w-md text-center text-sm text-neutral-500">Open the gallery for lightbox viewing, filters, and every album.</p>
      </motion.div>
    </section>
  );
}
