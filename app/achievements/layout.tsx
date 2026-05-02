import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Board toppers, awards, sports, and Olympiad results at CMR Lalgadi Malakpet.",
};

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
