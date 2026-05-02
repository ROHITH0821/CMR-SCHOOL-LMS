"use client";

import dynamic from "next/dynamic";

export const Timeline = dynamic(
  () => import("./Timeline").then((mod) => mod.Timeline),
  {
    ssr: false,
    loading: () => <div className="h-96 animate-pulse bg-gray-50 rounded-3xl mx-auto max-w-7xl" />,
  }
);
