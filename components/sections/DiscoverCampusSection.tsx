"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Heart, Trophy, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CAMPUS_NAME } from "@/lib/constants";

const TABS = [
  {
    id: "academics",
    label: "Academics",
    icon: BookOpen,
    headline: "Rigour that meets curiosity",
    body: "CBSE-aligned programmes, NEP-focused pedagogy, and continuous assessment that builds conceptual depth—not rote recall. Dedicated labs, libraries, and mentor hours keep every learner on a clear growth path.",
    href: "/academics",
    cta: "See curriculum",
  },
  {
    id: "whole-child",
    label: "Pastoral care",
    icon: Heart,
    headline: "Safe, known, and supported",
    body: "Counselling, life-skills, and an inclusive culture where every child is seen. We partner with families so wellbeing and achievement move together.",
    href: "/about",
    cta: "Our ethos",
  },
  {
    id: "beyond",
    label: "Sports & arts",
    icon: Trophy,
    headline: "Beyond the timetable",
    body: "Teams, studios, and stages where discipline meets joy—from inter-house meets to music, drama, and clubs that build confidence for life.",
    href: "/events",
    cta: "Campus life",
  },
  {
    id: "community",
    label: "Community",
    icon: Users,
    headline: "Parents as partners",
    body: "Transparent communication, PTM cycles, and portals that keep you in step with learning. A Lalgadi Malakpet community rooted in trust and shared purpose.",
    href: "/contact",
    cta: "Connect with us",
  },
] as const;

export function DiscoverCampusSection() {
  const [active, setActive] = useState<(typeof TABS)[number]["id"]>("academics");
  const current = TABS.find((t) => t.id === active) ?? TABS[0];
  const PanelIcon = current.icon;

  return (
    <section className="relative border-b border-[#0A2463]/[0.06] bg-[#fafbff] py-16 md:py-20">
      <div className="container-custom w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-[#0DB6B5]">Discover</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0A2463] md:text-4xl lg:text-[2.75rem]">
            Explore {CAMPUS_NAME}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
            Select a pillar to see how we structure learning, care, activities, and family partnership at Lalgadi Malakpet.
          </p>
        </div>

        <div className="mt-10 flex w-full flex-wrap justify-center gap-2 md:mt-12 md:gap-3">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isOn = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all md:px-5 md:py-3 md:text-[13px]",
                  isOn
                    ? "border-[#0A2463] bg-[#0A2463] text-white shadow-md shadow-[#0A2463]/20"
                    : "border-slate-200 bg-white text-[#0A2463]/80 hover:border-[#0A2463]/30 hover:bg-white"
                )}
              >
                <Icon className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="relative mt-10 min-h-[200px] w-full md:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_20px_60px_-24px_rgba(10,36,99,0.12)] sm:p-9 md:p-11 lg:p-12"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12 lg:gap-14">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0A2463]/[0.06] text-[#0A2463]">
                  <PanelIcon className="h-7 w-7" strokeWidth={1.5} aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-2xl font-bold text-[#0A2463] md:text-3xl">{current.headline}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">{current.body}</p>
                  <Link
                    href={current.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#F5A623] transition hover:gap-3"
                  >
                    {current.cta}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
