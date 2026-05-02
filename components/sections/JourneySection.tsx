"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
  { name: "CMR International, Suraram", board: "CBSE Affiliated", image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop" },
  { name: "CMR School, Kompally", board: "CBSE Affiliated", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop" },
  { name: "CMR International, Shapur", board: "CBSE Affiliated", image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop" },
  { name: "MB Grammar, Kundanpally", board: "State Board (SSC)", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop" },
  { name: "CMR Lalgadi Malakpet", board: "CBSE Applied For", image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=800&auto=format&fit=crop" },
];

function StatItem({ label, end, suffix, icon, active }: { label: string; end: number; suffix: string; icon: React.ReactNode; active: boolean }) {
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

export function JourneySection() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-[#0A2463] py-24 lg:py-32" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_20%_30%,#0DB6B5_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 h-full w-full bg-[radial-gradient(circle_at_80%_70%,#F5A623_0%,transparent_50%)]" />
      </div>
      
      <div className="container-custom relative z-10 mx-auto max-w-7xl px-4">
        {/* MILESTONES HEADER */}
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

        {/* STATS COUNTERS */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 mb-32 lg:mb-48">
          {stats.map((stat, idx) => (
            <StatItem key={idx} {...stat} active={inView} />
          ))}
        </div>

        {/* NETWORK SECTION */}
        <div className="flex flex-col items-center">
          <div className="text-center mb-16 md:mb-20">
            <h3 className="font-display text-3xl md:text-5xl font-black !text-[#F5A623] mb-6">
              Our Growing Network
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed tracking-wide">
              Extending the CMR legacy across Hyderabad, providing world-class education 
              in your neighborhood through our prestigious campuses.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 w-full">
            {branches.map((branch, idx) => (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex flex-col items-center group"
              >
                <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[#F5A623]/20">
                  <Image
                    src={branch.image}
                    alt={branch.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463] via-transparent to-transparent opacity-60" />
                </div>
                <h4 className="font-display text-sm md:text-base font-bold !text-white text-center tracking-wide group-hover:!text-[#F5A623] transition-colors uppercase">
                  {branch.name}
                </h4>
                <p className="text-[9px] font-black uppercase tracking-widest text-[#0DB6B5] mt-1">
                  {branch.board}
                </p>
                <div className="mt-2 h-1 w-0 bg-[#F5A623] rounded-full transition-all duration-300 group-hover:w-8" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
