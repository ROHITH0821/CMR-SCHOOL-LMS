"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ADMISSION_YEAR_RANGE } from "@/lib/constants";

export function AdmissionSpotlight() {
  return (
    <section className="bg-[#FDFBF7] py-10 border-b border-[#0A2463]/10">
      <div className="container-custom mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-[#0DB6B5]/10 text-[#0DB6B5] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0DB6B5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0DB6B5]"></span>
            </span>
            Admission Open
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0A2463] leading-tight">
            Enroll your child for {ADMISSION_YEAR_RANGE}
          </h2>
          <p className="mt-2 text-neutral-600 text-sm md:text-base max-w-xl">
            Join a community dedicated to academic excellence and holistic growth. Limited seats available for the upcoming academic year.
          </p>
        </div>
        <div className="flex shrink-0 gap-4">
          <Button href="/admissions" variant="gold" size="lg" className="rounded-full shadow-lg">
            Apply Now
          </Button>
          <Button href="/contact" variant="outlineDark" size="lg" className="rounded-full">
            Inquire Today
          </Button>
        </div>
      </div>
    </section>
  );
}
