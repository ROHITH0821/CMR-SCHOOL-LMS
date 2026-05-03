/**
 * ADMIN INSTRUCTIONS:
 * 1. To add a new achievement, copy an existing block (between { and }).
 * 2. Set 'id' to a unique value.
 * 3. Set 'title', 'month', 'academicYear', 'branch', and 'description'.
 * 4. (Optional) Provide an Unsplash or local image URL for 'image'.
 */
export type BranchName = "Lalgadi Malakpet" | "Kompally" | "Suraram" | "Shampur" | "Kundanpally" | "MB Grammar School";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  month: string; // e.g., "April"
  year: number; // e.g., 2026
  academicYear: string; // e.g., "2025-26"
  branch: BranchName;
  image?: string;
  link?: string; // Optional link for more details
}

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "a1",
    title: "Won State Science Olympiad",
    description: "3 students from Class IX secured Gold medals in the Inter-School Science Olympiad held at the state level.",
    month: "April",
    year: 2026,
    academicYear: "2025-26",
    branch: "Lalgadi Malakpet",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800",
    link: "/achievements"
  },
  {
    id: "a2",
    title: "National Chess Championship Selection",
    description: "3 students selected for national chess tournament after winning the district-level qualifiers.",
    month: "April",
    year: 2026,
    academicYear: "2025-26",
    branch: "Kompally",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6e94d7b27?q=80&w=800",
    link: "/achievements"
  },
  {
    id: "a3",
    title: "Best Eco-Friendly Campus Award",
    description: "Recognized by the Municipal Corporation for our innovative waste management and green initiatives.",
    month: "March",
    year: 2026,
    academicYear: "2025-26",
    branch: "Lalgadi Malakpet",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800",
    link: "/achievements"
  },
  {
    id: "a4",
    title: "Inter-School Football Champions",
    description: "Our U-14 team secured the first place in the CMR Invitational Cup.",
    month: "March",
    year: 2026,
    academicYear: "2025-26",
    branch: "Suraram",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800",
    link: "/achievements"
  },
  {
    id: "a5",
    title: "Top 10 Schools in Hyderabad",
    description: "Ranked among the top 10 CBSE schools for infrastructure and holistic development by Education Today.",
    month: "February",
    year: 2026,
    academicYear: "2025-26",
    branch: "Lalgadi Malakpet",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800",
    link: "/achievements"
  },
];
