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

export default async function HomePage() {
  // Parallel fetch with error handling
  const [facilitiesRes, achievementsRes, albumsRes] = await Promise.allSettled([
    fetchSheetData<any>(GOOGLE_SHEET_IDS.FACILITIES),
    fetchSheetData<any>(GOOGLE_SHEET_IDS.ACHIEVEMENTS),
    fetchSheetData<any>(GOOGLE_SHEET_IDS.ALBUMS),
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
