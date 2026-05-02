"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Newspaper } from "lucide-react";

const STATIC_ITEMS = [
  {
    slug: "nep-labs-opening",
    title: "NEP-aligned labs open for students",
    excerpt: "Hands-on STEM and language learning in newly inaugurated spaces.",
    date: "Mar 12, 2026",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1600&q=85&auto=format&fit=crop",
  },
  {
    slug: "quiz-finals",
    title: "Citywide quiz: Lalgadi Malakpet campus hosts finals",
    excerpt: "Fifteen schools, one trophy — see how our students performed.",
    date: "Feb 28, 2026",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=85&auto=format&fit=crop",
  },
  {
    slug: "principal-spring",
    title: "Principal’s note: spring term",
    excerpt: "Reflections on resilience, routines, and reading together.",
    date: "Feb 05, 2026",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=85&auto=format&fit=crop",
  },
];

interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  img: string;
}

interface WhatsHappeningSectionProps {
  initialData?: NewsItem[];
}

export function WhatsHappeningSection({ initialData }: WhatsHappeningSectionProps) {
  const reduceMotion = useReducedMotion();
  const items = initialData && initialData.length > 0 ? initialData : STATIC_ITEMS;

  return (
    <section className="bg-[#FDFBF7] py-16 md:py-24">
      <div className="container-custom max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center md:items-start md:text-left justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[#F5A623]">
              <Newspaper className="h-4 w-4" aria-hidden />
              What&apos;s happening
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0A2463] md:text-4xl">
              Stories from campus
            </h2>
            <p className="mt-3 text-sm text-neutral-600 md:text-base">
              News, events, and voices — stay close to how we learn and celebrate together.
            </p>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 rounded-full border border-[#0A2463]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#0A2463] shadow-sm transition hover:border-[#0DB6B5] hover:bg-[#0DB6B5]/5"
          >
            View all news
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {items.slice(0, 3).map((item, i) => (
            <motion.article
              key={item.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className={`group overflow-hidden rounded-2xl border border-[#0A2463]/10 bg-white shadow-[0_16px_50px_-28px_rgba(10,36,99,0.15)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-24px_rgba(10,36,99,0.2)] ${
                items.slice(0, 3).length % 2 !== 0 && i === items.slice(0, 3).length - 1 ? "col-span-2 sm:col-span-1 justify-self-center w-full sm:w-auto max-w-sm" : ""
              }`}
            >
              <Link href={`/news/${item.slug}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.img}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-neutral-400">{item.date}</p>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-[#0A2463] group-hover:text-[#0DB6B5]">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-neutral-600">{item.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#F5A623]">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
