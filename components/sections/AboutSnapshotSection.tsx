"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeStagger, FadeStaggerItem } from "@/components/motion/FadeStagger";

const features = [
  { title: "CBSE Curriculum", icon: "📘" },
  { title: "Experienced Faculty", icon: "👩‍🏫" },
  { title: "State-of-the-Art Labs", icon: "🔬" },
  { title: "Holistic Development", icon: "🌿" },
];

export function AboutSnapshotSection() {
  return (
    <section id="about-snapshot" className="section-padding bg-[#FFFFFF]">
      <div className="container-custom grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-card border-4 border-[#0A2463] shadow-soft-lg">
            <div className="absolute -right-2 -top-2 z-10 h-16 w-16 border-r-4 border-t-4 border-[#F5A623]" aria-hidden />
            <div className="absolute -bottom-2 -left-2 z-10 h-16 w-16 border-b-4 border-l-4 border-[#F5A623]" aria-hidden />
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80"
              alt="Students at CMR Schools"
              fill
              className="object-cover transition duration-500 hover:scale-[1.04] hover:brightness-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <SectionHeading
              eyebrow="About CMR Schools"
              title="Why families choose Lalgadi Malakpet"
              subtitle="A responsive, motivated learning community—grounded in shared values—with a clear focus on academic depth, character, and a global outlook on growth."
            />
          </motion.div>

          <FadeStagger className="mt-8 grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <FadeStaggerItem key={f.title}>
                <div className={`rounded-card border border-border bg-cardBg p-4 shadow-soft transition-shadow hover:shadow-soft-lg h-full ${
                  features.length % 2 !== 0 && i === features.length - 1 ? "col-span-2 sm:col-span-1 justify-self-center w-full sm:w-auto max-w-sm" : ""
                }`}>
                  <motion.span
                    className="text-2xl"
                    whileHover={{ scale: 1.12, rotate: [-2, 2, 0] }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {f.icon}
                  </motion.span>
                  <p className="mt-2 font-body font-semibold text-[#0A2463] text-sm md:text-base">{f.title}</p>
                </div>
              </FadeStaggerItem>
            ))}
          </FadeStagger>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className="mt-10"
          >
            <Button href="/about" variant="outlineDark" size="lg">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
