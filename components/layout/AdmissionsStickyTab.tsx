"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, ArrowRight } from "lucide-react";

export function AdmissionsStickyTab() {
  const [mounted, setMounted] = useState(false);
  const [isAutoExpanded, setIsAutoExpanded] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    
    // Auto-peek cycle every 5 seconds
    const interval = setInterval(() => {
      setIsAutoExpanded(true);
      // Stay expanded for 2 seconds then go back
      setTimeout(() => setIsAutoExpanded(false), 2500);
    }, 10000);

    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* DESKTOP SIDE PILLAR (Fixed Right Middle) */}
      <Link 
        href="/admissions" 
        className="pointer-events-auto hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 group"
      >
        <motion.div 
          initial={{ x: "85%" }}
          animate={{ x: isAutoExpanded ? "0%" : "85%" }}
          whileHover={{ x: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: isAutoExpanded ? 120 : 300, 
            damping: 25 
          }}
          className="bg-[#047857] text-white py-5 pl-4 pr-16 rounded-l-3xl shadow-[-10px_0_40px_rgba(0,0,0,0.3)] border-l-4 border-white flex items-center gap-6 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-lg border-2 border-white/20">
            <GraduationCap className="w-6 h-6 text-[#047857]" />
          </div>
          <div className="flex flex-col items-start whitespace-nowrap">
            <p className="font-display text-[11px] font-black tracking-[0.3em] uppercase text-white/50 mb-1">
              Session 2025-26
            </p>
            <p className="font-display text-base font-bold tracking-widest uppercase text-white leading-none">
              Admissions Open
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-white/30 ml-2 group-hover:text-white transition-all transform group-hover:translate-x-1" />
        </motion.div>
      </Link>


    </div>
  );
}
