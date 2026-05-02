import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

const articles: Record<
  string,
  { title: string; author: string; date: string; img: string; body: string[] }
> = {
  "nep-labs-opening": {
    title: "NEP-aligned labs open for students",
    author: "Communications Office",
    date: "March 12, 2026",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1600&q=80",
    body: [
      "Our new STEM and language labs are designed around inquiry and collaboration. Students can prototype ideas, record observations digitally, and present to peers in the same space.",
      "Faculty have completed intensive training on NEP-aligned rubrics and safety protocols. Timetables now include dedicated project blocks for middle and senior grades.",
      "Parents are invited to an open house next month to experience the labs alongside their children.",
    ],
  },
  "quiz-finals": {
    title: "Citywide quiz: Lalgadi Malakpet campus hosts finals",
    author: "Press Desk",
    date: "February 28, 2026",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80",
    body: [
      "Teams from fifteen schools competed in a high-energy finals hosted on our campus.",
      "Congratulations to all participants — we are proud of our student quizmasters who placed in the top three.",
    ],
  },
  "principal-spring": {
    title: "Principal’s note: spring term",
    author: "Principal",
    date: "February 5, 2026",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80",
    body: [
      "Spring is a time to renew routines and celebrate small wins. Thank you for partnering with us in your child’s learning journey.",
    ],
  },
  "student-spotlight-ria": {
    title: "Student spotlight: Ria’s robotics journey",
    author: "STEM Department",
    date: "January 18, 2026",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80",
    body: [
      "From her first LEGO kit to zonal championships, Ria exemplifies curiosity and grit.",
    ],
  },
  "reading-habits-at-home": {
    title: "Building reading habits at home",
    author: "Language Department",
    date: "March 28, 2026",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80",
    body: [
      "Short daily windows — ten to fifteen minutes — paired with our library picks can compound into confident readers.",
      "Ask open questions about characters and settings; celebrate effort over speed.",
    ],
  },
  "exam-season-wellbeing": {
    title: "Exam season without burnout",
    author: "Student Wellness Cell",
    date: "March 10, 2026",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&q=80",
    body: [
      "We balance revision blocks with movement, hydration, and sleep hygiene across grades.",
      "Counsellors host drop-in hours; teachers share pacing guides so families can plan calm evenings.",
    ],
  },
  "stem-clubs-spotlight": {
    title: "STEM clubs: term highlights",
    author: "STEM Department",
    date: "February 22, 2026",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1600&q=80",
    body: [
      "Robotics teams refined autonomous routines; math circles explored non-routine problems.",
      "Science fair prototypes are in fabrication — join us for the showcase next month.",
    ],
  },
};

export function generateMetadata({ params }: Props): Metadata {
  const a = articles[params.slug];
  if (!a) return { title: "Article" };
  return { title: a.title, description: a.body[0]?.slice(0, 155) };
}

export default function NewsArticlePage({ params }: Props) {
  const a = articles[params.slug];
  if (!a) notFound();

  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://cmr-malakpet.example.com";
  const shareUrl = `${base}/news/${params.slug}`;

  return (
    <article className="bg-white">
      <div className="relative h-[40vh] min-h-[280px] w-full">
        <Image src={a.img} alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/35" />
      </div>
      <div className="container-custom -mt-16 relative z-10 max-w-3xl rounded-modal border border-border bg-white p-8 shadow-soft-lg md:p-12">
        <p className="text-sm text-textMuted">
          {a.date} · {a.author}
        </p>
        <h1 className="mt-4 font-display text-3xl text-primary md:text-4xl">{a.title}</h1>
        <div className="prose prose-slate mt-8 max-w-none">
          {a.body.map((p) => (
            <p key={p.slice(0, 24)} className="mb-4 font-body text-textSecondary">
              {p}
            </p>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
          <span className="text-sm text-textMuted">Share:</span>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(a.title)}`}
            className="text-sm font-medium text-success hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            className="text-sm font-medium text-highlight hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(a.title)}&url=${encodeURIComponent(shareUrl)}`}
            className="text-sm font-medium text-textSecondary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            X / Twitter
          </a>
        </div>
        <p className="mt-8">
          <Link href="/news" className="font-medium text-highlight hover:underline">
            ← Back to news
          </Link>
        </p>
      </div>
    </article>
  );
}
