"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarDays, ArrowRight, MapPin, Clock } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const events = [
  {
    day: "18",
    month: "DEC",
    title: "Annual Day 2026",
    time: "4:00 PM - 8:00 PM",
    venue: "Main Auditorium",
  },
  {
    day: "12",
    month: "JAN",
    title: "Science & Innovation Fair",
    time: "9:00 AM - 3:00 PM",
    venue: "STEM Block",
  },
  {
    day: "03",
    month: "FEB",
    title: "Inter-School Sports Meet",
    time: "8:00 AM - 5:00 PM",
    venue: "CMR Sports Complex",
  },
];

const news = [
  {
    title: "NEP-aligned labs open for students",
    excerpt: "New state-of-the-art STEM and language labs deepen inquiry, collaboration, and practical research.",
    date: "Mar 12, 2026",
    cat: "Campus News",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=100&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "Lalgadi Malakpet campus hosts global inter-school quiz",
    excerpt: "Teams from fifteen elite schools competed in a spirited finals.",
    date: "Feb 28, 2026",
    cat: "Press",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=100&w=800&auto=format&fit=crop",
    featured: false,
  },
  {
    title: "From the Principal’s desk: Spring term reflections",
    excerpt: "Reflections on growth, gratitude, and our architectural goals.",
    date: "Feb 05, 2026",
    cat: "Principal’s Blog",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=100&w=800&auto=format&fit=crop",
    featured: false,
  },
];

export function NewsAndEventsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const newsScrollRef = useRef<HTMLDivElement>(null);
  const agendaScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.animate-in');
      
      gsap.fromTo(elements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );

      // Seamless Infinite Continuous Scroll (One-Way)
      if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        [newsScrollRef.current, agendaScrollRef.current].forEach((scrollRef) => {
          if (!scrollRef) return;
          
          const totalWidth = scrollRef.scrollWidth;
          const halfWidth = totalWidth / 2;
          
          if (totalWidth > scrollRef.offsetWidth) {
            gsap.to(scrollRef, {
              scrollLeft: halfWidth,
              duration: 20, // Readable, constant speed
              repeat: -1,
              ease: "none",
              onRepeat: () => {
                scrollRef.scrollLeft = 0; // Seamless reset
              }
            });
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white relative z-20">
      <div className="container-custom max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 animate-in">
          <div>
            <span className="text-[#F5A623] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              What&apos;s happening
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A2463] tracking-tight">
              News & campus calendar
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-600 md:text-base">
              Stories, dates, and announcements—mirroring the news-forward home sections of leading international schools.
            </p>
          </div>
          <Link 
            href="/news" 
            className="group flex items-center gap-3 font-semibold text-sm tracking-widest uppercase text-[#0A2463] hover:text-[#F5A623] transition-colors pb-2"
          >
            View all stories
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        {/* Bento Grid Layout - Optimized for Mobile Efficiency */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT: News Column (8 cols) - Horizontal Scroller on Mobile */}
          <div className="lg:col-span-8">
            <div ref={newsScrollRef} className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-10 lg:pb-0 gap-6 sm:gap-8 snap-x snap-mandatory no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
              {/* WE DUPLICATE THE CONTENT HERE FOR SEAMLESS CONTINUOUS SCROLL ON MOBILE */}
              {[...news.slice(0, 2), ...news.slice(0, 2)].map((post, i) => (
                post.featured ? (
                  <article key={`${post.title}-${i}`} className="group relative w-[85vw] sm:w-[480px] lg:w-full h-[320px] sm:h-[450px] lg:h-[500px] rounded-[2rem] overflow-hidden animate-in shrink-0 snap-center">
                    <Image src={post.img} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" alt={post.title} sizes="(max-width: 1024px) 100vw, 66vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/90 via-[#0A2463]/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12">
                      <span className="px-3 py-1 bg-white rounded-full text-[9px] font-bold tracking-widest uppercase text-[#0A2463] mb-4 inline-block">
                        {post.cat}
                      </span>
                      <h3 className="font-display text-2xl sm:text-4xl lg:text-4xl text-white font-bold tracking-tight mb-4 group-hover:text-white transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-3 text-white/70 font-body text-xs">
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </article>
                ) : (
                  <article key={`${post.title}-${i}`} className="group flex flex-col gap-5 animate-in cursor-pointer w-[75vw] sm:w-[320px] lg:w-full shrink-0 snap-center">
                    <div className="relative w-full aspect-[16/10] rounded-[1.5rem] overflow-hidden border border-gray-100">
                      <Image src={post.img} fill className="object-cover transition-transform duration-700 group-hover:scale-105" alt={post.title} sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className="flex flex-col flex-1 px-1">
                      <span className="text-[#F5A623] font-bold tracking-widest text-[10px] uppercase mb-2">
                        {post.cat}
                      </span>
                      <h3 className="font-display text-lg sm:text-2xl font-bold text-[#0A2463] mb-2 group-hover:text-[#F5A623] transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="font-body text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <span className="text-gray-400 text-[10px] font-medium uppercase tracking-widest">
                        {post.date}
                      </span>
                    </div>
                  </article>
                )
              ))}
            </div>
          </div>

          {/* RIGHT: Events Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-gray-50/50 rounded-[2.5rem] p-6 lg:p-10 border border-gray-100 flex flex-col h-full animate-in">
              <div className="flex items-center gap-3 mb-10">
                <CalendarDays className="w-6 h-6 text-[#F5A623]" />
                <h3 className="font-display text-2xl font-bold text-[#0A2463]">Agenda</h3>
              </div>

                {/* Agenda List - Horizontal on Mobile, Vertical on Desktop */}
                <div ref={agendaScrollRef} className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible no-scrollbar -mx-2 px-2 lg:mx-0 lg:px-0 gap-4 lg:gap-0 flex-1">
                  {[...events.slice(0, 2), ...events.slice(0, 2)].map((e, index) => (
                    <div 
                      key={`${e.title}-${index}`} 
                      className={`flex flex-col lg:flex-row gap-4 lg:gap-6 py-4 lg:py-6 px-4 lg:px-0 bg-white lg:bg-transparent rounded-2xl lg:rounded-none border border-gray-100 lg:border-0 lg:border-b lg:border-gray-200 group cursor-pointer shrink-0 w-[180px] lg:w-full snap-center shadow-sm lg:shadow-none`}
                    >
                      {/* Date Block */}
                      <div className="flex flex-row lg:flex-col items-center justify-start lg:justify-center min-w-[60px] gap-2 lg:gap-0">
                        <span className="font-display text-2xl lg:text-4xl text-[#0A2463] font-bold leading-none mb-0 lg:mb-1 group-hover:text-[#F5A623] transition-colors">
                          {e.day}
                        </span>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                          {e.month}
                        </span>
                      </div>
                      {/* Event Detail */}
                      <div className="flex flex-col justify-center">
                        <h4 className="font-display text-sm lg:text-lg font-bold text-[#0A2463] mb-2 group-hover:text-[#F5A623] transition-colors line-clamp-2">
                          {e.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-1">
                          <Clock className="w-3 h-3" />
                          <span>{e.time.split(' - ')[0]}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-gray-400">
                          <MapPin className="w-3 h-3" />
                          <span className="truncate max-w-[100px]">{e.venue}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              <Link 
                href="/events" 
                className="w-full mt-8 py-4 border border-[#0A2463] text-[#0A2463] rounded-xl text-center text-xs font-bold tracking-widest uppercase hover:bg-[#0A2463] hover:text-white transition-colors"
              >
                View full calendar
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
