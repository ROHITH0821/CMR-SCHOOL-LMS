import type { Metadata } from "next";
import { FacultyGrid } from "@/components/faculty/FacultyGrid";
import { SiteShell } from "@/components/layout/SiteShell";
import { fetchSheetData } from "@/lib/google-sheets";
import { GOOGLE_SHEET_IDS } from "@/lib/constants";
import { unstable_cache } from "next/cache";

export const metadata: Metadata = {
  title: "Faculty | CMR Group of Schools",
  description: "Meet the educators and HoDs at CMR Schools, Lalgadi Malakpet.",
};

const getCachedFaculty = unstable_cache(
  async () => fetchSheetData<any>(GOOGLE_SHEET_IDS.FACULTY),
  ["faculty"],
  { revalidate: 3600, tags: ["faculty"] }
);

export default async function FacultyPage() {
  const facultyRes = await getCachedFaculty();
  const facultyData = Array.isArray(facultyRes) ? facultyRes : [];

  return (
    <SiteShell>
      <main className="bg-white">
        {/* HERO */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-[#0A2463]">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#0DB6B5_0%,transparent_50%)]" />
          </div>
          <div className="container-custom relative z-10 mx-auto max-w-7xl px-6">
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#0DB6B5] mb-4 block">
              Our Team
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
              Expert <span className="text-[#F5A623]">Mentors</span>
            </h1>
            <p className="text-white/60 max-w-2xl text-base md:text-lg leading-relaxed">
              Experienced educators dedicated to the NDP framework and holistic student development across all disciplines.
            </p>
          </div>
        </section>

        {/* GRID */}
        <section className="py-24 bg-white">
          <div className="container-custom mx-auto max-w-7xl px-6">
            <FacultyGrid initialData={facultyData} />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
