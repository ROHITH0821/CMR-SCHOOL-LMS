"use client";

import { usePathname } from "next/navigation";
import { AdmissionsStickyTab } from "./AdmissionsStickyTab";
import { CallUsFloatingTab } from "./CallUsFloatingTab";
import { TopBar } from "./TopBar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { BackToTop } from "./BackToTop";
import dynamic from "next/dynamic";

const GsapScrollInit = dynamic(() => import("@/components/motion/GsapScrollInit").then(mod => mod.GsapScrollInit), {
  ssr: false,
  loading: () => null
});

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <GsapScrollInit />
      <div className="fixed top-0 left-0 right-0 z-[80] flex flex-col pointer-events-none mt-[env(safe-area-inset-top)] pt-4 sm:pt-6">
        <div className="flex justify-center w-full px-4 sm:px-6">
          <div className="pointer-events-auto w-full max-w-[1400px]">
            <Navbar />
          </div>
        </div>
      </div>
      <main className={`min-h-screen bg-[#FFFFFF] ${!isHome ? 'pt-28 lg:pt-36 pb-20' : ''}`}>
        {children}
      </main>
      <Footer />
      <CallUsFloatingTab />
      <AdmissionsStickyTab />
      <FloatingWhatsApp />
    </>
  );
}
