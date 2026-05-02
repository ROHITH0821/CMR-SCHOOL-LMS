"use client";

import Link from "next/link";
import { MessageCircleQuestion } from "lucide-react";
import { motion } from "framer-motion";

export function StickyEnquiryButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed left-0 top-[60%] z-50 -translate-y-1/2 -translate-x-[calc(100%-2.5rem)] hover:translate-x-0 transition-transform duration-300 ease-in-out hidden sm:block"
    >
      <Link
        href="/admissions"
        className="flex items-center bg-[#F48A36] text-white rounded-r-xl shadow-lg overflow-hidden group border border-[#F48A36]/20 flex-row-reverse"
      >
        <div className="p-2.5 bg-[#d97529] flex items-center justify-center">
          <MessageCircleQuestion className="w-5 h-5 text-white" />
        </div>
        <span className="font-body font-semibold text-sm px-4 py-2 whitespace-nowrap">
          Admission Enquiry
        </span>
      </Link>
    </motion.div>
  );
}
