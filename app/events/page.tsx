"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EventsCalendar } from "@/components/events/EventsCalendar";
import { MapPin, Clock, Calendar, Download } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function EventsPage() {
  return (
    <div className="bg-[#FFFFFF]">
      <section className="container-custom pt-12 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#F5A623] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            School Calendar
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-bold text-[#0A2463]">Events</h1>
          <p className="mt-6 max-w-2xl text-gray-500 font-body text-lg leading-relaxed">
            Plan around PTM, fairs, sports, and cultural milestones — add key dates to your calendar.
          </p>
        </motion.div>
      </section>

      <section className="pb-24">
        <div className="container-custom">
          <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2, duration: 0.8 }}
             className="rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-[0_30px_80px_rgba(0,0,0,0.05)] bg-white p-4 sm:p-8"
          >
            <EventsCalendar />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50/50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#0A2463] flex items-center justify-center text-[#FFD700] shadow-xl shadow-[#0A2463]/10">
              <Calendar className="w-6 h-6" />
            </div>
            <h2 className="font-display text-4xl font-bold text-[#0A2463]">Upcoming</h2>
          </motion.div>

          <motion.ul 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { d: "Apr 12, 2026", t: "Science Fair", v: "Main auditorium", time: "9:00 AM" },
              { d: "May 02, 2026", t: "Sports trials", v: "Grounds", time: "7:00 AM" },
            ].map((e) => (
              <motion.li
                key={e.t}
                variants={item}
                className="flex flex-col justify-between gap-6 rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 md:flex-row md:items-center group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center justify-center bg-gray-50 rounded-2xl p-4 min-w-[80px]">
                    <span className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-1">{e.d.split(',')[0].split(' ')[0]}</span>
                    <span className="text-2xl font-bold text-[#0A2463]">{e.d.split(',')[0].split(' ')[1]}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#0A2463] group-hover:text-[#F5A623] transition-colors">{e.t}</h3>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500 font-medium">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-300" />
                        {e.v}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-300" />
                        {e.time}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-[#0A2463] text-white px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#F5A623] transition-colors shadow-lg shadow-[#0A2463]/10"
                >
                  Remind Me
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="py-24 container-custom text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-[#0A2463] rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700] rounded-full blur-[120px] opacity-10 -mr-32 -mt-32" />
          
          <h2 className="font-display text-4xl font-bold mb-6">Need the full schedule?</h2>
          <p className="text-white/60 font-body text-lg max-w-xl mx-auto mb-10 leading-relaxed">Download the official holiday list and academic calendar for the current year in a single PDF.</p>
          <a 
            href="#" 
            className="inline-flex items-center gap-3 bg-[#FFD700] text-[#0A2463] px-10 py-5 rounded-full font-bold tracking-widest uppercase text-sm hover:bg-white transition-all shadow-2xl"
          >
            <Download className="w-5 h-5" />
            Download Calendar
          </a>
        </motion.div>
      </section>
    </div>
  );
}
