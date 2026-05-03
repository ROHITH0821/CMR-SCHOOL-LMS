import type { Metadata } from "next";
import { ProgramAccordion } from "@/components/academics/ProgramAccordion";
import { Button } from "@/components/ui/Button";
import { AcademicCalendarSection } from "@/components/sections/AcademicCalendarSection";

export const metadata: Metadata = {
  title: "Academics",
  description: "Programs, curriculum, infrastructure, and academic calendar — CMR Lalgadi Malakpet.",
};

const infra = [
  { title: "Science labs", icon: "🔬" },
  { title: "Computer lab", icon: "💻" },
  { title: "Language lab", icon: "🗣️" },
  { title: "Library", icon: "📚" },
  { title: "Sports", icon: "⚽" },
  { title: "Smart classrooms", icon: "📺" },
];

import { fetchSheetData } from "@/lib/google-sheets";
import { GOOGLE_SHEET_IDS } from "@/lib/constants";
import type { SchoolEvent } from "@/lib/calendar-data";

export default async function AcademicsPage() {
  const calendarData = await fetchSheetData<SchoolEvent>(GOOGLE_SHEET_IDS.CALENDAR);

  return (
    <div className="bg-white">
      <section className="section-padding container-custom">
        <h1 className="font-display text-4xl text-primary">Academics</h1>
        <p className="mt-4 max-w-2xl font-body text-lg text-textSecondary">
          Strictly follows the NCERT curriculum as per the National Curriculum Framework (NCF) and NEP 2020 guidelines — inquiry, competency, and wellbeing at the centre of every timetable.
        </p>
      </section>

      <section id="programs" className="scroll-mt-28 section-padding border-t border-border bg-cardBg">
        <div className="container-custom">
          <h2 className="mb-8 font-display text-2xl text-primary">Programs</h2>
          <ProgramAccordion />
        </div>
      </section>

      <section id="curriculum" className="scroll-mt-28 section-padding container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl text-primary">Curriculum framework</h2>
            <p className="mt-4 text-textSecondary">
              Our academic roadmap is designed to nurture critical thinking and holistic development through a structured, age-appropriate framework.
            </p>
          </div>
          <Button href="/curriculum" variant="outlineDark">
            Explore full curriculum
          </Button>
        </div>
        <ul className="grid gap-6 md:grid-cols-2">
          <li className="rounded-card border border-border p-8 shadow-soft transition hover:border-[#0DB6B5]/50">
            <strong className="text-xl text-primary block mb-3">Official NCERT/CBSE Curriculum</strong>
            <p className="text-textSecondary">Full compliance with NCF-FS and NCF-SE for structured, progressive learning across all developmental stages.</p>
          </li>
          <li className="rounded-card border border-border p-8 shadow-soft transition hover:border-[#F5A623]/50">
            <strong className="text-xl text-primary block mb-3">NEP 2020 Alignment</strong>
            <p className="text-textSecondary">Multidisciplinary projects, competency-based assessments, and a focus on skill development as per modern global standards.</p>
          </li>
        </ul>
      </section>

      <section className="section-padding bg-sectionAlt">
        <div className="container-custom">
          <h2 className="mb-8 font-display text-2xl text-primary">Infrastructure</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {infra.map((x) => (
              <div
                key={x.title}
                className="flex flex-col items-center rounded-card border border-border bg-white p-6 text-center shadow-soft"
              >
                <span className="text-3xl">{x.icon}</span>
                <p className="mt-3 text-sm font-medium text-primary">{x.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="calendar" className="scroll-mt-28">
        <AcademicCalendarSection initialData={calendarData} />
        <div className="container-custom pb-24 text-center">
          <p className="text-textSecondary mb-6">Need the full schedule for offline reference?</p>
          <Button href="#" variant="outlineDark" size="lg">
            Download PDF
          </Button>
        </div>
      </section>
    </div>
  );
}
