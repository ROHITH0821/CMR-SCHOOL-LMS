export type FacultyMember = {
  slug: string;
  name: string;
  role: string;
  subject: string;
  dept: "Science" | "Maths" | "Languages" | "Social" | "PE" | "Arts";
  qual: string;
  years: string;
  bio: string;
  photo: string;
  emailLocal: string;
  headline: string;
  focus: string[];
  education: string[];
  quote?: string;
};

export const FACULTY: FacultyMember[] = [
  {
    slug: "dr-ananya-iyer",
    name: "Dr. Ananya Iyer",
    role: "Head of Department — Science",
    subject: "Physics",
    dept: "Science",
    qual: "Ph.D., M.Ed.",
    years: "14",
    bio: "Former research fellow; leads robotics and Olympiad mentoring.",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=88",
    emailLocal: "ananya.iyer",
    headline: "Building scientific curiosity through inquiry labs and real-world problem solving.",
    focus: ["NEP-aligned physics labs", "Robotics & STEM clubs", "Olympiad mentoring"],
    education: ["Ph.D. Physics — University of Hyderabad", "M.Ed. — CIET", "B.Sc. (Hons) Physics"],
    quote: "When students learn to ask better questions, they begin to lead their own learning.",
  },
  {
    slug: "mr-karthik-verma",
    name: "Mr. Karthik Verma",
    role: "Senior Faculty — Mathematics",
    subject: "Mathematics",
    dept: "Maths",
    qual: "M.Sc., B.Ed.",
    years: "11",
    bio: "Focus on problem-solving frameworks and competitive math.",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1600&q=88",
    emailLocal: "karthik.verma",
    headline: "Structured reasoning and joyful rigour — from foundational numeracy to competitive excellence.",
    focus: ["Problem-solving frameworks", "IMO & NTSE prep cohorts", "Data literacy projects"],
    education: ["M.Sc. Mathematics — IIT Madras", "B.Ed. — Regional Institute of Education"],
    quote: "Clarity in thinking beats speed in calculation — every time.",
  },
  {
    slug: "ms-fatima-begum",
    name: "Ms. Fatima Begum",
    role: "Faculty — English & Literary Arts",
    subject: "English",
    dept: "Languages",
    qual: "M.A., B.Ed.",
    years: "9",
    bio: "Theatre and creative writing for middle and senior grades.",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1600&q=88",
    emailLocal: "fatima.begum",
    headline: "Language as confidence — spoken, written, and performed on stage.",
    focus: ["Creative writing & theatre", "Debate & elocution", "Reading circles across grades"],
    education: ["M.A. English Literature — EFLU", "B.Ed. — Osmania University"],
    quote: "Every voice deserves a stage and a careful editor.",
  },
  {
    slug: "mr-joseph-paul",
    name: "Mr. Joseph Paul",
    role: "Faculty — Social Science",
    subject: "History",
    dept: "Social",
    qual: "M.A., B.Ed.",
    years: "16",
    bio: "Civic literacy and MUN programme coordinator.",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1600&q=88",
    emailLocal: "joseph.paul",
    headline: "Connecting past and present so students can participate thoughtfully in democracy.",
    focus: ["Model United Nations", "Heritage & civics projects", "Source-based inquiry"],
    education: ["M.A. History — University of Hyderabad", "B.Ed."],
    quote: "History is not memorising dates — it is understanding choices.",
  },
  {
    slug: "coach-riya-sen",
    name: "Coach Riya Sen",
    role: "Physical Education — Lead Coach",
    subject: "Physical Education",
    dept: "PE",
    qual: "M.P.Ed.",
    years: "8",
    bio: "Athletics and team sports; district-level coach certification.",
    photo:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1600&q=88",
    emailLocal: "riya.sen",
    headline: "Discipline, teamwork, and wellbeing — on the track and in life.",
    focus: ["Inter-house athletics", "Football & basketball", "Fitness & conditioning"],
    education: ["M.P.Ed. — LNIPE", "B.Sc. Physical Education"],
    quote: "Show up. Warm up. Lift each other up.",
  },
  {
    slug: "ms-meera-das",
    name: "Ms. Meera Das",
    role: "Faculty — Visual Arts",
    subject: "Visual Arts",
    dept: "Arts",
    qual: "MFA",
    years: "7",
    bio: "Portfolio prep and inter-school art exhibitions.",
    photo:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=88",
    emailLocal: "meera.das",
    headline: "Studio practice that builds observation, expression, and portfolio readiness.",
    focus: ["Drawing & painting", "Digital art basics", "Exhibitions & inter-school shows"],
    education: ["MFA — JNAFAU", "BFA Painting"],
    quote: "Art teaches you to see before you judge.",
  },
];

export function getFacultyBySlug(slug: string): FacultyMember | undefined {
  return FACULTY.find((f) => f.slug === slug);
}
