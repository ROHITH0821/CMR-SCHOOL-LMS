"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { FadeStagger, FadeStaggerItem } from "@/components/motion/FadeStagger";

const posts = [
  {
    title: "NEP-aligned labs open for students",
    excerpt: "New STEM and language labs deepen inquiry and collaboration.",
    date: "Mar 12, 2026",
    cat: "School News",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
  },
  {
    title: "Lalgadi Malakpet campus hosts inter-school quiz",
    excerpt: "Teams from fifteen schools competed in a spirited finals.",
    date: "Feb 28, 2026",
    cat: "Press",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  },
  {
    title: "From the Principal’s desk: Spring term",
    excerpt: "Reflections on growth, gratitude, and goals for the new term.",
    date: "Feb 05, 2026",
    cat: "Principal’s Blog",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  },
];

export function NewsUpdatesSection() {
  return (
    <section className="section-padding bg-[#FFFFFF]">
      <div className="container-custom">
        <h2 className="mb-10 font-display text-3xl text-[#0A2463] md:text-4xl">News & updates</h2>
        <FadeStagger className="grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <FadeStaggerItem key={p.title}>
              <article className="group overflow-hidden rounded-card border border-border bg-white shadow-soft transition hover:border-[#F5A623]/60 hover:shadow-soft-lg">
                <div className="relative aspect-[16/10]">
                  <Image src={p.img} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-5">
                  <Badge className="bg-[#F5A623]/15 text-[#0A2463]">{p.cat}</Badge>
                  <h3 className="mt-3 font-display text-lg text-[#0A2463]">{p.title}</h3>
                  <p className="mt-2 font-body text-sm text-textSecondary">{p.excerpt}</p>
                  <p className="mt-3 text-xs text-textMuted">{p.date}</p>
                  <Link
                    href="/blog"
                    className="mt-4 inline-block text-sm font-semibold text-highlight hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            </FadeStaggerItem>
          ))}
        </FadeStagger>
      </div>
    </section>
  );
}
