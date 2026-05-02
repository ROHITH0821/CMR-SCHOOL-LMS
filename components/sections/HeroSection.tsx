"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ADMISSION_YEAR_RANGE, CAMPUS_NAME, FOUNDED_YEAR } from "@/lib/constants";

export function HeroSection() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const sync = () => setMobile(window.innerWidth < 768);
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      {/* Background Image - High-quality aspirational photo */}
      <Image
        src={mobile ? "/images/hero-school-mobile.jpg" : "/images/hero-school.jpg"}
        alt={`${CAMPUS_NAME} — official campus`}
        fill
        priority
        className="object-cover object-center brightness-[0.85]"
        sizes="100vw"
      />



      <div className="relative z-10 flex min-h-[100svh] w-full flex-col items-center justify-start px-5 pb-28 pt-[calc(10rem+env(safe-area-inset-top))] sm:px-8 sm:pb-24 sm:pt-[calc(12rem+env(safe-area-inset-top))]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto w-full max-w-4xl px-6 py-6 text-center sm:px-10 sm:py-8 md:py-10"
        >
          <h1 className="mt-4 font-heroDisplay text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.05] [text-shadow:_0_4px_20px_rgba(0,0,0,0.5)]">
            Igniting the <br className="hidden md:block" /> 
            <span className="text-[#F5A623]">Next Generation</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.5em] text-white/90 [text-shadow:_0_2px_15px_rgba(0,0,0,0.5)]"
        >
          Scroll to explore
        </motion.p>
      </div>

    </section>
  );
}
