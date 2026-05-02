"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2026", text: "CMR Lalgadi Malakpet campus founded with a vision for inclusive excellence." },
  { year: "2005", text: "Expanded science laboratories and digital classrooms." },
  { year: "2012", text: "National sports representation and Olympiad cohort launched." },
  { year: "2020", text: "NEP-aligned pedagogy and holistic report cards introduced." },
  { year: "2024", text: "New innovation hub and language lab inaugurated." },
];

export function Timeline() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const line = lineRef.current;
    const section = sectionRef.current;
    if (!line || !section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "bottom 35%",
            scrub: true,
          },
        }
      );
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="journey" className="relative scroll-mt-28 py-16">
      <div className="container-custom">
        <h2 className="mb-12 font-display text-3xl text-primary">Our journey</h2>
        <div className="relative">
          <div
            className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 overflow-hidden rounded-pill bg-border md:block"
            aria-hidden
          >
            <div ref={lineRef} className="h-full w-full origin-top bg-accent" />
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {milestones.map((m, i) => (
              <article
                key={m.year}
                className={`relative rounded-card border border-border bg-white p-6 shadow-soft ${
                  i % 2 === 0 ? "md:mr-auto md:max-w-[46%]" : "md:ml-auto md:max-w-[46%] md:text-right"
                }`}
              >
                <p className="font-mono text-sm font-bold text-accent">{m.year}</p>
                <p className="mt-2 font-body text-textSecondary">{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
