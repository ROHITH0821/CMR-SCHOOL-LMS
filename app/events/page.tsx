import { EventsPageClient } from "@/components/events/EventsPageClient";
import { fetchSheetData } from "@/lib/google-sheets";
import { GOOGLE_SHEET_IDS } from "@/lib/constants";
import { unstable_cache } from "next/cache";

export const metadata = {
  title: "Events | CMR Group of Schools",
  description: "Plan around PTM, fairs, sports, and cultural milestones.",
};

const getCachedEvents = unstable_cache(
  async () => fetchSheetData<any>(GOOGLE_SHEET_IDS.CALENDAR),
  ["events-all"],
  { revalidate: 86400, tags: ["events"] }
);

export default async function EventsPage() {
  const eventsData = await getCachedEvents();
  return <EventsPageClient initialData={eventsData} />;
}
