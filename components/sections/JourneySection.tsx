"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { School, GraduationCap, Users, Building2, Globe } from "lucide-react";

const stats = [
  { label: "Schools", end: 10, suffix: "", icon: <School className="w-6 h-6" /> },
  { label: "Students", end: 10000, suffix: "+", icon: <Users className="w-6 h-6" /> },
  { label: "Board Pass Rate", end: 100, suffix: "%", icon: <GraduationCap className="w-6 h-6" /> },
  { label: "Acres of Campus", end: 25, suffix: "+", icon: <Globe className="w-6 h-6" /> },
  { label: "Infrastructure Facilities", end: 50, suffix: "+", icon: <Building2 className="w-6 h-6" /> },
];

const branches = [
  {
    name: "CMR International, Suraram",
    board: "CBSE Affiliated",
    image: "https://storage.googleapis.com/cdn-edustoke/mysql_images/full/9a668c7c-41d6-4776-97b9-0f68296fb240_6a0447af.webp",
  },
  {
    name: "CMR School, Kompally",
    board: "CBSE Affiliated",
    image: "https://cmrschoolkompally.com/wp-content/uploads/2024/02/Building_edited.webp",
  },
  {
    name: "CMR International, Shapur",
    board: "CBSE Affiliated",
    image: "https://cmrisshapur.com/wp-content/uploads/2025/02/School-Building-CMR-Shapur-Final-1.png",
  },
  {
    name: "MB Grammar, Kundanpally",
    board: "State Board (SSC)",
    image: "https://mbgrammarschool.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-03-at-11.11.00_4563dc8b.jpg",
  },
  {
    name: "CMR Lalgadi Malakpet",
    board: "CBSE Applied For",
    image: "https://res.cloudinary.com/ds3egsoa3/image/upload/v1777751352/hero-school_i4i9jy.jpg",
  },
];

const VISIBLE = 3;        // cards shown at once on desktop
const INTERVAL_MS = 3000; // auto-advance every 3s

function StatItem({
  label, end, suffix, icon, active,
}: {
  label: string; end: number; suffix: string; icon: React.ReactNode; active: boolean;
}) {
  const value = useCountUp(end, 2500, active);
  return (
    <div className="flex flex-col items-center p-6 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5A623]/10 text-[#F5A623]">
        {icon}
      </div>
      <p className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl tracking-tight">
        {value.toLocaleString()}{suffix}
      </p>
      <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0DB6B5] md:text-xs">
        {label}
      </p>
    </div>
  );
}

/**
 * Returns a looped window of `count` items starting at `startIndex`.
 * e.g. branches=[0,1,2,3,4], startIndex=4, count=3 → [4, 0, 1]
 */
function getWindow(arr: typeof branches, startIndex: number, count: number) {
  return Array.from({ length: count }, (_, i) => ({
    ...arr[(startIndex + i) % arr.length],
    loopKey: (startIndex + i) % arr.length, // stable key for the item
    posKey: startIndex * 100 + i,           // unique key per render position
  }));
}

export function JourneySection() {
  const { ref, inView } = useInView<HTMLDivElement>();

  // `startIndex` = index of the LEFT-MOST visible card
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1); // 1 = forward (→), -1 = backward
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = branches.length;

  const advance = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % total);
  };

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(advance, INTERVAL_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const visibleCards = getWindow(branches, startIndex, VISIBLE);

  // Dot indicators: one dot per branch, highlight the centre card's index
  const centreIndex = (startIndex + 1) % total;

  return (
    <section
      className="relative overflow-hidden bg-[#0A2463] py-24 lg:py-32"
      ref={ref}
    >
      {/* Decorative background blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_20%_30%,#0DB6B5_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 h-full w-full bg-[radial-gradient(circle_at_80%_70%,#F5A623_0%,transparent_50%)]" />
      </div>

      {/* ── Milestones header + stats ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.4em] text-[#F5A623]"
          >
            Milestones of Excellence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl font-extrabold text-white sm:text-5xl md:text-7xl tracking-tight"
          >
            For Our <span className="text-[#F5A623]">Journey</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 mb-32 lg:mb-48">
          {stats.map((stat, idx) => (
            <StatItem key={idx} {...stat} active={inView} />
          ))}
        </div>
      </div>

      {/* ── Growing Network ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-black text-[#F5A623] mb-6"
          >
            Our Growing Network
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed tracking-wide"
          >
            Extending the CMR legacy across Hyderabad, providing world-class
            education in your neighborhood through our prestigious campuses.
          </motion.p>
        </div>

        {/* ── Carousel ── */}
        <div className="relative">
          {/* Cards window — overflow hidden clips entering/exiting cards */}
          <div className="overflow-hidden rounded-3xl">
            <div className="flex gap-4 md:gap-6">
              <AnimatePresence mode="popLayout" initial={false}>
                {visibleCards.map((branch) => (
                  <motion.div
                    key={branch.posKey}
                    initial={{ opacity: 0, x: direction > 0 ? 120 : -120 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -120 : 120 }}
                    transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer h-[350px] md:h-[450px] lg:h-[500px]"
                    style={{ width: "calc((100% - 2 * 1.5rem) / 3)" }}
                  >
                    <Image
                      src={branch.image}
                      alt={branch.name}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      sizes="33vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463] via-[#0A2463]/30 to-transparent" />
                    {/* Gold shimmer on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-tr from-[#F5A623] to-transparent" />

                    {/* Label */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-center">
                      <h4 className="font-display text-xs md:text-sm lg:text-base font-black text-white mb-1 tracking-wide uppercase line-clamp-2">
                        {branch.name}
                      </h4>
                      <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-[#0DB6B5]">
                        {branch.board}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── Dot indicators ── */}
        <div className="flex justify-center gap-2 mt-8">
          {branches.map((_, idx) => (
            <div
              key={idx}
              className={`transition-all duration-300 rounded-full ${
                idx === centreIndex
                  ? "bg-[#F5A623] w-8 h-2"
                  : "bg-white/30 w-2 h-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}