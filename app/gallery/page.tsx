import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata = {
  title: "Media Gallery | CMR Group of Schools",
  description: "Explore the vibrant life across our CMR campuses through our photo and video gallery.",
};

import { fetchSheetData } from "@/lib/google-sheets";
import { GOOGLE_SHEET_IDS } from "@/lib/constants";
import { unstable_cache } from "next/cache";

const getCachedGallery = unstable_cache(
  async () => fetchSheetData<any>(GOOGLE_SHEET_IDS.GALLERY),
  ["gallery"],
  { revalidate: 86400, tags: ["gallery"] }
);

export default async function GalleryPage() {
  const galleryData = await getCachedGallery();

  return (
    <SiteShell>
      <main className="bg-white min-h-screen">
        {/* HERO HEADER */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#0A2463]">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#0DB6B5_0%,transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#F5A623_0%,transparent_50%)]" />
          </div>
          
          <div className="container-custom relative z-10 mx-auto max-w-7xl px-4 text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#0DB6B5] mb-4 block">
              Moments that matter
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-black text-white tracking-tight mb-6">
              Media <span className="text-[#F5A623]">Gallery</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed tracking-wide">
              Step inside our campuses and witness the spirit of excellence, creativity, 
              and joy that defines every CMR student's journey.
            </p>
          </div>
        </section>

        {/* GALLERY GRID SECTION */}
        <section className="py-20">
          <div className="container-custom mx-auto max-w-7xl px-4">
            <GalleryGrid initialData={galleryData} />
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="pb-32">
          <div className="container-custom mx-auto max-w-5xl px-4">
            <div className="bg-[#fcfcfd] rounded-[3rem] border border-gray-100 p-12 md:p-20 text-center">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-[#0A2463] mb-8">
                Ready to join our community?
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="/admissions#apply" 
                  className="w-full sm:w-auto bg-[#0DB6B5] text-white px-10 py-5 rounded-full font-bold tracking-widest text-xs uppercase hover:bg-[#0A2463] transition-all shadow-xl shadow-[#0DB6B5]/20"
                >
                  Apply for Admission
                </a>
                <a 
                  href="/contact" 
                  className="w-full sm:w-auto border border-[#0A2463]/20 text-[#0A2463] px-10 py-5 rounded-full font-bold tracking-widest text-xs uppercase hover:bg-gray-50 transition-all"
                >
                  Schedule a Visit
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
