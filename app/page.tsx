import { IntroOverlay } from "@/components/motion/IntroOverlay";
import { HeroSection } from "@/components/sections/HeroSection";
import { SafetyTrustStrip } from "@/components/sections/SafetyTrustStrip";
import { AdmissionSpotlight } from "@/components/sections/AdmissionSpotlight";
import { TrustAffiliationsStrip } from "@/components/sections/TrustAffiliationsStrip";
import { DiscoverCampusSection } from "@/components/sections/DiscoverCampusSection";
import { FacilitiesGallerySection } from "@/components/sections/FacilitiesGallerySection";
import { JourneySection } from "@/components/sections/JourneySection";
import { AboutSnapshotSection } from "@/components/sections/AboutSnapshotSection";
import { AcademicsHighlightsSection } from "@/components/sections/AcademicsHighlightsSection";
import { AchievementsMarqueeSection } from "@/components/sections/AchievementsMarqueeSection";
import { MonthlyAchievementsSection } from "@/components/sections/MonthlyAchievementsSection";
import { WhatsHappeningSection } from "@/components/sections/WhatsHappeningSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GalleryPreviewSection } from "@/components/sections/GalleryPreviewSection";
import { AdmissionsCtaBanner } from "@/components/sections/AdmissionsCtaBanner";
import { AdmissionModal } from "@/components/sections/AdmissionModal";

import { fetchSheetData } from "@/lib/google-sheets";
import { GOOGLE_SHEET_IDS } from "@/lib/constants";
import { unstable_cache } from "next/cache";

// Cached data fetchers
const getCachedFacilities = unstable_cache(
  async () => fetchSheetData<any>(GOOGLE_SHEET_IDS.FACILITIES),
  ["facilities"],
  { revalidate: 3600, tags: ["facilities"] }
);

const getCachedAchievements = unstable_cache(
  async () => fetchSheetData<any>(GOOGLE_SHEET_IDS.ACHIEVEMENTS),
  ["achievements"],
  { revalidate: 3600, tags: ["achievements"] }
);

const getCachedAlbums = unstable_cache(
  async () => fetchSheetData<any>(GOOGLE_SHEET_IDS.ALBUMS),
  ["albums"],
  { revalidate: 3600, tags: ["albums"] }
);

export default async function HomePage() {
  // Parallel fetch from cache
  const [facilitiesRes, achievementsRes, albumsRes] = await Promise.allSettled([
    getCachedFacilities(),
    getCachedAchievements(),
    getCachedAlbums(),
  ]);

  const facilitiesData = facilitiesRes.status === 'fulfilled' ? facilitiesRes.value : [];
  const achievementsData = achievementsRes.status === 'fulfilled' ? achievementsRes.value : [];
  const albumsData = albumsRes.status === 'fulfilled' ? albumsRes.value : [];

  return (
    <>
      <IntroOverlay />
      <HeroSection />
      <SafetyTrustStrip />
      <AdmissionSpotlight />
      <TrustAffiliationsStrip />
      <DiscoverCampusSection />
      <FacilitiesGallerySection initialData={facilitiesData} />
      <JourneySection />
      <AboutSnapshotSection />
      <AcademicsHighlightsSection />
      <AchievementsMarqueeSection />
      <MonthlyAchievementsSection initialData={achievementsData} />
      <WhatsHappeningSection />
      {/* <TestimonialsSection /> */}
      <GalleryPreviewSection initialData={albumsData} />
      <AdmissionsCtaBanner />
      <AdmissionModal />
    </>
  );
}
