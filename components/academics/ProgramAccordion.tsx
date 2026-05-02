"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const programs = [
  {
    title: "Primary (I–V)",
    subjects: "English, Hindi, Telugu, Mathematics, EVS, Arts, PE",
    timings: "8:30 AM – 3:15 PM",
    special: "Foundational literacy, phonics lab, reading circles",
  },
  {
    title: "Middle (VI–VIII)",
    subjects: "Sciences split, Social Science, Third Language, ICT",
    timings: "8:15 AM – 3:30 PM",
    special: "STEM club, debate, community projects",
  },
  {
    title: "Secondary (IX–X)",
    subjects: "Board subjects + optional skills",
    timings: "8:15 AM – 3:45 PM",
    special: "Board exam mentoring, remedial blocks",
  },
  {
    title: "Senior Secondary (XI–XII)",
    subjects: "Science / Commerce streams with electives",
    timings: "8:00 AM – 4:00 PM",
    special: "Career counselling, competitive exam cell",
  },
];

export function ProgramAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {programs.map((p, i) => (
        <div key={p.title} className="overflow-hidden rounded-card border border-border bg-white shadow-soft">
          <button
            type="button"
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center justify-between px-5 py-4 text-left font-display text-lg text-primary"
          >
            {p.title}
            <span className="text-accent">{open === i ? "−" : "+"}</span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="border-t border-border"
              >
                <div className="space-y-2 px-5 py-4 text-sm text-textSecondary">
                  <p>
                    <strong className="text-primary">Subjects:</strong> {p.subjects}
                  </p>
                  <p>
                    <strong className="text-primary">Timings:</strong> {p.timings}
                  </p>
                  <p>
                    <strong className="text-primary">Special programmes:</strong> {p.special}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
