import { CAMPUS_NAME, LOCATION, SCHOOL_NAME } from "@/lib/constants";

export function SchoolJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "School",
    name: SCHOOL_NAME,
    description: `${CAMPUS_NAME} — CBSE school in ${LOCATION}.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://cmr-malakpet.example.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
