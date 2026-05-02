import type { Metadata } from "next";
import { PortalClient } from "@/components/portal/PortalClient";

export const metadata: Metadata = {
  title: "Parent Portal",
  description: "Attendance, circulars, and reports for CMR families.",
  robots: { index: false, follow: false },
};

export default function PortalPage() {
  return (
    <div className="bg-white">
      <section className="section-padding container-custom">
        <h1 className="font-display text-4xl text-primary">Parent portal</h1>
        <p className="mt-4 max-w-2xl text-textSecondary">
          Secure access to attendance, assessments, and school circulars. Configure Firebase Auth for production
          login.
        </p>
      </section>
      <section className="section-padding border-t border-border bg-cardBg">
        <div className="container-custom max-w-5xl">
          <PortalClient />
        </div>
      </section>
    </div>
  );
}
