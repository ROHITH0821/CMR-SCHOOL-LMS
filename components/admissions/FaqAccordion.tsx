"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STATIC_FAQS = [
  {
    q: "What is the age criteria for Grade I?",
    a: "Children should complete 6 years by March 31 of the academic year, as per CBSE norms.",
  },
  {
    q: "Is there an entrance exam?",
    a: "Yes, for middle and senior grades we conduct a readiness assessment. Primary admissions are interaction-based.",
  },
  {
    q: "Do you offer transport?",
    a: "Yes, GPS-enabled buses cover major routes across Hyderabad. Seat allocation is term-based.",
  },
  {
    q: "How can I track my application?",
    a: "You will receive SMS and email updates. Parents can also log in to the portal after registration.",
  },
];

interface FAQ {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  initialData?: FAQ[];
}

export function FaqAccordion({ initialData }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const items = initialData && initialData.length > 0 ? initialData : STATIC_FAQS;

  return (
    <div className="space-y-3">
      {items.map((f, i) => (
        <div key={f.q + i} className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
          >
            <span className="font-display text-base md:text-lg font-bold text-[#0A2463]">{f.q}</span>
            <span className={`flex h-8 w-8 items-center justify-center rounded-full border border-gray-100 transition-transform duration-300 ${open === i ? "rotate-45 bg-[#F5A623] text-white" : "bg-white text-[#0A2463]"}`}>
              +
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="border-t border-gray-50 px-6 py-5 text-sm md:text-base text-gray-500 leading-relaxed">
                  {f.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
