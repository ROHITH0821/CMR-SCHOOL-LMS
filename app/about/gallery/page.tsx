import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata = {
  title: "Media Gallery | CMR School Kompally",
  description: "Explore the vibrant life across our campus through our photo and video gallery.",
};

import { unstable_cache } from "next/cache";
import { fetchSheetData } from "@/lib/google-sheets";
import { GOOGLE_SHEET_IDS } from "@/lib/constants";

export const dynamic = "force-static";
export const revalidate = 3600;

const getCachedGallery = unstable_cache(
  async () => fetchSheetData<any>(GOOGLE_SHEET_IDS.GALLERY),
  ["gallery"],
  { revalidate: 3600, tags: ["gallery"] }
);

export default async function GalleryPage() {
  const galleryData = await getCachedGallery();

  return (
    <main className="bg-white min-h-screen">
      {/* HERO HEADER */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#0DB6B5_0%,transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#F5A623_0%,transparent_50%)]" />
        </div>
        
        <div className="container relative z-10 mx-auto max-w-7xl px-6 text-center mt-20">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Media <span className="text-[#F5A623]">Gallery</span>
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed tracking-wide">
            Step inside our campus and witness the spirit of excellence, creativity, 
            and joy that defines every CMR student's journey.
          </p>
        </div>
      </section>

      {/* GALLERY GRID SECTION */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <GalleryGrid initialData={galleryData} />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="pb-32">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="bg-gray-50 rounded-3xl border border-gray-100 p-12 md:p-20 text-center shadow-sm">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8">
              Ready to join our community?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/admissions" 
                className="w-full sm:w-auto bg-accent text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-primary transition-all shadow-md hover:shadow-xl"
              >
                Apply for Admission
              </a>
              <a 
                href="/contact-us" 
                className="w-full sm:w-auto border border-primary/20 text-primary px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white transition-all bg-white"
              >
                Schedule a Visit
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
