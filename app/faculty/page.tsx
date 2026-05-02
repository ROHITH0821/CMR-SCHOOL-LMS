import type { Metadata } from "next";
import { FacultyGrid } from "@/components/faculty/FacultyGrid";

export const metadata: Metadata = {
  title: "Faculty",
  description: "Meet the educators and HoDs at CMR Schools, Lalgadi Malakpet.",
};

export default function FacultyPage() {
  return (
    <div className="bg-white">
      <section className="section-padding container-custom">
        <h1 className="font-display text-4xl text-primary">Faculty</h1>
        <p className="mt-4 max-w-2xl text-textSecondary">
          Experienced mentors across sciences, languages, humanities, arts, and physical education.
        </p>
      </section>
      <section className="section-padding border-t border-border bg-cardBg">
        <div className="container-custom">
          <FacultyGrid />
        </div>
      </section>
    </div>
  );
}
