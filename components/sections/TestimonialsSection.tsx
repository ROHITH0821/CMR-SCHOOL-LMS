"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const slides = [
  {
    quote:
      "The teachers at CMR Lalgadi Malakpet know our child by name and by heart. The architectural depth of the curriculum combined with genuine empathy is something we haven't seen in any other school.",
    name: "Dr. Priya Sharma",
    role: "Parent of Grade VII student",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "Transitioning to the Middle phase was seamless. The STEM labs and robotics clubs gave me a sense of purpose that directly led to my admission into top-tier medical programs.",
    name: "Rohan Mehta",
    role: "Alumni — Batch 2023",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "As working parents, transparent communication is vital. CMR provides us with daily insights and a safe, nurturing environment that gives us total peace of mind every single day.",
    name: "Anil & Kavitha N.",
    role: "Parents of Primary student",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=400&auto=format&fit=crop",
  },
] as const;

function TestimonialCard({
  quote,
  name,
  role,
  img,
  compact,
}: (typeof slides)[number] & { compact?: boolean }) {
  return (
    <article
      className={
        compact
          ? "flex h-full flex-col rounded-2xl border border-slate-100 bg-white/80 p-6 text-center shadow-[0_12px_40px_-20px_rgba(10,36,99,0.12)]"
          : ""
      }
    >
      <div
        className={
          compact
            ? "relative mx-auto mb-5 h-16 w-16 shrink-0"
            : "group relative mb-10 h-24 w-24 lg:mb-10 lg:h-32 lg:w-32"
        }
      >
        <div
          className={
            compact
              ? "absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-full bg-[#FFD700]"
              : "absolute inset-0 translate-x-1 translate-y-1 rounded-full bg-[#FFD700] transition-transform group-hover:translate-x-2 group-hover:translate-y-2"
          }
        />
        <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-xl">
          <Image src={img} alt={name} fill className="object-cover" sizes={compact ? "64px" : "(max-width: 768px) 100px, 150px"} />
        </div>
      </div>

      <Quote
        className={`mx-auto mb-4 text-[#FFD700] opacity-40 ${compact ? "h-7 w-7" : "mb-8 h-10 w-10"}`}
        aria-hidden
      />

      <p
        className={`font-display font-medium italic leading-relaxed text-[#0A2463] ${
          compact ? "mb-6 flex-1 text-[0.95rem] leading-snug lg:text-base" : "mb-10 text-2xl leading-relaxed lg:text-3xl"
        }`}
      >
        &ldquo;{quote}&rdquo;
      </p>

      <div className={compact ? "mt-auto" : ""}>
        <h4 className="font-display text-lg font-bold tracking-tight text-[#0A2463] lg:text-xl">{name}</h4>
        <p className="mt-2 font-body text-[10px] font-semibold uppercase tracking-widest text-gray-400 sm:text-xs">
          {role}
        </p>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];

  useEffect(() => {
    if (paused) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    let id: ReturnType<typeof setInterval> | undefined;

    const syncInterval = () => {
      if (id) clearInterval(id);
      if (mq.matches) return;
      id = setInterval(() => {
        setIndex((i) => (i + 1) % slides.length);
      }, 3000);
    };

    syncInterval();
    mq.addEventListener("change", syncInterval);
    return () => {
      mq.removeEventListener("change", syncInterval);
      if (id) clearInterval(id);
    };
  }, [paused]);

  return (
    <section
      className="relative overflow-hidden bg-white py-24 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      <div className="container-custom relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-[#F5A623]">What families say</span>
          <h2 className="font-display text-4xl font-bold tracking-tighter text-[#0A2463] sm:text-5xl">Voices of Trust</h2>
        </div>

        {/* Desktop: 3-up grid */}
        <div className="hidden gap-8 lg:grid lg:grid-cols-3 lg:items-stretch">
          {slides.map((item) => (
            <TestimonialCard key={item.name} {...item} compact />
          ))}
        </div>

        {/* Mobile / tablet: carousel */}
        <div className="relative flex min-h-[380px] flex-col items-center lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="flex max-w-3xl flex-col items-center text-center"
            >
              <TestimonialCard {...slide} />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-[-52px] flex items-center gap-4">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`relative h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-12 bg-[#0A2463]" : "w-3 bg-gray-200 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
