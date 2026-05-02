"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, BookOpen, GraduationCap, Star } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const inspirePills = [
  "Mentors who ignite curiosity every day",
  "Decades of classroom excellence",
  "Holistic guidance beyond textbooks",
  "Leaders in NEP-aligned pedagogy",
  "Your child’s growth, our purpose",
  "Award-winning faculty across disciplines",
];

/** Left → Center (featured) → Right podium order */
const topFaculty = [
  {
    name: "Ms. Kavitha Iyer",
    role: "Senior Mentor, Humanities",
    tagline: "15+ years · Language & arts",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=90&w=800&auto=format&fit=crop",
    featured: false,
    Icon: BookOpen,
  },
  {
    name: "Dr. Priya Nair",
    role: "Principal & Academic Director",
    tagline: "Visionary leadership in learning",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=90&w=800&auto=format&fit=crop",
    featured: true,
    Icon: Sparkles,
  },
  {
    name: "Mr. Arjun Mehta",
    role: "HOD, Science & STEM",
    tagline: "18+ years · Labs & innovation",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=90&w=800&auto=format&fit=crop",
    featured: false,
    Icon: GraduationCap,
  },
];

export function AchievementsMarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const textMarqueeRef = useRef<HTMLDivElement>(null);
  const pillMarqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 100, scale: 0.9, rotateX: 10 },
          {
            opacity: 1,
            y: (i) => (i === 1 ? -32 : 48),
            scale: 1,
            rotateX: 0,
            duration: 1.6,
            stagger: 0.2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
            },
          }
        );
      }

      if (textMarqueeRef.current) {
        gsap.to(textMarqueeRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 35,
          ease: "none",
        });
      }

      if (pillMarqueeRef.current) {
        gsap.to(pillMarqueeRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 25,
          ease: "none",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const doubledPills = [...inspirePills, ...inspirePills];

  return (
    <section
      ref={sectionRef}
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#030614] py-32"
    >
      <div className="pointer-events-none absolute left-0 top-[10%] z-0 flex w-[200vw] opacity-[0.03] sm:w-[300vw] lg:top-[15%]">
        <div ref={textMarqueeRef} className="flex items-center gap-16 whitespace-nowrap">
          <span className="font-display text-[10rem] font-bold uppercase tracking-widest text-white md:text-[15rem] lg:text-[22rem]">
            MENTOR • INSPIRE • GUIDE •
          </span>
          <span className="font-display text-[10rem] font-bold uppercase tracking-widest text-white md:text-[15rem] lg:text-[22rem]">
            MENTOR • INSPIRE • GUIDE •
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[80vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5A623] opacity-[0.08] blur-[200px] sm:h-[600px] sm:w-[600px]" />

      <div className="container-custom relative z-10 flex w-full flex-col items-center px-4">
        <div className="mb-16 text-center lg:mb-24">
          <span className="mb-4 flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-[#F5A623]">
            <Star className="h-4 w-4" /> Best inspiring <Star className="h-4 w-4" />
          </span>
          <h2 className="font-display text-5xl font-bold tracking-tight text-white drop-shadow-2xl sm:text-6xl md:text-7xl">
            Faculty spotlight
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-white/50 lg:text-lg">
            Meet three educators who embody our ethos — mentorship, rigour, and heart. They represent the hundreds of
            faculty shaping learners at CMR Lalgadi Malakpet every day.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="mt-12 flex w-full max-w-6xl flex-row items-center justify-center gap-2 overflow-visible [perspective:1200px] sm:gap-6 lg:gap-10"
        >
          {topFaculty.map((f) => {
            const Icon = f.Icon;
            const isCenter = f.featured;
            return (
              <div
                key={f.name}
                className={
                  isCenter
                    ? "group relative z-10 flex w-[35%] flex-col overflow-hidden rounded-[1.2rem] border border-[#FFD700]/30 bg-[#0A2463]/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:w-full sm:max-w-[340px] sm:rounded-[3rem] sm:-translate-y-8"
                    : "group relative flex w-[30%] translate-y-6 flex-col overflow-hidden rounded-[1rem] border border-white/10 bg-[#0A2463]/40 backdrop-blur-md sm:w-full sm:max-w-[300px] sm:translate-y-12 sm:rounded-[2.5rem]"
                }
              >
                <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden">
                  <Image
                    src={f.photo}
                    alt={f.name}
                    fill
                    className={`object-cover transition-transform duration-700 ${isCenter ? "duration-1000 group-hover:scale-105" : "opacity-90 group-hover:scale-110"}`}
                    sizes="(max-width: 640px) 35vw, 340px"
                  />
                </div>
                <div
                  className={`flex w-full flex-col items-center border-t border-white/10 text-center ${isCenter ? "gap-1.5 p-3 sm:gap-2 sm:p-6" : "gap-1 p-2 sm:gap-1.5 sm:p-5"}`}
                >
                  <Icon
                    className={
                      isCenter
                        ? "h-6 w-6 text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.5)] sm:h-10 sm:w-10"
                        : "h-4 w-4 text-white/60 sm:h-7 sm:w-7"
                    }
                    aria-hidden
                  />
                  <h3
                    className={`font-display font-bold leading-tight text-white ${isCenter ? "text-xs tracking-tight sm:text-2xl" : "text-[10px] leading-tight sm:text-xl"}`}
                  >
                    <span className="sm:hidden">
                      {f.name.split(" ").slice(0, 1)}
                      <br />
                      {f.name.split(" ").slice(1).join(" ")}
                    </span>
                    <span className="hidden sm:inline">{f.name}</span>
                  </h3>
                  <p
                    className={`font-body font-medium text-white/85 ${isCenter ? "text-[10px] sm:text-sm" : "text-[9px] sm:text-xs"}`}
                  >
                    {f.role}
                  </p>
                  <p
                    className={`font-mono font-bold leading-snug ${isCenter ? "bg-gradient-to-r from-[#FFD700] to-[#F5A623] bg-clip-text text-xs text-transparent sm:text-base" : "text-[10px] text-[#F5A623] sm:text-sm"}`}
                  >
                    {f.tagline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative mt-24 w-full overflow-hidden py-4 mix-blend-screen opacity-90 fade-edges-horizontal lg:mt-32">
          <div className="flex min-w-full w-[200vw] whitespace-nowrap lg:w-[150vw]">
            <div ref={pillMarqueeRef} className="flex shrink-0 flex-nowrap items-center gap-6">
              {doubledPills.map((badge, i) => (
                <span
                  key={`${badge}-${i}`}
                  className="inline-flex shrink-0 items-center gap-3 rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white/90 shadow-[0_0_20px_rgba(245,166,35,0.05)] sm:text-sm"
                >
                  <Star className="h-4 w-4 fill-current text-[#F5A623]" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .fade-edges-horizontal {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `,
        }}
      />
    </section>
  );
}
