import { fetchSheetData } from "@/lib/google-sheets";
import { GOOGLE_SHEET_IDS } from "@/lib/constants";
import { unstable_cache } from "next/cache";
import { FacilitiesGallerySection } from "@/components/sections/FacilitiesGallerySection";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Campus Facilities | CMR National Public School",
  description: "Explore our world-class campus facilities designed to provide a holistic learning environment for our students.",
};

const getCachedFacilities = unstable_cache(
  async () => fetchSheetData<any>(GOOGLE_SHEET_IDS.FACILITIES),
  ["facilities-prod"],
  { revalidate: 86400, tags: ["facilities"] }
);

export default async function FacilitiesPage() {
  const facilitiesData = await getCachedFacilities();

  return (
    <main className="min-h-screen">
      <div className="container-custom max-w-7xl mx-auto px-6 pt-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#0A2463]/40 hover:text-[#0DB6B5] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Home
        </Link>
      </div>
      <FacilitiesGallerySection initialData={facilitiesData} />
    </main>
  );
}
