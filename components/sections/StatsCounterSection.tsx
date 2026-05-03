"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { label: "Schools", end: 10, suffix: "" },
  { label: "Students", end: 10000, suffix: "+" },
  { label: "Board Pass Rate", end: 100, suffix: "%" },
  { label: "Acres of Campus", end: 25, suffix: "+" },
  { label: "Infrastructure Facilities", end: 50, suffix: "+" },
];

const branches = [
  "MB Grammar School",
  "Suraram",
  "Shampur",
  "Kompally",
  "Kundanpally",
];

function StatBlock({ label, end, suffix, active }: { label: string; end: number; suffix: string; active: boolean }) {
  const v = useCountUp(end, 2500, active);
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl transition-all duration-500 hover:bg-white/10 group">
      <p className="font-display text-4xl md:text-5xl font-black text-white tracking-tighter">
        {v}{suffix}
      </p>
      <div className="mt-3 h-[2px] w-8 bg-[#0DB6B5] rounded-full transition-all duration-500 group-hover:w-16" />
      <p className="mt-4 font-body text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-[0.2em] text-center">{label}</p>
    </div>
  );
}

export function StatsCounterSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const branchesRef = useRef<HTMLDivElement>(null);

  const { ref: inViewRef, inView } = useInView<HTMLElement>();

  const setSectionRef = (node: HTMLElement | null) => {
    sectionRef.current = node;
    (inViewRef as { current: HTMLElement | null }).current = node;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Title
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Staggered Stats
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Staggered Branches
      if (branchesRef.current) {
        gsap.fromTo(
          branchesRef.current.children,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.05,
            duration: 0.6,
            scrollTrigger: {
              trigger: branchesRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={setSectionRef}
      className="relative w-full py-24 md:py-32 overflow-hidden bg-[#0A2463]"
    >
      {/* Abstract journey background texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#0DB6B5_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#F5A623_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16 md:mb-24">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#0DB6B5]">
            Milestones of Excellence
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-black text-white tracking-tight">
            For Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0DB6B5] to-[#F5A623]">Journey</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="flex flex-wrap justify-center gap-y-8 gap-x-4 lg:grid lg:grid-cols-5 mb-20 md:mb-32">
          {stats.map((s) => (
            <div key={s.label} className="w-[calc(50%-1rem)] sm:w-[calc(33.333%-1rem)] lg:w-auto">
              <StatBlock {...s} active={inView} />
            </div>
          ))}
        </div>

        {/* Branches Section */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-10 w-full max-w-xl">
            <div className="h-[1px] flex-1 bg-white/20" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 whitespace-nowrap">
              Our Prestigious Branches
            </span>
            <div className="h-[1px] flex-1 bg-white/20" />
          </div>

          <div 
            ref={branchesRef}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12"
          >
            {branches.map((branch) => (
              <div key={branch} className="flex items-center gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623] shadow-[0_0_10px_#F5A623] transition-transform group-hover:scale-150" />
                <span className="font-display text-base md:text-lg font-bold text-white/80 group-hover:text-white transition-colors">
                  {branch}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
