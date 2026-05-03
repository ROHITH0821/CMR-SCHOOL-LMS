import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

import { blogPosts } from "@/lib/blog-data";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = blogPosts[slug];
  if (!a) return { title: "Article" };
  return { title: a.title, description: a.excerpt.replace(/<[^>]*>/g, "").slice(0, 155) };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = blogPosts[slug];
  
  // If not a blog post, let Next.js handle other routes or 404
  if (!a) notFound();

  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://cmrschoolkompally.com";
  const shareUrl = `${base}/${slug}`;

  return (
    <article className="bg-white">
      <div className="relative h-[40vh] min-h-[280px] w-full bg-[#0A2463]">
        {a.img && (
          <>
            <Image src={a.img} alt="" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-primary/35" />
          </>
        )}
      </div>
      <div className="container-custom -mt-16 relative z-10 max-w-3xl rounded-modal border border-border bg-white p-8 shadow-soft-lg md:p-12">
        <div className="flex items-center gap-2 text-sm text-textMuted mb-4">
          <span className="font-bold uppercase tracking-widest text-[#F5A623]">Perspective</span>
          <span>·</span>
          <span>{a.date}</span>
        </div>
        <h1 className="font-display text-3xl text-primary md:text-5xl font-bold leading-tight">{a.title}</h1>
        <p className="mt-4 text-sm font-medium text-gray-400">By {a.author}</p>
        
        <div 
          className="prose prose-slate mt-10 max-w-none font-body text-textSecondary leading-relaxed"
          dangerouslySetInnerHTML={{ __html: a.content }}
        />
        
        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-border pt-8">
          <span className="text-xs font-bold uppercase tracking-widest text-textMuted">Share this story:</span>
          <div className="flex gap-4">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(a.title)}`}
              className="text-sm font-semibold text-[#25D366] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              className="text-sm font-semibold text-[#1877F2] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(a.title)}&url=${encodeURIComponent(shareUrl)}`}
              className="text-sm font-semibold text-[#1DA1F2] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              X / Twitter
            </a>
          </div>
        </div>
        
        <p className="mt-12 pt-8 border-t border-gray-50">
          <Link href="/blog" className="inline-flex items-center gap-2 font-bold text-highlight hover:text-[#0A2463] transition-colors">
            ← Back to blog
          </Link>
        </p>
      </div>
    </article>
  );
}
