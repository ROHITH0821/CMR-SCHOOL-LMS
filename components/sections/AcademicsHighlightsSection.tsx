"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, FlaskConical, GraduationCap, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const programs = [
  {
    title: "Pre-Primary",
    tag: "Ages 3 - 5",
    desc: "Playful discovery & sensory learning",
    details: "Interactive environments, creative play, and sensory activities designed to build strong early cognitive and social skills.",
    icon: BookOpen,
    photo: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=100&w=1200&auto=format&fit=crop",
    year: "Early Years"
  },
  {
    title: "Primary",
    tag: "Ages 6 - 10",
    desc: "Foundational literacy & numeracy",
    details: "Play-based learning, phonics, and hands-on numeracy labs designed to spark early curiosity and a deep love for learning.",
    icon: BookOpen,
    photo: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=100&w=1200&auto=format&fit=crop",
    year: "Foundation"
  },
  {
    title: "Middle",
    tag: "Ages 11 - 13",
    desc: "Inquiry-led projects & labs",
    details: "Immersive STEM corners, active debates, and collaborative research environments built to rigorously challenge critical thinking.",
    icon: FlaskConical,
    photo: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=100&w=1200&auto=format&fit=crop",
    year: "Exploration"
  },
  {
    title: "Secondary",
    tag: "Ages 14 - 16",
    desc: "Board readiness & mentorship",
    details: "Highly structured revision cycles, analytical mock tests, and dedicated 1-on-1 mentor hours ensuring peak academic performance.",
    icon: GraduationCap,
    photo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=100&w=1200&auto=format&fit=crop",
    year: "Mastery"
  },
];

export function AcademicsHighlightsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.stack-card');
      const indicators = gsap.utils.toArray<HTMLElement>('.progress-node');
      
      // Main Stacking & Progress Logic
      cards.forEach((card, i) => {
        const textContent = card.querySelector('.card-content');
        const imageContent = card.querySelector('.card-image');
        const indicator = indicators[i];

        // Snappier Entrance
        gsap.fromTo([textContent, imageContent],
          { 
            y: 40,
            opacity: 0,
            filter: "blur(4px)"
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            }
          }
        );

        // Highlight indicator on scroll
        ScrollTrigger.create({
          trigger: card,
          start: "top 40%",
          end: "bottom 60%",
          onEnter: () => gsap.to(indicator, { backgroundColor: "#FFD700", scale: 1.4, duration: 0.3 }),
          onLeave: () => gsap.to(indicator, { backgroundColor: "#e2e8f0", scale: 1, duration: 0.3 }),
          onEnterBack: () => gsap.to(indicator, { backgroundColor: "#FFD700", scale: 1.4, duration: 0.3 }),
          onLeaveBack: () => gsap.to(indicator, { backgroundColor: "#e2e8f0", scale: 1, duration: 0.3 }),
        });

        // Faster Stacking Transition
        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.92,
            opacity: 0.5,
            y: -30,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top 85%",
              end: "top 25%",
              scrub: 0.5,
            }
          });
        }
      });
      
      // Growth Progress Line Animation
      gsap.to(progressLineRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      });

      // Internal Image Parallax
      gsap.utils.toArray<HTMLElement>('.parallax-img').forEach((img) => {
        gsap.to(img, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-20 w-full bg-[#fcfcfd] pt-20 pb-24 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#fafafa] to-transparent pointer-events-none" />
      
      <div className="container-custom max-w-7xl mx-auto px-4 relative">
        
        {/* Elite Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-[#0A2463] font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block opacity-60">
            Choice of curriculum
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#0A2463] tracking-tight mb-6 leading-tight">
            Programs that grow <br className="hidden sm:block" /> with your child
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-4 text-gray-400 font-body text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em]">
            <span>Nurture</span>
            <span className="h-[1px] w-4 sm:w-6 bg-gray-200" />
            <span>Challenge</span>
            <span className="h-[1px] w-4 sm:w-6 bg-gray-200" />
            <span>Excel</span>
          </div>
        </div>

        <div className="relative flex">
          {/* UNIQUE SCROLLER: Growth Progress Rail */}
          <div className="hidden lg:flex flex-col items-center absolute -left-12 top-0 h-full w-1">
            <div className="absolute inset-0 bg-gray-100 rounded-full" />
            <div ref={progressLineRef} className="absolute inset-0 top-0 bg-[#F48A36] rounded-full h-0 origin-top" />
            
            <div className="flex flex-col justify-between h-full py-16 relative z-10">
              {programs.map((p, i) => (
                <div key={i} className="flex items-center group">
                  <div className="progress-node w-3.5 h-3.5 rounded-full bg-gray-200 border-[3px] border-white shadow-sm transition-all duration-500" />
                  <span className="absolute left-8 font-display text-sm font-bold text-[#0A2463] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap italic">
                    {p.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Container */}
          <div 
            ref={containerRef} 
            className="flex-1 flex flex-col lg:gap-12 pb-[5vh] overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar flex-row lg:flex-col gap-6 px-4 lg:px-0"
          >
            {programs.map((program, i) => {
              const Icon = program.icon;
              
              return (
                <div 
                  key={program.title}
                  className="stack-card sticky lg:top-[12vh] w-[88vw] lg:w-full shrink-0 snap-center lg:snap-align-none flex flex-col lg:flex-row items-stretch p-2.5 lg:p-4 rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.03)] border border-gray-100/50 will-change-transform"
                  style={{ zIndex: i }}
                >
                  {/* LEFT: Content (unique entrance) */}
                  <div className="card-content flex flex-col w-full lg:w-[50%] p-6 md:p-8 lg:p-10 lg:px-12 justify-between relative z-10">
                    <div>
                      <div className="flex items-center gap-4 lg:gap-5 mb-6 lg:mb-8">
                        <div className="bg-[#0A2463] p-3.5 lg:p-4 rounded-xl shadow-lg shadow-[#0A2463]/10">
                          <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#047857]" strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] font-black tracking-[0.3em] uppercase text-[#0A2463]/40 mb-0.5">
                            Phase 0{i+1}
                          </span>
                          <span className="text-[10px] lg:text-xs font-bold text-[#0A2463]">
                            {program.tag}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4 tracking-tighter text-[#0A2463] leading-none">
                        {program.title}
                      </h3>
                      <p className="font-display text-base md:text-xl lg:text-2xl italic font-medium text-gray-400 mb-4 lg:mb-5 leading-tight">
                        {program.desc}
                      </p>
                      <p className="font-body text-xs lg:text-base font-light text-gray-500 leading-relaxed max-w-lg mb-6 lg:mb-8 border-l-2 border-[#047857]/30 pl-5 lg:pl-6">
                        {program.details}
                      </p>
                    </div>

                    <div className="pt-2 lg:pt-4 flex items-center group cursor-pointer w-fit transition-all">
                      <Link href="/academics" className="flex items-center gap-3">
                        <span className="font-bold tracking-[0.2em] text-[10px] uppercase text-[#0A2463]">
                          Explore Curriculum
                        </span>
                        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#0A2463] group-hover:border-[#0A2463] transition-all duration-500">
                          <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#0A2463] group-hover:text-white transition-colors" />
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT: Image (Parallax + Frame) */}
                  <div className="card-image relative w-full lg:w-[50%] h-[240px] md:h-[350px] lg:h-auto overflow-hidden rounded-[1.5rem] lg:rounded-[1.8rem] bg-gray-50">
                    <div className="parallax-img absolute inset-0 w-full h-[120%] -top-[10%]">
                      <Image 
                        src={program.photo} 
                        fill 
                        className="object-cover" 
                        alt={program.title} 
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    {/* Artistic Gradient Wash */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0A2463]/20 to-transparent mix-blend-overlay" />
                    <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 flex flex-col items-end">
                      <span className="font-display text-5xl lg:text-8xl font-black text-white/20 select-none">
                        0{i+1}
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
