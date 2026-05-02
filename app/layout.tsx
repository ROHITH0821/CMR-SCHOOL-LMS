import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Instrument_Serif, Outfit, JetBrains_Mono } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { SchoolJsonLd } from "@/components/json-ld/SchoolJsonLd";

import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cmr-malakpet.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CMR Group of Schools, Lalgadi Malakpet | Igniting the Next Generation",
    template: "%s | CMR Schools Lalgadi Malakpet",
  },
  description:
    "CMR Schools, Lalgadi Malakpet, Hyderabad — Igniting the next generation with CBSE excellence, holistic development, and experienced faculty.",
  keywords: [
    "CMR Schools",
    "Lalgadi Malakpet",
    "Hyderabad",
    "CBSE School",
    "CMR Group of Schools",
  ],
  openGraph: {
    title: "CMR Group of Schools, Lalgadi Malakpet",
    description: "Igniting the next generation — admissions, academics, and community.",
    url: siteUrl,
    siteName: "CMR Schools Lalgadi Malakpet",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSerif.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="bg-white font-body text-textPrimary">
        <SchoolJsonLd />
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        <SiteShell>
{children}
        </SiteShell>
      </body>
    </html>
  );
}
