"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Calendar, MapPin, Filter, ChevronDown, Award, Loader2 } from "lucide-react";
import { ACHIEVEMENTS_DATA, type Achievement, type BranchName } from "@/lib/achievements-data";
import { fetchSheetData } from "@/lib/google-sheets";
import { GOOGLE_SHEET_IDS } from "@/lib/constants";

const MONTHS = ["April", "March", "February", "January", "December", "November", "October", "September", "August", "July", "June"];
const ACADEMIC_YEARS = ["2025-26", "2024-25"];
const BRANCHES: BranchName[] = ["Lalgadi Malakpet", "Kompally", "Suraram", "Shampur", "Kundanpally", "MB Grammar School"];

export function MonthlyAchievementsSection({ initialData }: { initialData?: Achievement[] }) {
  const [activeMonth, setActiveMonth] = useState("April");
  const [selectedYear, setSelectedYear] = useState("2025-26");
  const [selectedBranch, setSelectedBranch] = useState<BranchName | "All">("All");
  const [achievements, setAchievements] = useState<Achievement[]>(initialData && initialData.length > 0 ? initialData : ACHIEVEMENTS_DATA);
  const [isLoading, setIsLoading] = useState(!initialData || (initialData && initialData.length === 0));



  useEffect(() => {
    if (initialData && initialData.length > 0) return; // Skip if we already have data
    async function loadAchievements() {
      try {
        const data = await fetchSheetData<Achievement>(GOOGLE_SHEET_IDS.ACHIEVEMENTS);
        if (data && data.length > 0) {
          setAchievements(data);
        }
      } catch (error) {
        console.error("Failed to load achievements:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadAchievements();
  }, []);

  const filteredAchievements = useMemo(() => {
    return achievements.filter(a => 
      a.month === activeMonth && 
      a.academicYear === selectedYear && 
      (selectedBranch === "All" || a.branch === selectedBranch)
    );
  }, [achievements, activeMonth, selectedYear, selectedBranch]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#F5A623]">Wall of Fame</span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl md:text-6xl font-black text-[#0A2463] leading-tight">
            Monthly <span className="text-[#0DB6B5]">Achievements</span>
          </h2>
        </div>

        {/* FILTERS */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 p-4 bg-[#fcfcfd] border border-gray-100 rounded-[2rem]">
          {/* Month Scroller */}
          <div className="flex overflow-x-auto no-scrollbar gap-2 w-full lg:w-auto pb-2 lg:pb-0">
            {MONTHS.map(month => (
              <button
                key={month}
                onClick={() => setActiveMonth(month)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeMonth === month 
                    ? "bg-[#0A2463] text-white shadow-lg" 
                    : "text-[#0A2463]/40 hover:text-[#0A2463] hover:bg-gray-100"
                }`}
              >
                {month}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto justify-center">
            {/* Year Filter */}
            <div className="relative group">
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="appearance-none bg-white border border-gray-200 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#0A2463] pr-10 focus:outline-none focus:border-[#F5A623] cursor-pointer"
              >
                {ACADEMIC_YEARS.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0A2463]/40 pointer-events-none" />
            </div>

            {/* Branch Filter */}
            <div className="relative group">
              <select 
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value as any)}
                className="appearance-none bg-white border border-gray-200 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#0A2463] pr-10 focus:outline-none focus:border-[#0DB6B5] cursor-pointer"
              >
                <option value="All">All Campuses</option>
                {BRANCHES.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0A2463]/40 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ACHIEVEMENTS GRID */}
        <div className="relative min-h-[400px]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-32 text-gray-400">
              <Loader2 className="w-12 h-12 animate-spin mb-6" />
              <p className="text-sm font-bold uppercase tracking-widest">Loading Wall of Fame...</p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
            {filteredAchievements.length > 0 ? (
              <motion.div 
                key={`${activeMonth}-${selectedYear}-${selectedBranch}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
              >
                {filteredAchievements.map((achievement, idx) => (
                  <article 
                    key={achievement.id}
                    className={`group relative flex flex-col bg-white border border-gray-100 rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-8 transition-all hover:border-[#F5A623]/30 hover:shadow-[0_30px_80px_rgba(245,166,35,0.08)] ${
                      filteredAchievements.length % 2 !== 0 && idx === filteredAchievements.length - 1 ? "col-span-2 sm:col-span-1 justify-self-center w-full sm:w-auto max-w-sm" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#F5A623]/10 flex items-center justify-center text-[#F5A623]">
                          <Award size={20} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#0A2463]/40">
                          {achievement.branch}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#0A2463] mb-4 leading-snug group-hover:text-[#F5A623] transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                      {achievement.description}
                    </p>

                    {achievement.image && (
                      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner mt-auto">
                        <Image
                          src={achievement.image}
                          alt={achievement.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}
                  </article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-32 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 mb-6">
                  <Trophy size={40} />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0A2463] mb-2">No achievements found</h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  We are constantly striving for excellence. Check back soon for updates from {activeMonth}.
                </p>
              </motion.div>
            )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}
