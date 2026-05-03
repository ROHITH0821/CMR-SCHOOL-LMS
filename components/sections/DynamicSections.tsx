"use client";

import dynamic from "next/dynamic";

export const AcademicsHighlightsSection = dynamic(
  () => import("./AcademicsHighlightsSection").then((mod) => mod.AcademicsHighlightsSection),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-50 rounded-3xl mx-auto max-w-7xl" />,
  }
);

export const AchievementsMarqueeSection = dynamic(
  () => import("./AchievementsMarqueeSection").then((mod) => mod.AchievementsMarqueeSection),
  {
    loading: () => <div className="h-40 animate-pulse bg-gray-50" />,
  }
);
