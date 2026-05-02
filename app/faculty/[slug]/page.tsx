import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FacultyProfileView } from "@/components/faculty/FacultyProfileView";
import { FACULTY, getFacultyBySlug } from "@/lib/faculty-data";
import { CAMPUS_NAME } from "@/lib/constants";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return FACULTY.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const m = getFacultyBySlug(params.slug);
  if (!m) return { title: "Faculty" };
  return {
    title: `${m.name} | Faculty`,
    description: `${m.role} — ${m.subject} at ${CAMPUS_NAME}. ${m.headline.slice(0, 140)}`,
    openGraph: {
      title: `${m.name} | ${CAMPUS_NAME}`,
      description: m.headline,
    },
  };
}

export default function FacultyProfilePage({ params }: Props) {
  const member = getFacultyBySlug(params.slug);
  if (!member) notFound();

  return <FacultyProfileView member={member} />;
}
