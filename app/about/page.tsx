import type { Metadata } from "next";
import Image from "next/image";
import { Timeline } from "@/components/about/Timeline";

export const metadata: Metadata = {
  title: "About Us",
  description: "Vision, mission, leadership, and legacy of CMR Schools, Lalgadi Malakpet.",
};

const team = [
  { name: "Dr. S. Lakshmi", role: "Chairperson", bio: "Three decades in education policy and school governance." },
  { name: "Mr. R. Venkat", role: "Director", bio: "Operations, campus development, and partnerships." },
  { name: "Ms. P. Anjali", role: "Principal", bio: "Curriculum innovation and student wellbeing." },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="relative flex min-h-[40vh] items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/55" />
        <div className="relative z-10 w-full px-6 py-16 lg:px-12">
          <h1 className="font-display text-4xl text-white md:text-5xl">About us</h1>
        </div>
      </section>

      <section id="vision-mission" className="scroll-mt-28 section-padding container-custom grid gap-12 md:grid-cols-2">
        <div className="rounded-card border border-border bg-cardBg p-8 shadow-soft">
          <h2 className="font-display text-2xl text-primary">Vision</h2>
          <p className="mt-4 font-body text-textSecondary">
            Empower every learner with knowledge, empathy, and courage to lead with integrity in a complex world.
          </p>
        </div>
        <div className="rounded-card border border-border bg-cardBg p-8 shadow-soft">
          <h2 className="font-display text-2xl text-primary">Mission</h2>
          <p className="mt-4 font-body text-textSecondary">
            Deliver CBSE-aligned excellence through caring faculty, safe infrastructure, and partnerships with families.
          </p>
        </div>
      </section>

      <section id="principal-message" className="scroll-mt-28 section-padding container-custom grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-modal border border-border shadow-soft-lg">
          <Image
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80"
            alt="Principal"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
        <div>
          <span className="font-display text-7xl leading-none text-accent">“</span>
          <blockquote className="font-body text-lg text-textPrimary md:text-xl">
            We believe education is a shared journey—when teachers, parents, and students align, extraordinary outcomes
            follow.
          </blockquote>
          <p className="mt-6 font-display text-xl text-primary">Principal’s message</p>
          <p className="text-sm text-textMuted">Ms. P. Anjali · Principal</p>
        </div>
      </section>

      <Timeline />

      <section id="leadership" className="scroll-mt-28 section-padding bg-sectionAlt">
        <div className="container-custom">
          <h2 className="mb-10 font-display text-3xl text-primary">Management team</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((m) => (
              <div
                key={m.name}
                className="group rounded-card border border-border bg-white p-6 shadow-soft transition hover:shadow-soft-lg"
              >
                <div className="relative mb-4 aspect-square overflow-hidden rounded-card">
                  <Image
                    src={`https://picsum.photos/seed/${m.name}/400/400`}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-xl text-primary">{m.name}</h3>
                <p className="text-sm font-medium text-accent">{m.role}</p>
                <p className="mt-3 max-h-0 overflow-hidden text-sm text-textSecondary opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding container-custom">
        <h2 className="mb-8 font-display text-3xl text-primary">Affiliations & recognitions</h2>
        <div className="flex flex-wrap items-center justify-center gap-10 rounded-modal border border-dashed border-border bg-cardBg px-8 py-12">
          {["CBSE", "British Council ISA", "Green School Award", "ISO 21001"].map((x) => (
            <span key={x} className="font-display text-xl font-semibold text-primary/70">
              {x}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
