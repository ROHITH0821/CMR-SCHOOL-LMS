import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Stories, learning tips, and updates from CMR Schools Lalgadi Malakpet.",
};

const posts = [
  {
    slug: "reading-habits-at-home",
    title: "Building reading habits at home",
    excerpt: "Simple routines that pair with our language labs and library hours.",
    date: "Mar 28, 2026",
  },
  {
    slug: "exam-season-wellbeing",
    title: "Exam season without burnout",
    excerpt: "How we balance revision, sleep, and mindful breaks across grades.",
    date: "Mar 10, 2026",
  },
  {
    slug: "stem-clubs-spotlight",
    title: "STEM clubs: term highlights",
    excerpt: "Robotics, math circles, and science fair prep in Lalgadi Malakpet.",
    date: "Feb 22, 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#FFFFFF]">
      <section className="section-padding container-custom border-b border-border">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#F5A623]">Blog</p>
        <h1 className="mt-2 font-display text-4xl text-[#0A2463]">Ideas from our campus</h1>
        <p className="mt-4 max-w-2xl text-textSecondary">
          Reflections from teachers, student voices, and parent partnership notes.
        </p>
      </section>

      <section className="section-padding container-custom">
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <article className="flex h-full flex-col rounded-modal border border-border bg-cardBg p-6 shadow-soft transition hover:border-[#F5A623]/50">
                <p className="text-xs text-textMuted">{p.date}</p>
                <h2 className="mt-2 font-display text-xl text-[#0A2463]">{p.title}</h2>
                <p className="mt-3 flex-1 font-body text-sm text-textSecondary">{p.excerpt}</p>
                <Link
                  href={`/news/${p.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-highlight hover:underline"
                >
                  Continue reading
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
