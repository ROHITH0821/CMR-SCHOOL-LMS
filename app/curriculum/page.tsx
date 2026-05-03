"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  GraduationCap, 
  Star, 
  Zap, 
  Users, 
  Lightbulb, 
  ChevronRight,
  ShieldCheck,
  BrainCircuit,
  Trophy
} from "lucide-react";
import { Button } from "@/components/ui/Button";

// Move metadata to a separate layout or omit for client component (Next.js 13+ handles this in layouts for client pages if needed, but I'll omit it here for simplicity or use a separate file. Actually, I'll just remove the 'export const metadata' as it errors in client components.)

const levels = [
  {
    title: "Pre-Primary",
    years: "Nursery, LKG, UKG",
    desc: "A nurturing environment where children discover the joy of learning through play, sensory exploration, and creative expression.",
    features: ["Foundational Literacy", "Sensory & Motor Skills", "Social-Emotional Learning", "Language Development"],
    icon: <Star className="h-6 w-6 text-[#F5A623]" />,
    bg: "bg-[#FDFBF7]"
  },
  {
    title: "Primary School",
    years: "Grades I – V",
    desc: "Building strong academic foundations with a focus on core subjects, inquiry-based learning, and character development.",
    features: ["Conceptual Mathematics", "Environmental Science", "Art & Craft Integration", "Physical Education"],
    icon: <BookOpen className="h-6 w-6 text-[#0DB6B5]" />,
    bg: "bg-[#F0F9F9]"
  },
  {
    title: "Middle School",
    years: "Grades VI – VIII",
    desc: "A transition to more abstract thinking, where students explore diverse subjects and participate in specialized skill labs.",
    features: ["Advanced Sciences", "ICT & Coding Basics", "Vocational Exploration", "Public Speaking"],
    icon: <BrainCircuit className="h-6 w-6 text-[#0A2463]" />,
    bg: "bg-[#F8F9FB]"
  },
  {
    title: "Secondary School",
    years: "Grades IX – X",
    desc: "A rigorous board-aligned curriculum designed to prepare students for academic excellence and future career paths.",
    features: ["CBSE Board Preparation", "Career Orientation", "Life Skills & Leadership", "Community Service"],
    icon: <GraduationCap className="h-6 w-6 text-[#F5A623]" />,
    bg: "bg-[#FDFBF7]"
  }
];

const pillars = [
  {
    title: "NEP 2020 Aligned",
    desc: "Our curriculum strictly follows the National Education Policy guidelines, prioritizing competency over rote learning.",
    icon: <ShieldCheck className="h-10 w-10 text-[#0DB6B5]" />
  },
  {
    title: "Holistic Growth",
    desc: "We balance academic rigour with sports, arts, and yoga to ensure every child develops physically and emotionally.",
    icon: <Users className="h-10 w-10 text-[#F5A623]" />
  },
  {
    title: "Future Ready",
    desc: "Integration of technology, critical thinking, and problem-solving skills to prepare students for the 21st century.",
    icon: <Zap className="h-10 w-10 text-[#0A2463]" />
  }
];

export default function CurriculumPage() {
  return (
    <div className="bg-white selection:bg-[#0DB6B5]/30">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0A2463] py-24 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#0DB6B5] blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#F5A623] blur-[100px]" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block rounded-full bg-[#0DB6B5]/10 px-4 py-1 text-xs font-black uppercase tracking-[0.3em] text-[#0DB6B5] mb-6">
              Academics & Pedagogy
            </span>
            <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl">
              Our <span className="text-[#F5A623]">Curriculum</span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl font-body text-lg leading-relaxed text-white/80 lg:text-xl">
              Nurturing inquiry, competency, and wellbeing through a globally-inspired, NEP 2020 aligned educational framework.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY PILLARS */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid gap-12 md:grid-cols-3">
            {pillars.map((p, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-6 rounded-3xl bg-gray-50 p-6 transition-colors hover:bg-white hover:shadow-soft">
                  {p.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0A2463] mb-4">{p.title}</h3>
                <p className="font-body text-sm text-neutral-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMIC LEVELS */}
      <section className="bg-[#F8F9FB] py-24 lg:py-32">
        <div className="container-custom">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="font-display text-3xl font-bold text-[#0A2463] sm:text-5xl">Learning Journeys</h2>
            <p className="mt-4 max-w-2xl text-neutral-600">A progressive roadmap tailored to every developmental stage of a child's life.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {levels.map((level, i) => (
              <div key={i} className={`group flex flex-col overflow-hidden rounded-[2.5rem] border border-border ${level.bg} p-8 transition-all hover:shadow-soft-lg md:p-12`}>
                <div className="mb-8 flex items-center justify-between">
                  <div className="rounded-2xl bg-white p-4 shadow-sm group-hover:scale-110 transition-transform">
                    {level.icon}
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
                    {level.years}
                  </span>
                </div>
                <h3 className="font-display text-3xl font-bold text-[#0A2463] mb-4">{level.title}</h3>
                <p className="font-body text-neutral-600 mb-8 leading-relaxed">
                  {level.desc}
                </p>
                <div className="mt-auto grid grid-cols-2 gap-4">
                  {level.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#0DB6B5]" />
                      <span className="text-xs font-semibold text-[#0A2463]/70">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CO-CURRICULAR & HOLISTIC */}
      <section className="py-24 lg:py-32">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <span className="font-mono text-[11px] font-black uppercase tracking-[0.4em] text-[#F5A623] mb-4 block">Holistic Excellence</span>
              <h2 className="font-display text-4xl font-bold text-[#0A2463] mb-8 leading-tight sm:text-5xl">
                Beyond the <span className="text-[#0DB6B5]">Textbooks</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A2463] text-white">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2463]">Sports & Physical Literacy</h4>
                    <p className="text-sm text-neutral-500">Structured coaching in Yoga, Skating, Basketball, and Football for peak physical fitness.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5A623] text-white">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2463]">Visual & Performing Arts</h4>
                    <p className="text-sm text-neutral-500">Unleashing creativity through specialized studios for Fine Arts, Music, and Drama.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0DB6B5] text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2463]">Life Skills & Value Education</h4>
                    <p className="text-sm text-neutral-500">Nurturing responsible global citizens through empathy-building and leadership workshops.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop" 
                  alt="Students learning" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[2rem] shadow-xl max-w-xs border border-border">
                <p className="font-display text-xl font-bold text-[#0A2463]">"Education is the most powerful weapon which you can use to change the world."</p>
                <p className="mt-2 text-xs font-bold text-[#F5A623] uppercase tracking-widest">— Nelson Mandela</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASSESSMENT STRATEGY */}
      <section className="bg-[#0A2463] py-24 text-white overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl font-bold mb-6">Assessment for Learning</h2>
            <p className="text-white/70 mb-12 text-lg">We move away from high-stakes testing towards continuous, formative evaluations that celebrate individual growth and identify areas for support.</p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                <h4 className="font-bold text-[#0DB6B5] mb-2">Formative feedback</h4>
                <p className="text-xs text-white/50">Ongoing assessments that help students understand their own learning gaps in real-time.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                <h4 className="font-bold text-[#F5A623] mb-2">Competency Based</h4>
                <p className="text-xs text-white/50">Focusing on practical application of knowledge rather than memorization of facts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center">
        <div className="container-custom">
          <h2 className="font-display text-4xl font-bold text-[#0A2463] mb-8">Begin the Journey Today</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/admissions" variant="gold" size="lg">
              Apply for Admission
            </Button>
            <Button href="/contact" variant="outlineDark" size="lg">
              Schedule a Campus Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
