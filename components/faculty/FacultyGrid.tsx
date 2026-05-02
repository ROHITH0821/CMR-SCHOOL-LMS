"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FACULTY, type FacultyMember } from "@/lib/faculty-data";

const departments = ["All", "Science", "Maths", "Languages", "Social", "PE", "Arts"] as const;

interface FacultyGridProps {
  initialData?: FacultyMember[];
}

export function FacultyGrid({ initialData }: FacultyGridProps) {
  const [dept, setDept] = useState<(typeof departments)[number]>("All");
  
  const allFaculty = initialData && initialData.length > 0 ? initialData : FACULTY;
  const list = dept === "All" ? allFaculty : allFaculty.filter((f) => f.dept === dept);
  const hod = allFaculty.slice(0, 3);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {departments.map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setDept(d)}
            className={`rounded-pill px-5 py-2.5 text-sm font-semibold transition-all ${
              dept === d 
                ? "bg-[#0A2463] text-white shadow-md shadow-[#0A2463]/20" 
                : "bg-gray-100 text-[#0A2463]/60 hover:bg-gray-200"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <section className="mb-20">
        <h2 className="mb-8 font-display text-2xl font-bold text-[#0A2463] flex items-center gap-3">
          <span className="w-8 h-[2px] bg-[#F5A623]" />
          Department heads
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {hod.map((f) => (
            <FacultyCard key={f.slug} f={f} large />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-8 font-display text-2xl font-bold text-[#0A2463] flex items-center gap-3">
          <span className="w-8 h-[2px] bg-[#0DB6B5]" />
          Our educators
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((f) => (
              <FacultyCard key={f.slug} f={f} />
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

function FacultyCard({
  f,
  large,
}: {
  f: FacultyMember;
  large?: boolean;
}) {
  const imgH = large ? "h-64 sm:h-[18rem]" : "h-52 sm:h-56";

  return (
    <motion.div layout className={`relative ${large ? "min-h-[420px]" : "min-h-[360px]"}`}>
      <Link
        href={`/faculty/${f.slug}`}
        className="group relative block h-full overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_8px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(10,36,99,0.15)]"
      >
        <div className={`relative ${imgH} overflow-hidden`}>
          <Image
            src={f.photo}
            alt={f.name}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
            sizes={large ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className="p-6">
          <p className="font-display text-xl font-bold text-[#0A2463]">{f.name}</p>
          <p className="text-sm font-semibold text-[#0DB6B5] uppercase tracking-wider mt-1">{f.subject}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-gray-50 text-[10px] font-bold text-gray-500 uppercase tracking-widest">{f.qual}</span>
            <span className="px-3 py-1 rounded-full bg-[#F5A623]/10 text-[10px] font-bold text-[#F5A623] uppercase tracking-widest">{f.years} yrs exp</span>
          </div>
          <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#0A2463] group-hover:text-[#F5A623] transition-colors">
            Meet profile
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
