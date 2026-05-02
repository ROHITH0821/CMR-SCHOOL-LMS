"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
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

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {faqs.map((f, i) => (
        <div key={f.q} className="overflow-hidden rounded-card border border-border bg-white">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-primary md:text-base"
          >
            {f.q}
            <span className="text-accent">{open === i ? "−" : "+"}</span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-border px-4 py-3 text-sm text-textSecondary"
              >
                {f.a}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
