import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { Suspense } from "react";
import { AdmissionForm } from "@/components/forms/DynamicForms";
import { FaqAccordion } from "@/components/admissions/FaqAccordion";
import { motion } from "framer-motion";
import { fetchSheetData } from "@/lib/google-sheets";
import { GOOGLE_SHEET_IDS } from "@/lib/constants";
import { unstable_cache } from "next/cache";
import { ShieldCheck, Calendar, BookOpen, MapPin, PhoneCall, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions | CMR Group of Schools",
  description: "Join the CMR legacy. Our admissions process is designed for clarity and ease under the NDP framework.",
};

const STEPS = [
  { icon: PhoneCall, title: "Enquiry", desc: "Fill our digital enquiry form to express your interest." },
  { icon: Building, title: "Campus Visit", desc: "Experience our NDP-enabled infrastructure firsthand." },
  { icon: ShieldCheck, title: "Verification", desc: "Interactive session with our academic counselor." },
  { icon: BookOpen, title: "Confirmation", desc: "Official enrollment following document verification." },
];

const getCachedFaqs = unstable_cache(
  async () => fetchSheetData<any>(GOOGLE_SHEET_IDS.FAQS),
  ["faqs"],
  { revalidate: 86400, tags: ["faqs"] }
);

export default async function AdmissionsPage() {
  const faqRes = await getCachedFaqs();
  const faqData = Array.isArray(faqRes) ? faqRes : [];

  return (
    <SiteShell>
      <main className="bg-white min-h-screen">

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-[#0A2463]">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#0DB6B5_0%,transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#F5A623_0%,transparent_50%)]" />
          </div>

          <div className="container-custom relative z-10 mx-auto max-w-7xl px-6 text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#0DB6B5] mb-4 block">
              Enroll for 2026-27
            </span>
            <h1 className="font-display text-5xl md:text-8xl font-black text-white tracking-tight mb-8">
              Future Begins <span className="text-[#F5A623]">Here</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Step into an ecosystem driven by the <strong className="text-white">NDP Framework</strong>,
              where learning is structured for global excellence and individual growth.
            </p>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <section className="py-24 border-b border-gray-100">
          <div className="container-custom mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="group relative p-8 rounded-[2.5rem] bg-[#fcfcfd] border border-gray-100 transition-all hover:bg-[#0A2463]">
                    <div className="w-14 h-14 rounded-2xl bg-[#0A2463]/5 text-[#0A2463] flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-[#0A2463] transition-colors">
                      <Icon size={28} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#0A2463] group-hover:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 group-hover:text-white/60 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                    <span className="absolute top-8 right-8 font-display text-4xl font-black text-gray-100 group-hover:text-white/5 select-none transition-colors">
                      0{i + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FORM SECTION */}
        <section id="apply" className="py-24 bg-[#fcfcfd]">
          <div className="container-custom mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

              {/* CONTENT */}
              <div className="lg:col-span-5 pt-4">
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#0DB6B5] mb-4 block">
                  Get Started
                </span>
                <h2 className="font-display text-4xl md:text-6xl font-black text-[#0A2463] mb-8 leading-tight">
                  Admissions <br /> are now <span className="text-[#F5A623]">Open</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#0DB6B5]/10 flex items-center justify-center text-[#0DB6B5] shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A2463] mb-1">Academic Cycle</h4>
                      <p className="text-sm text-gray-500">Admissions for the 2026-27 session are strictly based on NDP alignment and seat availability.</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 flex items-center justify-center text-[#F5A623] shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A2463] mb-1">Campus Visits</h4>
                      <p className="text-sm text-gray-500">Personalized tours available Monday to Saturday between 9:00 AM and 4:00 PM.</p>
                    </div>
                  </div>
                </div>

                {/* FEE PLACEHOLDER */}
                <div className="mt-16 p-8 rounded-[2rem] bg-[#0A2463]/5 border border-[#0A2463]/10">
                  <h4 className="font-display text-lg font-bold text-[#0A2463] mb-3">Fee Structure</h4>
                  <p className="text-sm text-[#0A2463]/70 leading-relaxed italic">
                    "For fee structure details, please call us or visit your nearest CMR campus."
                  </p>
                </div>
              </div>

              {/* FORM */}
              <div className="lg:col-span-7">
                <Suspense fallback={<div className="h-[600px] animate-pulse bg-white rounded-[2.5rem] shadow-sm" />}>
                  <AdmissionForm />
                </Suspense>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-24 bg-white">
          <div className="container-custom mx-auto max-w-4xl px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#0DB6B5] mb-4 block">
                Common Queries
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-black text-[#0A2463]">
                Admission <span className="text-[#F5A623]">FAQs</span>
              </h2>
            </div>
            <FaqAccordion initialData={faqData} />
          </div>
        </section>

      </main>
    </SiteShell>
  );
}
