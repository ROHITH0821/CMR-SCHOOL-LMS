"use client";

import dynamic from "next/dynamic";

export const AdmissionForm = dynamic(
  () => import("./AdmissionForm").then((mod) => mod.AdmissionForm),
  {
    ssr: false,
    loading: () => <div className="h-[600px] animate-pulse bg-white rounded-[2.5rem] shadow-sm" />,
  }
);

export const ContactForm = dynamic(
  () => import("./ContactForm").then((mod) => mod.ContactForm),
  {
    ssr: false,
    loading: () => <div className="h-[420px] animate-pulse bg-white rounded-modal border border-border" />,
  }
);
