export const SCHOOL_NAME = "CMR Group of Schools";
export const CAMPUS_NAME = "CMR Schools, Lalgadi Malakpet";
export const LOCATION = "Hyderabad, Telangana";
export const CAMPUS_ADDRESS_LINE = "CMR Schools, Hyderabad, Telangana - 500036";
export const FOUNDED_YEAR = 1984;
export const ADMISSION_YEAR_RANGE = "2026–27";

export interface BranchCompliance {
  name: string;
  board: "CBSE" | "Telangana State Board (SSC)";
  affiliationNo?: string;
  level: string;
}

export const BRANCH_COMPLIANCE: BranchCompliance[] = [
  {
    name: "CMR International School, Suraram",
    board: "CBSE",
    affiliationNo: "3630148",
    level: "Senior Secondary (Preschool to XII)"
  },
  {
    name: "CMR School, Kompally",
    board: "CBSE",
    affiliationNo: "3630537",
    level: "Senior Secondary (Preschool to XII)"
  },
  {
    name: "CMR International School, Shapur Nagar",
    board: "CBSE",
    affiliationNo: "3630126",
    level: "Secondary (Preschool to X)"
  },
  {
    name: "MB Grammar High School, Kundanpally",
    board: "Telangana State Board (SSC)",
    level: "Secondary (Preschool to X)"
  },
  {
    name: "CMR School, Lalgadi Malakpet",
    board: "CBSE",
    affiliationNo: "Applied For (New Campus)",
    level: "Secondary (Preschool to VIII)"
  }
];

export const BOARD_STATISTICS = {
  passRate: "100%",
  description: "Consistent 100% Pass Rate in the Secondary School Examination (Class X) and Senior School Certificate Examination (Class XII) across established branches."
};

/** Sub-links shown in desktop hover menus */
export type NavDropdownItem = {
  href: string;
  label: string;
  description?: string;
};

export type NavItem =
  | { href: string; label: string }
  | { href: string; label: string; dropdown: NavDropdownItem[] };

export const NAV_LINKS: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    dropdown: [
      { href: "/about#vision-mission", label: "Vision & mission" },
      { href: "/about#principal-message", label: "Principal's message" },
      { href: "/about#journey", label: "Our journey" },
      { href: "/about#leadership", label: "Leadership" },
    ],
  },
  {
    href: "/academics",
    label: "Academics",
    dropdown: [
      { href: "/academics#programs", label: "Programs" },
      { href: "/academics#curriculum", label: "Curriculum" },
      { href: "/academics#infrastructure", label: "Infrastructure" },
      { href: "/academics#calendar", label: "Academic calendar" },
    ],
  },
  { href: "/gallery", label: "Gallery" },
  { href: "/careers", label: "Careers" },
  {
    href: "/admissions",
    label: "Admissions",
    dropdown: [
      { href: "/admissions#eligibility", label: "Eligibility" },
      { href: "/admissions#process", label: "Admission process" },
      { href: "/admissions#apply", label: "Apply / enquiry" },
      { href: "/admissions#apply", label: "Enquiry" },
      { href: "/admissions#faq", label: "FAQs" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_QUICK = [
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/faculty", label: "Faculty" },
  { href: "/news", label: "News" },
  { href: "/blog", label: "Blog" },
  { href: "/portal", label: "Parent Portal" },
] as const;

export const ANNOUNCEMENTS = [
  "Admissions Open for 2026–27 — Limited seats at Lalgadi Malakpet campus",
  "Annual Day 2026 — Save the date: December 18",
  "Parent–Teacher Meeting schedules are live on the Events page",
  "NEP-aligned labs & sports clinics — enquire at the front office",
];

export interface GoogleSheetIds {
  GALLERY: string;
  ALBUMS: string;
  ACHIEVEMENTS: string;
  FACILITIES: string;
  CALENDAR: string;
  NEWS: string;
  FAQS: string;
  FACULTY: string;
}

export const GOOGLE_SHEET_IDS: GoogleSheetIds = {
  // Main Gallery Page
  GALLERY: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQa9H3I0Z9ti5uP6Dk7lOV133fqdzGkEK3MFepbgEZcrBRZLZBsCZQM1u-SHcZBddvBzccEyAac5xFJ/pub?gid=0&single=true&output=csv",
  
  // Home Page Bento Albums
  ALBUMS: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQa9H3I0Z9ti5uP6Dk7lOV133fqdzGkEK3MFepbgEZcrBRZLZBsCZQM1u-SHcZBddvBzccEyAac5xFJ/pub?gid=536318328&single=true&output=csv",
  
  // Other Sections (User to replace with their published CSV links)
  ACHIEVEMENTS: "REPLACE_WITH_CSV_LINK",
  FACILITIES: "REPLACE_WITH_CSV_LINK",
  CALENDAR: "REPLACE_WITH_CSV_LINK",
  NEWS: "REPLACE_WITH_CSV_LINK",
  FAQS: "REPLACE_WITH_CSV_LINK",
  FACULTY: "REPLACE_WITH_CSV_LINK",
};
