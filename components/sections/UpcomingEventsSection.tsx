"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FadeStagger, FadeStaggerItem } from "@/components/motion/FadeStagger";
import { fetchSheetData } from "@/lib/google-sheets";
import { GOOGLE_SHEET_IDS } from "@/lib/constants";
import { Loader2 } from "lucide-react";

const STATIC_EVENTS = [
  {
    day: "18",
    month: "Dec",
    title: "Annual Day 2026",
    desc: "Celebration of talent, culture, and community on our main stage.",
  },
  {
    day: "12",
    month: "Jan",
    title: "Science & Innovation Fair",
    desc: "Student-led exhibits, prototypes, and interactive demos.",
  },
  {
    day: "03",
    month: "Feb",
    title: "Inter-School Sports Meet",
    desc: "Track, field, and team events across age groups.",
  },
];

interface Event {
  day: string;
  month: string;
  title: string;
  desc: string;
}

interface UpcomingEventsSectionProps {
  initialData?: Event[];
}

export function UpcomingEventsSection({ initialData }: UpcomingEventsSectionProps) {
  const [events, setEvents] = useState<Event[]>(initialData && initialData.length > 0 ? initialData : STATIC_EVENTS);
  const [isLoading, setIsLoading] = useState(!initialData || initialData.length === 0);

  useEffect(() => {
    // If we already have initialData, don't trigger a client-side fetch unless we want to re-sync.
    // For now, we skip the fetch if initialData is provided to reduce network calls.
    if (initialData && initialData.length > 0) return;

    async function loadEvents() {
      try {
        const data = await fetchSheetData<Event>(GOOGLE_SHEET_IDS.CALENDAR);
        if (data && data.length > 0) {
          setEvents(data);
        }
      } catch (error) {
        console.error("Failed to load events:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadEvents();
  }, [initialData]);

  return (
    <section className="section-padding bg-[#FFFFFF]">
      <div className="container-custom">
        <h2 className="mb-10 font-display text-3xl text-[#0A2463] md:text-4xl text-center md:text-left">Upcoming events</h2>
        
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <Loader2 className="w-10 h-10 animate-spin mb-4" />
            <p className="text-xs font-bold uppercase tracking-widest">Syncing Calendar...</p>
          </div>
        ) : (
          <FadeStagger className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {events.slice(0, 3).map((e, idx) => (
              <FadeStaggerItem key={e.title + idx}>
                <article className={`flex flex-col sm:flex-row gap-4 rounded-card border border-border bg-white p-4 md:p-5 shadow-soft transition hover:shadow-soft-lg ${
                  events.slice(0, 3).length % 2 !== 0 && idx === events.slice(0, 3).length - 1 ? "col-span-2 sm:col-span-1 justify-self-center w-full sm:w-auto max-w-sm" : ""
                }`}>
                  <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-card bg-[#0A2463] text-center text-white">
                    <span className="font-mono text-2xl font-bold text-[#F5A623]">{e.day}</span>
                    <span className="text-xs uppercase tracking-wide text-white/85">{e.month}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-[#0A2463]">{e.title}</h3>
                    <p className="mt-2 font-body text-sm text-textSecondary">{e.desc}</p>
                    <Link
                      href="/events"
                      className="mt-3 inline-block text-sm font-semibold text-highlight hover:underline"
                    >
                      View details
                    </Link>
                  </div>
                </article>
              </FadeStaggerItem>
            ))}
          </FadeStagger>
        )}
      </div>
    </section>
  );
}
