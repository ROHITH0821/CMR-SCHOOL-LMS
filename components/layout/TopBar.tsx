"use client";

import { Phone, Mail, Globe, Camera, Video, X } from "lucide-react";
import { CAMPUS_ADDRESS_LINE } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="hidden h-9 w-full bg-[#0A2463] text-white lg:block">
      <div className="container-custom mx-auto flex h-full max-w-[1400px] items-center justify-between px-8 text-[11px] font-bold uppercase tracking-wider">
        <div className="flex items-center gap-6">
          <a href="tel:+914012345678" className="flex items-center gap-1.5 hover:text-[#0DB6B5] transition-colors">
            <Phone size={12} className="text-[#0DB6B5]" />
            +91 40 1234 5678
          </a>
          <a href="mailto:info@cmrschools.edu.in" className="flex items-center gap-1.5 hover:text-[#0DB6B5] transition-colors">
            <Mail size={12} className="text-[#0DB6B5]" />
            info@cmrschools.edu.in
          </a>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 border-r border-white/20 pr-6 mr-6">
             <a href="#" className="hover:text-[#0DB6B5] transition-colors" aria-label="Facebook"><Globe size={14} /></a>
             <a href="#" className="hover:text-[#0DB6B5] transition-colors" aria-label="Instagram"><Camera size={14} /></a>
             <a href="#" className="hover:text-[#0DB6B5] transition-colors" aria-label="YouTube"><Video size={14} /></a>
             <a href="#" className="hover:text-[#0DB6B5] transition-colors" aria-label="Twitter"><X size={14} /></a>
          </div>
          <span className="text-white/60 lowercase">{CAMPUS_ADDRESS_LINE}</span>
        </div>
      </div>
    </div>
  );
}
