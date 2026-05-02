import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/forms/DynamicForms";

export const metadata: Metadata = {
  title: "Contact",
  description: "Visit CMR Schools Lalgadi Malakpet — map, branches, and enquiry form.",
};

const mapEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2!2d78.515!3d17.374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e0e0e0e0e0%3A0x0!2zMTfCsDIyJzI2LjQiTiA3OMKwMzAnNTQuMCJF!5e0!3m2!1sen!2sin!4v1712400000000!5m2!1sen!2sin";

const branches = [
  {
    name: "Lalgadi Malakpet (Main)",
    address: "Lalgadi Malakpet, Hyderabad, Telangana 500036",
    phone: "+91 40 1234 5678",
    email: "malakpet@cmrschools.edu.in",
    hours: "Mon–Sat 8:30 AM – 4:00 PM",
  },
  {
    name: "CMR — Kompally",
    address: "Kompally, Hyderabad",
    phone: "+91 40 9876 5432",
    email: "kompally@cmrschools.edu.in",
    hours: "Mon–Sat 8:30 AM – 4:00 PM",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#FFFFFF]">
      <section className="section-padding container-custom">
        <h1 className="font-display text-4xl text-[#0A2463]">Contact</h1>
        <p className="mt-4 max-w-2xl text-textSecondary">
          Visit us at Lalgadi Malakpet, call, or write — admissions, transport, and general enquiries.
        </p>
      </section>

      <section className="section-padding border-t border-border bg-cardBg">
        <div className="container-custom grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-modal border border-border shadow-soft">
            <iframe
              title="CMR Schools Lalgadi Malakpet on Google Maps"
              src={mapEmbed}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <p className="border-t border-border bg-white px-4 py-3 text-xs text-textMuted">
              Tip: search &quot;CMR Schools Lalgadi Malakpet&quot; in Google Maps for turn-by-turn directions.
            </p>
          </div>
          <Suspense fallback={<div className="h-[420px] animate-pulse bg-white rounded-modal border border-border" />}>
            <ContactForm />
          </Suspense>
        </div>
      </section>

      <section className="section-padding container-custom">
        <h2 className="mb-8 font-display text-2xl text-[#0A2463]">Branches</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {branches.map((b) => (
            <div key={b.name} className="rounded-modal border border-border bg-white p-6 shadow-soft">
              <h3 className="font-display text-xl text-[#0A2463]">{b.name}</h3>
              <p className="mt-2 text-sm text-textSecondary">{b.address}</p>
              <p className="mt-2 text-sm">
                <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="text-highlight hover:underline">
                  {b.phone}
                </a>
              </p>
              <p className="text-sm">
                <a href={`mailto:${b.email}`} className="text-highlight hover:underline">
                  {b.email}
                </a>
              </p>
              <p className="mt-2 text-xs text-textMuted">{b.hours}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-pill bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-soft"
          >
            WhatsApp us
          </a>
        </div>
      </section>
    </div>
  );
}
