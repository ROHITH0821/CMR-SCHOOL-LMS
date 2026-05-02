"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, GraduationCap, Mail, Sparkles, Target } from "lucide-react";
import type { FacultyMember } from "@/lib/faculty-data";
import { CAMPUS_NAME } from "@/lib/constants";

export function FacultyProfileView({ member }: { member: FacultyMember }) {
  const email = `${member.emailLocal}@cmrschools.edu.in`;

  return (
    <article className="min-h-screen bg-[#fafbff]">
      {/* Top bar */}
      <div className="border-b border-[#0A2463]/10 bg-white/90 backdrop-blur-md">
        <div className="container-custom flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
            <Link href="/faculty" className="text-[#0DB6B5] transition hover:text-[#0A2463]">
              Faculty
            </Link>
            <span className="mx-2 text-neutral-300">/</span>
            <span className="text-[#0A2463]/80">{member.name}</span>
          </nav>
          <Link
            href="/faculty"
            className="inline-flex items-center gap-2 rounded-full border border-[#0A2463]/15 bg-white px-4 py-2 text-sm font-semibold text-[#0A2463] shadow-sm transition hover:border-[#0DB6B5]/40 hover:bg-[#0DB6B5]/5"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All faculty
          </Link>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden bg-[#0A2463] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #0DB6B5 0%, transparent 45%),
              radial-gradient(circle at 80% 60%, #F5A623 0%, transparent 35%)`,
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20">
          <div className="order-2 lg:order-1">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-[#F5A623]">
              {member.dept} · {member.subject}
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              {member.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-white/85">{member.role}</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">{member.headline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                {member.qual}
              </span>
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                {member.years}+ years at {CAMPUS_NAME}
              </span>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] ring-4 ring-white/20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
              <Image
                src={member.photo}
                alt=""
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 90vw, 420px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/40 to-transparent" />
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="container-custom max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6 rounded-3xl border border-[#0A2463]/10 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(10,36,99,0.2)]">
              <h2 className="font-display text-lg font-bold text-[#0A2463]">Connect</h2>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 rounded-2xl border border-[#0A2463]/10 bg-[#FDFBF7] px-4 py-3 text-sm font-semibold text-[#0A2463] transition hover:border-[#0DB6B5]/40"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#0DB6B5]" aria-hidden />
                {email}
              </a>
              <p className="text-xs leading-relaxed text-neutral-500">
                For admissions and general enquiries, please use the{" "}
                <Link href="/contact" className="font-semibold text-[#0DB6B5] underline-offset-2 hover:underline">
                  contact page
                </Link>
                .
              </p>
            </div>
          </aside>

          <div className="space-y-12 lg:col-span-8">
            {member.quote && (
              <blockquote className="relative rounded-3xl border-l-4 border-[#F5A623] bg-white px-8 py-8 shadow-soft-lg">
                <span className="font-display text-5xl leading-none text-[#0A2463]/15">“</span>
                <p className="-mt-4 font-display text-xl font-medium italic leading-relaxed text-[#0A2463] md:text-2xl">
                  {member.quote}
                </p>
                <footer className="mt-4 font-mono text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  — {member.name.split(" ").slice(-2).join(" ")}
                </footer>
              </blockquote>
            )}

            <section>
              <div className="mb-5 flex items-center gap-2">
                <Target className="h-5 w-5 text-[#0DB6B5]" aria-hidden />
                <h2 className="font-display text-2xl font-bold text-[#0A2463]">Focus areas</h2>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {member.focus.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-[#0A2463]/8 bg-white px-4 py-3 text-sm font-medium text-[#0A2463] shadow-sm"
                  >
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#F5A623]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="mb-5 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-[#0DB6B5]" aria-hidden />
                <h2 className="font-display text-2xl font-bold text-[#0A2463]">Education & credentials</h2>
              </div>
              <ul className="space-y-4">
                {member.education.map((line) => (
                  <li
                    key={line}
                    className="relative pl-6 font-body text-neutral-700 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-[#0DB6B5]"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-[#0A2463]/10 bg-white p-8 shadow-soft">
              <h2 className="font-display text-xl font-bold text-[#0A2463]">About</h2>
              <p className="mt-4 leading-relaxed text-neutral-600">{member.bio}</p>
              <p className="mt-6 text-sm text-neutral-500">
                Profiles reflect typical roles at CMR Lalgadi Malakpet; titles and programmes may vary by academic year.
              </p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
