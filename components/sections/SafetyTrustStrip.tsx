"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const trustItems = [
  {
    img: "/images/safety/campus-safety.png",
    text: "Campus Safety",
  },
  {
    img: "/images/safety/health-safety.png",
    text: "Health and Safety Policy",
  },
  {
    img: "/images/safety/safety-hygiene.png",
    text: "Safety and Hygiene",
  },
  {
    img: "/images/safety/cctv.png",
    text: "CCTV",
  },
  {
    img: "/images/safety/pest-control.png",
    text: "Pest Control",
  },
];

export function SafetyTrustStrip() {
  return (
    <div className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] md:rounded-[2.5rem]">
          <div className="grid grid-cols-2 divide-x divide-gray-100 py-8 md:grid-cols-5 md:py-10">
            {trustItems.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center gap-4 px-4 text-center group ${
                  trustItems.length % 2 !== 0 && idx === trustItems.length - 1 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="relative h-14 w-14 shrink-0 md:h-20 md:w-20 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={item.img}
                    alt={item.text}
                    fill
                    className="object-contain mix-blend-multiply"
                    sizes="(max-width: 768px) 56px, 80px"
                  />
                </div>
                <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#0A2463] sm:text-xs md:text-sm leading-tight max-w-[120px]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
