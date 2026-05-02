"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Shield, Globe2, HeartHandshake } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Sparkles,
    title: "CBSE excellence",
    body: "Rigorous syllabus with continuous assessment and mentor support at every stage.",
  },
  {
    icon: Shield,
    title: "Safe, known campus",
    body: "Pastoral care, counsellors on site, and clear protocols families can trust.",
  },
  {
    icon: Globe2,
    title: "Future-ready skills",
    body: "Labs, clubs, and NEP-aligned projects that build confidence beyond textbooks.",
  },
  {
    icon: HeartHandshake,
    title: "Parents as partners",
    body: "Transparent communication, PTMs, and portals that keep you in the loop.",
  },
];

export function OurHighlightsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-y border-[#0A2463]/[0.06] bg-white py-14 md:py-20">
      <div className="container-custom max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-[#0DB6B5]">Our highlights</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0A2463] md:text-4xl">
            Why families choose Lalgadi Malakpet
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 md:text-base">
            A quick snapshot of what makes learning here engaging, safe, and future-focused.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {HIGHLIGHTS.map((h, i) => (
            <motion.article
              key={h.title}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className={`rounded-2xl border border-[#0A2463]/10 bg-[#FDFBF7] p-5 md:p-6 shadow-[0_12px_40px_-20px_rgba(10,36,99,0.08)] transition hover:border-[#0DB6B5]/35 hover:shadow-[0_16px_48px_-16px_rgba(13,182,181,0.12)] ${
                HIGHLIGHTS.length % 2 !== 0 && i === HIGHLIGHTS.length - 1 ? "col-span-2 sm:col-span-1 justify-self-center w-full sm:w-auto max-w-sm" : ""
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A2463]/[0.07] text-[#0A2463]">
                <h.icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-[#0A2463]">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{h.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
