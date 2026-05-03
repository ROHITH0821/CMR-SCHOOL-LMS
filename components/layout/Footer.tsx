"use client";

import Link from "next/link";
import { SCHOOL_NAME, CAMPUS_NAME, CAMPUS_ADDRESS_LINE } from "@/lib/constants";
import { Globe, Camera, Video, X, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { CMRLotusLogo } from "@/components/logo/CMRLotusLogo";

const SOCIAL_LINKS = [
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: Video, href: "#", label: "YouTube" },
  { icon: X, href: "#", label: "Twitter" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A2463] pt-24 pb-12 overflow-hidden text-white border-t border-white/10">
      {/* BACKGROUND BRANDING: Giant subtle text for "Unique" feel */}
      <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-5 w-full text-center">
        <span className="font-display text-[22vw] font-bold leading-none tracking-tighter uppercase whitespace-nowrap text-white">
          CMR SCHOOLS
        </span>
      </div>

      <div className="container-custom max-w-7xl mx-auto px-4 relative z-10">
        
        {/* TOP PHASE: Brand & Key Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/10">
          
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-8 group">
              <div className="bg-white/90 p-4 rounded-xl inline-block">
                <CMRLotusLogo className="h-16 w-auto" />
              </div>
            </Link>
            <p className="font-display text-2xl lg:text-3xl font-extrabold leading-tight max-w-md mb-8 text-white">
              Empowering global minds <br className="hidden sm:block" /> 
              <span className="text-[#0DB6B5]">through academic excellence</span> <br className="hidden sm:block" /> 
              and character building.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white hover:bg-[#0DB6B5] hover:text-white transition-all duration-500 transform hover:-translate-y-1 shadow-sm border border-white/5"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-16 lg:gap-24">
            
            <div className="flex gap-6 group">
              <div className="shrink-0">
                <div className="bg-[#0DB6B5]/20 p-5 rounded-2xl text-[#0DB6B5] group-hover:bg-[#0DB6B5] group-hover:text-white transition-all duration-500 shadow-sm border border-[#0DB6B5]/20">
                  <MapPin size={28} strokeWidth={1.5} />
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-display text-xl font-bold text-white tracking-tight">Lalgadi Malakpet Campus</h4>
                <p className="font-body text-gray-300 text-sm leading-relaxed max-w-[200px]">
                  {CAMPUS_ADDRESS_LINE}
                </p>
                <a href="https://maps.google.com" target="_blank" className="inline-flex items-center gap-2 text-[#0DB6B5] font-black text-[10px] uppercase tracking-[0.2em] border-b-2 border-[#0DB6B5]/20 hover:border-[#0DB6B5] transition-all pb-1">
                  Locate Campus <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="shrink-0">
                <div className="bg-[#0DB6B5]/20 p-5 rounded-2xl text-[#0DB6B5] group-hover:bg-[#0DB6B5] group-hover:text-white transition-all duration-500 shadow-sm border border-[#0DB6B5]/20">
                  <Phone size={28} strokeWidth={1.5} />
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-display text-xl font-bold text-white tracking-tight">Direct Connect</h4>
                <div className="flex flex-col gap-2">
                  <a href="tel:+914012345678" className="text-gray-300 hover:text-[#0DB6B5] transition-colors font-mono text-sm underline-offset-4 hover:underline">
                    +91 40 1234 5678
                  </a>
                  <a href="mailto:info@cmrschools.edu.in" className="text-gray-300 hover:text-[#0DB6B5] transition-colors font-body text-sm underline-offset-4 hover:underline">
                    info@cmrschools.edu.in
                  </a>
                </div>
                <div className="pt-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Available 8AM — 4PM</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* MIDDLE PHASE: Deep Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 py-20">
          <div className="col-span-1">
            <h5 className="font-display text-[#0DB6B5] font-black text-xs tracking-[0.3em] uppercase mb-8">Academics</h5>
            <ul className="space-y-4">
              <li><Link href="/academics" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Primary Wing</Link></li>
              <li><Link href="/academics" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Middle School</Link></li>
              <li><Link href="/academics" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Secondary School</Link></li>
              <li><Link href="/academics#calendar" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Academic Calendar</Link></li>
              <li><Link href="/academics" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Olympiad Prep</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="font-display text-[#0DB6B5] font-black text-xs tracking-[0.3em] uppercase mb-8">Campus</h5>
            <ul className="space-y-4">
              <li><Link href="/gallery" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Infrastructure</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Laboratories</Link></li>
              <li><Link href="/faculty" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Library & IR</Link></li>
              <li><Link href="/admissions" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Sports Clinics</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="font-display text-[#0DB6B5] font-black text-xs tracking-[0.3em] uppercase mb-8">Admissions</h5>
            <ul className="space-y-4">
              <li><Link href="/admissions" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Policy & FAQ</Link></li>
              <li><Link href="/admissions#apply" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Admission Enquiry</Link></li>
              <li><Link href="/admissions" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Apply Online</Link></li>
              <li><Link href="/portal" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Entrance Tests</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="font-display text-[#0DB6B5] font-black text-xs tracking-[0.3em] uppercase mb-8">Community</h5>
            <ul className="space-y-4">
              <li><Link href="/blog" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Principal's Blog</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Blog & Insights</Link></li>
              <li><Link href="/achievements" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Hall of Fame</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Alumni Network</Link></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h5 className="font-display text-[#0DB6B5] font-black text-xs tracking-[0.3em] uppercase mb-8">Legal</h5>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Terms of Use</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white font-bold text-sm transition-colors">Board Disclosure</Link></li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-5 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-12">
            <h5 className="font-display text-[#F5A623] font-black text-xs tracking-[0.3em] uppercase mb-8">Board Compliance</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-white uppercase">Suraram Campus</p>
                <p className="text-[9px] text-gray-500">CBSE Affiliation No: 3630148</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-white uppercase">Kompally Campus</p>
                <p className="text-[9px] text-gray-500">CBSE Affiliation No: 3630537</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-white uppercase">Shapur Nagar</p>
                <p className="text-[9px] text-gray-500">CBSE Affiliation No: 3630126</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-white uppercase">Lalgadi Malakpet</p>
                <p className="text-[9px] text-gray-500">CBSE Applied For (New Campus)</p>
              </div>
              <div className="space-y-1 sm:col-span-2">
                <p className="text-[10px] font-bold text-[#0DB6B5] uppercase">Kundanpally (MB Grammar)</p>
                <p className="text-[9px] text-gray-500">Affiliated with Telangana State Board (SSC)</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM PHASE: Ownership */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/10 text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© {currentYear} {SCHOOL_NAME}.</p>
          <div className="flex gap-8">
            <span className="cursor-default">MALAKPET CAMPUS</span>
            <span className="cursor-default">HYDERABAD, INDIA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
