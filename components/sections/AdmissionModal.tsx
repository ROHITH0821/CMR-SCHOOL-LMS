"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function AdmissionModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after a short delay on initial load
    const timer = setTimeout(() => {
      const hasSeenModal = sessionStorage.getItem("hasSeenAdmissionModal");
      if (!hasSeenModal) {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenAdmissionModal", "true");
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="relative h-48 w-full bg-[#0A2463]">
              <Image 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop"
                alt="Admissions Open"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 bg-gradient-to-t from-[#0A2463] to-transparent">
                <span className="text-[#F48A36] font-bold tracking-[0.2em] uppercase text-xs mb-2">
                  Admissions 2025-26
                </span>
                <h3 className="font-display text-3xl font-bold">
                  Shape Their Future
                </h3>
              </div>
            </div>
            
            <div className="p-6 text-center">
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Enrollments are now open for Pre-Primary to Secondary classes. Give your child the gift of a holistic, innovative education at CMR Schools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/admissions"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#F48A36] hover:bg-[#d97529] text-white px-6 py-3 rounded-full font-body font-semibold transition-colors"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-100 hover:bg-gray-200 text-[#0A2463] px-6 py-3 rounded-full font-body font-semibold transition-colors"
                >
                  Book Campus Tour
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
