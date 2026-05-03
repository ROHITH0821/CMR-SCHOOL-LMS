"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, FlaskConical, Book, Trophy, Monitor, Palette, Loader2 } from "lucide-react";
import { fetchSheetData } from "@/lib/google-sheets";
import { GOOGLE_SHEET_IDS } from "@/lib/constants";

interface Facility {
  id: string;
  title: string;
  description: string;
  icon: string; // From sheet as string
  images: string | string[]; // Can be comma-separated string from sheet
}

const ICON_MAP: Record<string, any> = {
  labs: FlaskConical,
  library: Book,
  sports: Trophy,
  classrooms: Monitor,
  arts: Palette,
};



export function FacilitiesGallerySection({ initialData }: { initialData?: Facility[] }) {
  const [facilities, setFacilities] = useState<Facility[]>(initialData || []);
  const [isLoading, setIsLoading] = useState(!initialData);
  const [activeFacility, setActiveFacility] = useState<Facility | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // If initialData is provided but empty, it might mean the server fetch failed or returned no rows.
    // If initialData is undefined, we fetch on client.
    if (initialData !== undefined) {
      setFacilities(initialData);
      setIsLoading(false);
      return;
    }
    
    async function loadFacilities() {
      try {
        const data = await fetchSheetData<any>(GOOGLE_SHEET_IDS.FACILITIES);
        if (data && data.length > 0) {
          setFacilities(data.map(item => ({
            ...item,
            images: typeof item.images === 'string' ? item.images.split(',').map((s: string) => s.trim()) : item.images
          })));
        } else {
          setFacilities([]);
        }
      } catch (error) {
        console.error("Failed to load facilities:", error);
        setFacilities([]);
      } finally {
        setIsLoading(false);
      }
    }
    loadFacilities();
  }, [initialData]);

  const openLightbox = (facility: Facility) => {
    setActiveFacility(facility);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setActiveFacility(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeFacility) return;
    setCurrentImageIndex((prev) => (prev + 1) % activeFacility.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeFacility) return;
    setCurrentImageIndex((prev) => (prev - 1 + activeFacility.images.length) % activeFacility.images.length);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container-custom max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#0DB6B5]">World-Class Campus</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-black text-[#0A2463]">
            Our <span className="text-[#F5A623]">Facilities</span>
          </h2>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 text-gray-400">
            <Loader2 className="w-12 h-12 animate-spin mb-6" />
            <p className="text-sm font-bold uppercase tracking-widest">Loading Facilities...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {facilities.map((facility, idx) => {
              const hasTitle = !!facility.title;
              const hasImages = facility.images && (Array.isArray(facility.images) ? facility.images.length > 0 : !!facility.images);
              
              if (!hasTitle || !hasImages) return null;

              const Icon = ICON_MAP[facility.icon] || Book;
              const imageUrls = Array.isArray(facility.images) ? facility.images : [facility.images];
              const firstImage = imageUrls[0];
              
              if (!firstImage) return null;

              return (
                <motion.div
                  key={facility.id || idx}
                  whileHover={{ y: -10 }}
                  className={`group relative cursor-pointer overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-[#fcfcfd] border border-gray-100 p-4 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.03)] ${
                    facilities.length % 2 !== 0 && idx === facilities.length - 1 ? "col-span-2 sm:col-span-1 justify-self-center w-full sm:w-auto max-w-sm" : ""
                  }`}
                  onClick={() => openLightbox(facility)}
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#0A2463]/5 flex items-center justify-center text-[#0A2463] transition-colors group-hover:bg-[#0A2463] group-hover:text-white">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#0A2463]">{facility.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">{facility.description}</p>
                  
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-inner">
                    <Image
                      src={firstImage}
                      alt={facility.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[#0A2463]/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#0A2463]">
                      View Gallery
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {activeFacility && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-[#0A2463]/95 backdrop-blur-2xl p-4 md:p-10"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
            >
              <X size={40} />
            </button>

            <div className="relative w-full max-w-6xl aspect-video flex items-center justify-center">
              {/* IMAGE COUNTER */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-white/60 font-mono text-sm">
                {currentImageIndex + 1} / {activeFacility.images.length}
              </div>

              {/* MAIN IMAGE */}
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={Array.isArray(activeFacility.images) ? activeFacility.images[currentImageIndex] : activeFacility.images}
                  alt={activeFacility.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* NAVIGATION */}
              {Array.isArray(activeFacility.images) && activeFacility.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 md:-left-20 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 md:-right-20 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}
            </div>

            <div className="absolute bottom-10 left-0 right-0 text-center text-white px-6">
              <h4 className="font-display text-2xl md:text-3xl font-bold mb-2">{activeFacility.title}</h4>
              <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">{activeFacility.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
