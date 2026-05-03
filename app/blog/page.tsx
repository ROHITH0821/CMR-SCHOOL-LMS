"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/blog-data";

const allPosts = Object.values(blogPosts).map((p, index) => ({
  ...p,
  cat: "Blog",
  featured: index === 0,
}));

const POSTS_PER_PAGE = 15;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BlogPage() {
  const [displayCount, setDisplayCount] = useState(POSTS_PER_PAGE);

  const featured = allPosts.find((p) => p.featured)!;
  const rest = allPosts.filter((p) => !p.featured).slice(0, displayCount);
  const hasMore = displayCount < allPosts.length - 1;

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + POSTS_PER_PAGE);
  };

  return (
    <div className="bg-[#FFFFFF]">
      <section className="container-custom pt-12 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#F5A623] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Campus Chronicle
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-bold text-[#0A2463]">Blog & Insights</h1>
          <p className="mt-6 max-w-2xl text-gray-500 font-body text-lg leading-relaxed">
            Explore reflections from our teachers, student stories, and parent partnership notes from the CMR legacy.
          </p>
        </motion.div>
      </section>

      <section className="pb-32">
        <div className="container-custom">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Link href={`/${featured.slug}`} className="group block overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.05)]">
              <div className="grid gap-0 lg:grid-cols-2">
                <div className={`relative min-h-[300px] lg:min-h-[480px] overflow-hidden ${!featured.img ? 'bg-gray-50' : ''}`}>
                  {featured.img && (
                    <>
                      <Image src={featured.img} alt="" fill className="object-cover transition duration-1000 group-hover:scale-[1.05]" priority />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#0A2463]/20 to-transparent" />
                    </>
                  )}
                  {!featured.img && (
                    <div className="flex h-full items-center justify-center text-gray-300">
                      <span className="text-6xl font-display font-bold opacity-20">CMR</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-16">
                  <span className="w-fit rounded-full bg-[#FFD700]/10 px-4 py-1.5 text-[10px] font-black tracking-widest uppercase text-[#0A2463]">
                    Featured Post
                  </span>
                  <h2 className="mt-8 font-display text-3xl lg:text-5xl font-bold text-[#0A2463] group-hover:text-[#F5A623] transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <div 
                    className="mt-6 text-gray-500 font-body text-lg leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: featured.excerpt }}
                  />
                  <p className="mt-10 text-xs font-bold tracking-widest text-gray-400 uppercase">{featured.date}</p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Grid of smaller posts */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3"
          >
            {rest.map((p) => (
              <motion.article key={p.slug} variants={item} className="group flex flex-col cursor-pointer">
                <Link href={`/${p.slug}`} className="flex flex-col h-full">
                  {p.img && (
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-gray-100 shadow-sm">
                      <Image src={p.img} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-[#0A2463]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                  <div className="pt-6 flex flex-col flex-1">
                    <span className="text-[#F5A623] font-bold tracking-widest text-[10px] uppercase mb-4">Article</span>
                    <h3 className="font-display text-2xl font-bold text-[#0A2463] group-hover:text-[#F5A623] transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <div 
                      className="mt-4 text-gray-500 text-[15px] leading-relaxed line-clamp-2 md:line-clamp-3 mb-6 flex-1"
                      dangerouslySetInnerHTML={{ __html: p.excerpt }}
                    />
                    <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                      <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
                        {p.date}
                      </span>
                      <span className="text-[#0A2463] text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {hasMore && (
            <div className="mt-20 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="rounded-full bg-[#0A2463] px-10 py-4 text-sm font-bold text-white transition-all hover:bg-[#F5A623] hover:shadow-lg active:scale-95"
              >
                Discover More Insights
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
