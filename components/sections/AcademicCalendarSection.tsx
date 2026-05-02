"use client";

import { useState, useMemo, useEffect } from "react";
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay, 
  addDays, 
  eachDayOfInterval,
  parseISO
} from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Info, X, Loader2 } from "lucide-react";
import { SCHOOL_EVENTS, type SchoolEvent, type EventCategory } from "@/lib/calendar-data";
import { fetchSheetData } from "@/lib/google-sheets";
import { GOOGLE_SHEET_IDS } from "@/lib/constants";

const CATEGORY_COLORS: Record<EventCategory, string> = {
  Exam: "#EF4444", // Red
  Holiday: "#F5A623", // Gold
  Event: "#0A2463", // Dark Blue
  Activity: "#0DB6B5", // Teal
};

export function AcademicCalendarSection({ initialData }: { initialData?: SchoolEvent[] }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<SchoolEvent | null>(null);
  const [events, setEvents] = useState<SchoolEvent[]>(initialData || SCHOOL_EVENTS);
  const [isLoading, setIsLoading] = useState(!initialData);

  useEffect(() => {
    if (initialData) return;
    async function loadEvents() {
      try {
        const data = await fetchSheetData<SchoolEvent>(GOOGLE_SHEET_IDS.CALENDAR);
        if (data && data.length > 0) {
          setEvents(data);
        }
      } catch (error) {
        console.error("Failed to load calendar events:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadEvents();
  }, []);

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(currentMonth));
    const end = endOfWeek(endOfMonth(currentMonth));
    return eachDayOfInterval({ start, end });
  }, [currentMonth]);

  const getEventsForDay = (day: Date) => {
    return events.filter(event => isSameDay(parseISO(event.date), day));
  };

  return (
    <section className="py-24 bg-[#fcfcfd]">
      <div className="container-custom max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="text-center md:text-left">
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#0DB6B5]">Academic Schedule</span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-black text-[#0A2463]">
              School <span className="text-[#F5A623]">Calendar</span>
            </h2>
          </div>

          <div className="flex items-center gap-6 bg-white border border-gray-100 p-2 rounded-full shadow-sm">
            <button onClick={prevMonth} className="p-3 hover:bg-gray-50 rounded-full transition-colors text-[#0A2463]">
              <ChevronLeft size={24} />
            </button>
            <span className="font-display text-xl font-bold text-[#0A2463] min-w-[160px] text-center">
              {format(currentMonth, "MMMM yyyy")}
            </span>
            <button onClick={nextMonth} className="p-3 hover:bg-gray-50 rounded-full transition-colors text-[#0A2463]">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* LEGEND */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {(Object.keys(CATEGORY_COLORS) as EventCategory[]).map(cat => (
            <div key={cat} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: CATEGORY_COLORS[cat] }} />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A2463]/60">{cat}s</span>
            </div>
          ))}
        </div>

        {/* CALENDAR GRID */}
        <div className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.03)]">
          {/* Weekday Labels */}
          <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-100">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
              <div key={d} className="py-4 text-center text-[10px] font-black uppercase tracking-[0.2em] text-[#0A2463]/40">
                {d}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7">
            {days.map((day, idx) => {
              const dayEvents = getEventsForDay(day);
              const isCurrentMonth = isSameMonth(day, currentMonth);
              
              return (
                <div 
                  key={idx}
                  className={`min-h-[120px] md:min-h-[160px] p-2 border-r border-b border-gray-50 last:border-r-0 relative transition-colors ${
                    !isCurrentMonth ? "bg-gray-50/50" : "hover:bg-gray-50/30"
                  }`}
                >
                  <span className={`text-sm font-bold ${
                    !isCurrentMonth ? "text-gray-300" : "text-[#0A2463]"
                  }`}>
                    {format(day, "d")}
                  </span>

                  <div className="mt-2 space-y-1">
                    {dayEvents.map(event => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => setSelectedEvent(event)}
                        className="cursor-pointer p-1.5 rounded-lg border border-transparent hover:border-white hover:shadow-sm transition-all"
                        style={{ backgroundColor: `${CATEGORY_COLORS[event.category]}15` }}
                      >
                        <p className="text-[9px] md:text-[10px] font-bold truncate" style={{ color: CATEGORY_COLORS[event.category] }}>
                          {event.title}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* EVENT MODAL */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-[#0A2463]/80 backdrop-blur-md p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-md rounded-[2.5rem] p-10 relative shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-[#0A2463]"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                  style={{ backgroundColor: CATEGORY_COLORS[selectedEvent.category] }}
                >
                  <CalendarIcon size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40">
                    {selectedEvent.category}
                  </span>
                  <p className="font-bold text-[#0A2463]">
                    {format(parseISO(selectedEvent.date), "MMMM d, yyyy")}
                  </p>
                </div>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#0A2463] mb-4">
                {selectedEvent.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                {selectedEvent.description}
              </p>

              <button
                onClick={() => setSelectedEvent(null)}
                className="w-full py-4 rounded-full bg-[#0A2463] text-white font-bold tracking-widest text-[11px] uppercase hover:bg-[#0DB6B5] transition-colors"
              >
                Dismiss
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
