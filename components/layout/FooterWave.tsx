"use client";

import { motion } from "framer-motion";

export function FooterWave() {
  return (
    <div className="pointer-events-none absolute -top-px left-0 right-0 h-20 overflow-hidden text-white" aria-hidden>
      <svg className="h-full w-full" viewBox="0 0 1440 96" preserveAspectRatio="none">
        <motion.path
          fill="currentColor"
          className="text-[#0A2463]"
          initial={{ pathLength: 0, opacity: 0.85 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          d="M0,56 C180,96 360,16 540,56 C720,96 900,16 1080,56 C1260,96 1380,36 1440,48 L1440,96 L0,96 Z"
        />
      </svg>
    </div>
  );
}
