import { Suspense } from "react";

import { IntroOverlay } from "@/components/motion/IntroOverlay";
import { HeroSection } from "@/components/sections/HeroSection";
import { SafetyTrustStrip } from "@/components/sections/SafetyTrustStrip";
import { AdmissionSpotlight } from "@/components/sections/AdmissionSpotlight";
import { TrustAffiliationsStrip } from "@/components/sections/TrustAffiliationsStrip";
import { DiscoverCampusSection } from "@/components/sections/DiscoverCampusSection";
import { FacilitiesGallerySection } from "@/components/sections/FacilitiesGallerySection";
import { JourneySection } from "@/components/sections/JourneySection";
import { AboutSnapshotSection } from "@/components/sections/AboutSnapshotSection";

import { AcademicsHighlightsSection, AchievementsMarqueeSection } from "@/components/sections/DynamicSections";

import { MonthlyAchievementsSection } from "@/components/sections/MonthlyAchievementsSection";
import { WhatsHappeningSection } from "@/components/sections/WhatsHappeningSection";
import { UpcomingEventsSection } from "@/components/sections/UpcomingEventsSection";
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

const getCachedNews = unstable_cache(
  async () => fetchSheetData<any>(GOOGLE_SHEET_IDS.NEWS),
  ["news"],
  { revalidate: 3600, tags: ["news"] }
);

const getCachedEvents = unstable_cache(
  async () => fetchSheetData<any>(GOOGLE_SHEET_IDS.CALENDAR),
  ["events"],
  { revalidate: 3600, tags: ["events"] }
);

export const dynamic = "force-static";
export const revalidate = 3600; // 1 hour

// --- Section Wrappers for Streaming ---

async function FacilitiesWrapper() {
  const data = await getCachedFacilities();
  return <FacilitiesGallerySection initialData={data} />;
}

async function AchievementsWrapper() {
  const data = await getCachedAchievements();
  return <MonthlyAchievementsSection initialData={data} />;
}

async function EventsWrapper() {
  const data = await getCachedEvents();
  return <UpcomingEventsSection initialData={data} />;
}

async function NewsWrapper() {
  const data = await getCachedNews();
  return <WhatsHappeningSection initialData={data} />;
}

async function GalleryWrapper() {
  const data = await getCachedAlbums();
  return <GalleryPreviewSection initialData={data} />;
}

export default async function HomePage() {
  return (
    <>
      <IntroOverlay />
      <HeroSection />
      <SafetyTrustStrip />
      <AdmissionSpotlight />
      <TrustAffiliationsStrip />
      <DiscoverCampusSection />
      
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-50 rounded-3xl mx-auto max-w-7xl" />}>
        <FacilitiesWrapper />
      </Suspense>

      <JourneySection />
      <AboutSnapshotSection />
      
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-50 rounded-3xl mx-auto max-w-7xl" />}>
        <AcademicsHighlightsSection />
      </Suspense>

      <Suspense fallback={<div className="h-40 animate-pulse bg-gray-50" />}>
        <AchievementsMarqueeSection />
      </Suspense>

      <Suspense fallback={<div className="h-[500px] animate-pulse bg-white rounded-3xl mx-auto max-w-7xl" />}>
        <AchievementsWrapper />
      </Suspense>

      <Suspense fallback={<div className="h-64 animate-pulse bg-gray-50" />}>
        <EventsWrapper />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-50" />}>
        <NewsWrapper />
      </Suspense>

      <Suspense fallback={<div className="h-[600px] animate-pulse bg-gray-50" />}>
        <GalleryWrapper />
      </Suspense>

      <AdmissionsCtaBanner />
      <AdmissionModal />
    </>
  );
}
