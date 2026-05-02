"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FACULTY, type FacultyMember } from "@/lib/faculty-data";

const departments = ["All", "Science", "Maths", "Languages", "Social", "PE", "Arts"] as const;

const hod = FACULTY.slice(0, 3);

export function FacultyGrid() {
  const [dept, setDept] = useState<(typeof departments)[number]>("All");

  const list = dept === "All" ? FACULTY : FACULTY.filter((f) => f.dept === dept);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {departments.map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setDept(d)}
            className={`rounded-pill px-4 py-2 text-sm font-medium ${
              dept === d ? "bg-primary text-white" : "bg-sectionAlt text-textSecondary"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <section className="mb-14">
        <h2 className="mb-6 font-display text-2xl text-primary">HOD spotlight</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {hod.map((f) => (
            <FacultyCard key={f.slug} f={f} large />
          ))}
        </div>
      </section>

      <h2 className="mb-6 font-display text-2xl text-primary">All faculty</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((f) => (
            <FacultyCard key={f.slug} f={f} />
          ))}
        </AnimatePresence>
      </div>
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
  const imgH = large ? "h-56 sm:h-[15rem]" : "h-48 sm:h-52";

  return (
    <motion.div layout className={`relative ${large ? "min-h-[360px]" : "min-h-[320px]"}`}>
      <Link
        href={`/faculty/${f.slug}`}
        className="group relative block h-full overflow-hidden rounded-card border border-border bg-white shadow-soft transition-all duration-500 ease-quartOut hover:-translate-y-2 hover:border-[#F5A623]/35 hover:shadow-[0_22px_50px_-12px_rgba(15,23,42,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2463]"
      >
        <div className={`relative ${imgH} overflow-hidden`}>
          <Image
            src={f.photo}
            alt={f.name}
            fill
            className="object-cover object-[center_22%] transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            sizes={large ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
          />
        </div>

        <div className="relative z-[2] border-t border-black/[0.06] bg-white p-4">
          <p className="font-display text-lg text-primary">{f.name}</p>
          <p className="text-sm text-highlight">{f.subject}</p>
          <p className="mt-1 text-xs text-textMuted">{f.qual}</p>
          <p className="mt-2 font-mono text-xs text-textSecondary">{f.years} yrs experience</p>
          <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#0DB6B5]">
            View profile
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </p>
        </div>

        <div className="pointer-events-none absolute inset-0 z-[3] flex flex-col justify-center rounded-[inherit] bg-gradient-to-br from-stone-900/[0.97] via-zinc-900/[0.96] to-neutral-950/[0.98] p-6 opacity-0 shadow-inner ring-1 ring-white/10 transition-all duration-500 ease-out [backface-visibility:hidden] group-hover:opacity-100 group-hover:backdrop-blur-[1px]">
          <div className="translate-y-5 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            <p className="font-body text-sm leading-relaxed text-white/95">{f.bio}</p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#F5A623]">
              Open full profile
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
