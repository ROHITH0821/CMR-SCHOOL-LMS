"use client";

import { AlertCircle, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative z-[70] bg-[#0A2463] text-white overflow-hidden shadow-2xl border-b border-white/10"
        >
          {/* Animated Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/5 to-transparent animate-[wave_15s_linear_infinite]" />
          
          <div className="relative group">
            {/* The entire bar is now a link area for maximum "efficiency" */}
            <Link 
              href="/admissions" 
              className="container-custom mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-6 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#FFD700] rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative p-2.5 bg-[#FFD700] rounded-xl">
                    <AlertCircle className="w-6 h-6 text-[#0A2463]" />
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <p className="font-display text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-[#FFD700] transition-colors leading-tight">
                    Limited seats available for Academic Year 2025–26
                  </p>
                  <p className="font-body text-sm text-white/60 mt-1 uppercase tracking-[0.2em] font-medium">
                    Secure your child&apos;s place at Lalgadi Malakpet Campus today
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div 
                  className="flex items-center gap-3 px-8 py-3 bg-[#FFD700] text-[#0A2463] font-black text-xs tracking-[0.2em] uppercase rounded-xl transition-all transform group-hover:scale-105 shadow-xl shadow-black/20"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>

            {/* Separate Close Button to ensure it doesn't trigger the link */}
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsVisible(false);
              }}
              className="absolute top-1/2 -translate-y-1/2 right-6 p-2 hover:bg-white/10 rounded-full transition-colors z-[80]"
              aria-label="Close alert"
            >
              <X className="w-5 h-5 text-white/30 hover:text-white" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
