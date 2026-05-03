"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ADMISSION_YEAR_RANGE } from "@/lib/constants";

export function AdmissionsCtaBanner() {
  return (
    <section
      data-gsap-timeline
      className="relative overflow-hidden bg-[#0A2463] py-12 text-white md:py-16"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rotate-12 bg-[#F5A623]/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 left-[-10%] h-40 w-[70%] rotate-[-8deg] bg-[#F5A623]/15"
        aria-hidden
      />
      <div className="container-custom relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div data-gsap-tl-1 className="max-w-2xl">
          <div
            data-gsap-line
            className="mb-4 h-1 w-24 rounded-pill bg-[#F5A623]"
            aria-hidden
          />
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.5rem]">
            Unlock your exceptional learning journey
          </h2>
          <p className="mt-2 font-body text-lg text-white/85">
            Evaluate your future: Admissions Open for {ADMISSION_YEAR_RANGE} at CMR Schools.
          </p>
        </div>
        <div data-gsap-tl-2 className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="inline-flex"
          >
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 rounded-pill bg-[#F5A623] px-8 py-4 font-body text-sm font-semibold text-white shadow-soft-lg transition hover:brightness-105"
            >
              Start Application
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
