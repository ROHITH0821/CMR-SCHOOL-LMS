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
      { href: "/about", label: "About School" },
      { href: "/about/principal-message", label: "Principal's Message" },
      { href: "/about/features", label: "Salient Features" },
      { href: "/about/values", label: "Values" },
      { href: "/about/clubs", label: "Clubs" },
    ],
  },
  {
    href: "/academics/curriculum",
    label: "Academics",
    dropdown: [
      { href: "/academics/curriculum", label: "Curriculum" },
      { href: "/academics/iit-foundation", label: "IIT Foundation" },
      { href: "/academics/labs", label: "Labs" },
      { href: "/academics/competitions", label: "Competitions" },
    ],
  },
  { href: "/co-curricular", label: "Co-Curricular" },
  { href: "/about/gallery", label: "Gallery" },
  {
    href: "/admissions",
    label: "Admissions",
    dropdown: [
      { href: "/admissions#apply", label: "Apply / Enquiry" },
      { href: "/admissions#faq", label: "FAQs" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_QUICK = [
  { href: "/about", label: "About Us" },
  { href: "/academics/curriculum", label: "Academics" },
  { href: "/co-curricular", label: "Co-Curricular" },
  { href: "/admissions", label: "Admissions" },
  { href: "/about/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
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
  ALBUMS: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTbL71Gd0aoSu7IjhZAmInxnV1VUvEmTHb6rM7IINr-n2dibyvMqx3CZ4zXjHceVaAHi7v2XRC5HRmE/pub?gid=438455533&single=true&output=csv",

  // Other Sections (User to replace with their published CSV links)
  ACHIEVEMENTS: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTbL71Gd0aoSu7IjhZAmInxnV1VUvEmTHb6rM7IINr-n2dibyvMqx3CZ4zXjHceVaAHi7v2XRC5HRmE/pub?output=csv",
  FACILITIES: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTbL71Gd0aoSu7IjhZAmInxnV1VUvEmTHb6rM7IINr-n2dibyvMqx3CZ4zXjHceVaAHi7v2XRC5HRmE/pub?gid=1248382523&single=true&output=csv",
  CALENDAR: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTbL71Gd0aoSu7IjhZAmInxnV1VUvEmTHb6rM7IINr-n2dibyvMqx3CZ4zXjHceVaAHi7v2XRC5HRmE/pub?gid=1328060838&single=true&output=csv",
  NEWS: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTbL71Gd0aoSu7IjhZAmInxnV1VUvEmTHb6rM7IINr-n2dibyvMqx3CZ4zXjHceVaAHi7v2XRC5HRmE/pub?gid=818070186&single=true&output=csv",
  FAQS: "REPLACE_WITH_CSV_LINK",
  FACULTY: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTbL71Gd0aoSu7IjhZAmInxnV1VUvEmTHb6rM7IINr-n2dibyvMqx3CZ4zXjHceVaAHi7v2XRC5HRmE/pub?gid=378969017&single=true&output=csv",
};

