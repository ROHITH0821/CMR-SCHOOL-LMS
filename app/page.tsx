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
import { blogPosts } from "@/lib/blog-data";

import { fetchSheetData } from "@/lib/google-sheets";
import { GOOGLE_SHEET_IDS } from "@/lib/constants";
import { unstable_cache } from "next/cache";

// Cached data fetchers
const getCachedFacilities = unstable_cache(
  async () => fetchSheetData<any>(GOOGLE_SHEET_IDS.FACILITIES),
  ["facilities-prod"],
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

const getCachedEvents = unstable_cache(
  async () => fetchSheetData<any>(GOOGLE_SHEET_IDS.CALENDAR),
  ["events"],
  { revalidate: 3600, tags: ["events"] }
);

export default async function HomePage() {
  // Parallel fetch from cache
  const [facilitiesRes, achievementsRes, albumsRes, eventsRes] = await Promise.allSettled([
    getCachedFacilities(),
    getCachedAchievements(),
    getCachedAlbums(),
    getCachedEvents(),
  ]);
  
  const facilitiesData = facilitiesRes.status === 'fulfilled' ? facilitiesRes.value : [];
  const achievementsData = achievementsRes.status === 'fulfilled' ? achievementsRes.value : [];
  const albumsData = albumsRes.status === 'fulfilled' ? albumsRes.value : [];
  const eventsData = eventsRes.status === 'fulfilled' ? eventsRes.value : [];

  const latestBlogPosts = Object.values(blogPosts).slice(0, 3).map(post => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt
      .replace(/<[^>]*>/g, '')
      .replace(/\[&hellip;\]|\[\.\.\.\]/g, '')
      .trim()
      .slice(0, 120) + '...',
    date: post.date,
    img: post.img
  }));

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
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-50 rounded-3xl mx-auto max-w-7xl" />}>
        <AcademicsHighlightsSection />
      </Suspense>
      <Suspense fallback={<div className="h-40 animate-pulse bg-gray-50" />}>
        <AchievementsMarqueeSection />
      </Suspense>
      <MonthlyAchievementsSection initialData={achievementsData} />
      <UpcomingEventsSection initialData={eventsData} />
      <WhatsHappeningSection initialData={latestBlogPosts} />
      {/* <TestimonialsSection /> */}
      <GalleryPreviewSection initialData={albumsData} />
      <AdmissionsCtaBanner />
      <AdmissionModal />
    </>
  );
}
