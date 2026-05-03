"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Maximize2, X, Loader2 } from "lucide-react";
import { fetchSheetData } from "@/lib/google-sheets";
import { GOOGLE_SHEET_IDS } from "@/lib/constants";

type MediaType = "photo" | "video";
type Campus = "All" | "Kompally" | "Suraram" | "Shampur" | "Kundanpally" | "MB Grammar School" | "Lalgadi Malakpet";

interface MediaItem {
  id: string;
  type: MediaType;
  src: string;
  thumbnail: string;
  title: string;
  campus: Campus;
}

const GALLERY_DATA: MediaItem[] = [
  // KOMPALLY
  { id: "k1", type: "photo", src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d", thumbnail: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600", title: "Main Academic Wing", campus: "Kompally" },
  { id: "k2", type: "photo", src: "https://images.unsplash.com/photo-1543269865-cbf427effbad", thumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600", title: "Smart Learning Hub", campus: "Kompally" },
  { id: "k3", type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600", title: "Kompally Campus Tour", campus: "Kompally" },
  
  // SURARAM
  { id: "s1", type: "photo", src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b", thumbnail: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600", title: "Innovation & Tech Lab", campus: "Suraram" },
  { id: "s2", type: "photo", src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d", thumbnail: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600", title: "Central Sports Field", campus: "Suraram" },
  
  // SHAMPUR
  { id: "sh1", type: "photo", src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9", thumbnail: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600", title: "Art & Creativity Studio", campus: "Shampur" },
  
  // KUNDANPALLY
  { id: "ku1", type: "photo", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7", thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600", title: "Kundanpally Main Entrance", campus: "Kundanpally" },
  
  // MB GRAMMAR
  { id: "mb1", type: "photo", src: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f", thumbnail: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=600", title: "Primary School Courtyard", campus: "MB Grammar School" },
];

const CAMPUSES: Campus[] = ["All", "Kompally", "Suraram", "Shampur", "Kundanpally", "MB Grammar School", "Lalgadi Malakpet"];

export function GalleryGrid({ initialData }: { initialData?: MediaItem[] }) {
  const [filter, setFilter] = useState<Campus>("All");
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const galleryItems = initialData && initialData.length > 0 ? initialData : GALLERY_DATA;

  // Helper to get thumbnail for video
  const getDisplayThumbnail = (item: MediaItem) => {
    if (item.thumbnail && !item.thumbnail.includes("example.com")) {
      return item.thumbnail;
    }
    if (item.type === "video") {
      // Try to extract YouTube ID
      const ytMatch = item.src.match(/(?:embed\/|v=)([^&?]+)/);
      if (ytMatch && ytMatch[1]) {
        return `https://img.youtube.com/vi/${ytMatch[1]}/maxresdefault.jpg`;
      }
      return "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600"; // Generic video fallback
    }
    return item.src;
  };

  const filteredData = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.campus === filter);

  return (
    <div className="w-full">
      {/* FILTER TABS */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {CAMPUSES.map((campus) => (
          <button
            key={campus}
            onClick={() => setFilter(campus)}
            className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
              filter === campus 
                ? "bg-[#0A2463] text-white shadow-lg" 
                : "bg-gray-100 text-[#0A2463] hover:bg-gray-200"
            }`}
          >
            {campus}
          </button>
        ))}
      </div>

      {/* GRID */}
      <motion.div 
        layout
        className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-[2rem] bg-gray-100"
              onClick={() => setSelectedItem(item)}
            >
              <Image
                src={getDisplayThumbnail(item)}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* INDICATORS */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/20">
                {item.type === "video" ? (
                  <Play className="w-4 h-4 text-white fill-white" />
                ) : (
                  <Maximize2 className="w-4 h-4 text-white" />
                )}
              </div>

              {/* OVERLAY TEXT */}
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0DB6B5] mb-1 block">
                  {item.campus}
                </span>
                <h4 className="text-white font-bold text-sm leading-tight">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#0A2463]/95 p-4 md:p-10 backdrop-blur-xl"
          >
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl"
            >
              {selectedItem.type === "video" ? (
                <iframe
                  src={selectedItem.src}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              )}
            </motion.div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <span className="text-[#0DB6B5] font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">
                {selectedItem.campus}
              </span>
              <h3 className="text-white font-display text-2xl font-bold">
                {selectedItem.title}
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
