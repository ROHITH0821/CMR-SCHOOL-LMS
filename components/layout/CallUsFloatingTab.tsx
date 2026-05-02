"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function CallUsFloatingTab() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed left-6 bottom-12 z-[100] group pointer-events-auto"
    >
      <a
        href="tel:+914012345678"
        className="block bg-[#0DB6B5] text-white p-3 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.25)] border-2 border-white/40 transition-all duration-300 hover:scale-110 hover:bg-[#0A2463] group"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
    </motion.div>
  );
}
