"use client";

import { Shield, BookMarked, Microscope, HeartHandshake } from "lucide-react";

/** Compact trust row — Oakridge-style “global standards” signals, adapted for CMR. */
const ITEMS = [
  { icon: BookMarked, label: "CBSE-aligned" },
  { icon: Microscope, label: "NEP & STEM focus" },
  { icon: Shield, label: "Safe, inclusive campus" },
  { icon: HeartHandshake, label: "Parent partnership" },
];

export function TrustAffiliationsStrip() {
  return (
    <section className="border-b border-slate-200/80 bg-white py-4 md:py-5">
      <div className="container-custom max-w-7xl px-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-between md:gap-x-12">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0A2463]/75 md:text-xs">
              <Icon className="h-4 w-4 shrink-0 text-[#0DB6B5]" strokeWidth={1.5} aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
