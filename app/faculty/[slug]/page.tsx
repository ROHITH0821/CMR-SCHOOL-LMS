import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FacultyProfileView } from "@/components/faculty/FacultyProfileView";
import { FACULTY, getFacultyBySlug } from "@/lib/faculty-data";
import { CAMPUS_NAME } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return FACULTY.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const m = getFacultyBySlug(slug);
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

export default async function FacultyProfilePage({ params }: Props) {
  const { slug } = await params;
  const member = getFacultyBySlug(slug);
  if (!member) notFound();

  return <FacultyProfileView member={member} />;
}
