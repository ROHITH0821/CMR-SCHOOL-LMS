/** Album categories for filters (homepage + gallery page). */
export type GalleryAlbumCategory = "Events" | "Sports" | "Arts" | "Science" | "Trips";

export type GalleryFilterCategory = "All" | GalleryAlbumCategory;

/** HD source — Next/Image still optimizes; Unsplash serves up to requested width. */
const q = "auto=format&fit=crop&w=1920&q=90";

export interface GalleryAlbum {
  id: string;
  title: string;
  alt: string;
  src: string;
  category: GalleryAlbumCategory;
  year: number;
  photos: number;
  /**
   * Tailwind aspect ratio for the image frame — mix portrait / landscape / square
   * so masonry column heights vary organically.
   */
  imageAspectClass: string;
}

/**
 * Albums for masonry grids — mix of aspects for organic columns.
 */
export const GALLERY_ALBUMS: GalleryAlbum[] = [
  {
    id: "annual-24",
    title: "Annual Day 2024",
    alt: "Annual day celebration on stage",
    src: `https://images.unsplash.com/photo-1511578314322-379afb476865?${q}`,
    category: "Events",
    year: 2024,
    photos: 48,
    imageAspectClass: "aspect-[3/4]",
  },
  {
    id: "sports-24",
    title: "Inter-house sports",
    alt: "Students on the sports field",
    src: `https://images.unsplash.com/photo-1552674605-db6ffd4facb5?${q}`,
    category: "Sports",
    year: 2024,
    photos: 32,
    imageAspectClass: "aspect-[5/4]",
  },
  {
    id: "arts-24",
    title: "Music & drama",
    alt: "Cultural performance",
    src: `https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?${q}`,
    category: "Arts",
    year: 2024,
    photos: 24,
    imageAspectClass: "aspect-[4/5]",
  },
  {
    id: "science-24",
    title: "STEM showcase",
    alt: "Science fair projects",
    src: `https://images.unsplash.com/photo-1532094349884-543bc11b234d?${q}`,
    category: "Science",
    year: 2024,
    photos: 28,
    imageAspectClass: "aspect-[4/3]",
  },
  {
    id: "class-24",
    title: "Open classrooms",
    alt: "Bright classroom learning",
    src: `https://images.unsplash.com/photo-1577896851231-70ef18881754?${q}`,
    category: "Events",
    year: 2024,
    photos: 18,
    imageAspectClass: "aspect-[2/3]",
  },
  {
    id: "highlights",
    title: "Term highlights",
    alt: "Assemblies and student awards",
    src: `https://images.unsplash.com/photo-1503676260728-1c00da094a0b?${q}`,
    category: "Events",
    year: 2024,
    photos: 12,
    imageAspectClass: "aspect-[16/10]",
  },
  {
    id: "trips-23",
    title: "Heritage & nature trips",
    alt: "Educational trip outdoors",
    src: `https://images.unsplash.com/photo-1580582932707-520aed937b7b?${q}`,
    category: "Trips",
    year: 2023,
    photos: 56,
    imageAspectClass: "aspect-[3/5]",
  },
  {
    id: "grad-23",
    title: "Graduation",
    alt: "Graduation ceremony",
    src: `https://images.unsplash.com/photo-1434030216411-0b793f4b4173?${q}`,
    category: "Events",
    year: 2023,
    photos: 40,
    imageAspectClass: "aspect-[4/3]",
  },
  {
    id: "art-lab-23",
    title: "Art & design lab",
    alt: "Students in visual arts studio",
    src: `https://images.unsplash.com/photo-1513364776144-60967b0f800f?${q}`,
    category: "Arts",
    year: 2023,
    photos: 22,
    imageAspectClass: "aspect-[1/1]",
  },
  {
    id: "library-24",
    title: "Library week",
    alt: "Reading and library activities",
    src: `https://images.unsplash.com/photo-1481627834876-b7833e8f5570?${q}`,
    category: "Events",
    year: 2024,
    photos: 20,
    imageAspectClass: "aspect-[4/5]",
  },
  {
    id: "relay-24",
    title: "Sports relay",
    alt: "Track relay race",
    src: `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?${q}`,
    category: "Sports",
    year: 2024,
    photos: 36,
    imageAspectClass: "aspect-[3/4]",
  },
  {
    id: "nature-trip-23",
    title: "Botanical gardens",
    alt: "Science and trips combined outing",
    src: `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?${q}`,
    category: "Trips",
    year: 2023,
    photos: 30,
    imageAspectClass: "aspect-[5/4]",
  },
  {
    id: "discovery-day-24",
    title: "Discovery day",
    alt: "Hands-on learning stations and experiments",
    src: `https://images.unsplash.com/photo-1509062522246-3755977927d7?${q}`,
    category: "Science",
    year: 2024,
    photos: 34,
    imageAspectClass: "aspect-[4/3]",
  },
  {
    id: "innovation-fair-24",
    title: "Innovation fair",
    alt: "Student projects and prototypes on display",
    src: `https://images.unsplash.com/photo-1529390079861-591de354faf5?${q}`,
    category: "Science",
    year: 2024,
    photos: 26,
    imageAspectClass: "aspect-[3/4]",
  },
  {
    id: "exam-focus-24",
    title: "Exam readiness",
    alt: "Focused study and revision sessions",
    src: `https://images.unsplash.com/photo-1516979187457-637abb4f9353?${q}`,
    category: "Events",
    year: 2024,
    photos: 22,
    imageAspectClass: "aspect-[16/10]",
  },
  {
    id: "collab-class-23",
    title: "Collaborative classrooms",
    alt: "Students working together at shared tables",
    src: `https://images.unsplash.com/photo-1523240795612-9a054b0db644?${q}`,
    category: "Events",
    year: 2023,
    photos: 38,
    imageAspectClass: "aspect-[5/4]",
  },
  {
    id: "global-readers-22",
    title: "Global readers",
    alt: "World map and reading corner activities",
    src: `https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?${q}`,
    category: "Trips",
    year: 2022,
    photos: 16,
    imageAspectClass: "aspect-[2/3]",
  },
  {
    id: "house-councils-24",
    title: "House councils",
    alt: "Student leaders in discussion",
    src: `https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?${q}`,
    category: "Events",
    year: 2024,
    photos: 20,
    imageAspectClass: "aspect-[4/5]",
  },
  {
    id: "project-week-23",
    title: "Project week",
    alt: "Group projects and peer presentations",
    src: `https://images.unsplash.com/photo-1522202176988-66273c2fd55f?${q}`,
    category: "Science",
    year: 2023,
    photos: 42,
    imageAspectClass: "aspect-[4/3]",
  },
  {
    id: "digital-skills-24",
    title: "Digital skills lab",
    alt: "Laptops and guided technology sessions",
    src: `https://images.unsplash.com/photo-1524178232363-1fb2b075b655?${q}`,
    category: "Science",
    year: 2024,
    photos: 24,
    imageAspectClass: "aspect-[3/5]",
  },
];

/** @deprecated Use GALLERY_ALBUMS */
export const GALLERY_BENTO_ITEMS = GALLERY_ALBUMS;

export const GALLERY_CATEGORY_OPTIONS: GalleryFilterCategory[] = [
  "All",
  "Events",
  "Sports",
  "Arts",
  "Science",
  "Trips",
];

export const GALLERY_YEAR_OPTIONS = [2024, 2023, 2022] as const;

export type GalleryYearFilter = "All" | (typeof GALLERY_YEAR_OPTIONS)[number];
