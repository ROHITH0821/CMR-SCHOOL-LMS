"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, X } from "lucide-react";

const categories = ["All", "Kompally", "Suraram", "Shampur", "Kundanpally", "MB Grammar", "Events", "Sports"];

const mediaItems = [
  { id: 1, type: "image", src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d", category: "Kompally", title: "Main Academic Block" },
  { id: 2, type: "image", src: "https://images.unsplash.com/photo-1562774053-701939374585", category: "Suraram", title: "Sports Complex" },
  { id: 3, type: "image", src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d", category: "Shampur", title: "Library & Labs" },
  { id: 4, type: "image", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7", category: "Kundanpally", title: "Pre-Primary Wing" },
  { id: 5, type: "image", src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6", category: "MB Grammar", title: "Primary Classrooms" },
  { id: 6, type: "video", src: "https://images.unsplash.com/photo-1543269865-cbf427effbad", category: "Events", title: "Annual Day Highlights", videoUrl: "#" },
  { id: 7, type: "image", src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9", category: "Kompally", title: "Art & Craft Workshop" },
  { id: 8, type: "image", src: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902", category: "Sports", title: "Outdoor Play Area" },
  { id: 9, type: "image", src: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f", category: "MB Grammar", title: "School Assembly" },
];

export default function MediaGalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof mediaItems[0] | null>(null);

  const filteredItems = filter === "All" ? mediaItems : mediaItems.filter(item => item.category === filter);

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container-custom mx-auto px-4">
        <header className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-[#0A2463] mb-6"
          >
            Media <span className="text-[#F5A623]">Gallery</span>
          </motion.h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Witness the journey of excellence across our various campuses through our 
            curated photo and video collections.
          </p>
        </header>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                filter === cat 
                  ? "bg-[#0A2463] border-[#0A2463] text-white shadow-xl scale-105" 
                  : "bg-white border-slate-200 text-slate-500 hover:border-[#F5A623] hover:text-[#F5A623]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-3">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                    {item.category}
                  </div>

                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-8 left-8 right-8 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white font-display font-bold text-xl leading-tight mb-2">
                      {item.title}
                    </p>
                    <div className="h-1 w-12 bg-[#F5A623] rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0A2463]/98 backdrop-blur-xl"
          >
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform p-3 bg-white/10 rounded-full border border-white/20 shadow-2xl"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full max-w-6xl aspect-video rounded-[2.5rem] overflow-hidden bg-black shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <Image
                src={selectedItem.src}
                alt={selectedItem.title}
                fill
                className="object-contain"
              />
              {selectedItem.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Play className="w-24 h-24 text-white fill-white animate-pulse" />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
