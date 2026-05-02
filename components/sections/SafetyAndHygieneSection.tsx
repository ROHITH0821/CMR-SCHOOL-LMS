"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Bus, School } from "lucide-react";

const safetyFeatures = [
  { 
    icon: ShieldCheck, 
    label: "CCTV Surveillance 24/7", 
    color: "#0DB6B5" 
  },
  { 
    icon: UserCheck, 
    label: "Trained & Verified Staff", 
    color: "#0DB6B5" 
  },
  { 
    icon: Bus, 
    label: "Safe Transport", 
    color: "#0DB6B5" 
  },
  { 
    icon: School, 
    label: "CBSE Compliant Campus", 
    color: "#0DB6B5" 
  },
];

export function SafetyAndHygieneSection() {
  return (
    <section className="relative bg-white border-b border-gray-100 overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left shrink-0">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0DB6B5] mb-2">
              Our Priority
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#0A2463] tracking-tight">
              Safety at CMR Schools
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 flex-1 justify-items-center">
            {safetyFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#0A2463]/5 flex items-center justify-center mb-3 group-hover:bg-[#0DB6B5]/10 transition-colors">
                    <Icon size={24} className="text-[#0DB6B5] group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-display font-bold text-[#0A2463] text-[10px] md:text-xs uppercase tracking-wider leading-tight max-w-[120px]">
                    {feature.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
