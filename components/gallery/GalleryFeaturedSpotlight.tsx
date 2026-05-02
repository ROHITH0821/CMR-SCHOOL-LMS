"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { GalleryAlbum } from "@/lib/gallery-bento-data";

type Props = {
  items: GalleryAlbum[];
  onPhotoClick?: (globalIndex: number) => void;
  getGlobalIndex: (position: 0 | 1 | 2) => number;
  /** Homepage preview: tiles link to full gallery */
  linkAllTo?: string;
};

function SpotlightCard({
  item,
  onClick,
  size,
  href,
}: {
  item: GalleryAlbum;
  onClick?: () => void;
  size: "side" | "hero";
  href?: string;
}) {
  const className = cn(
    "group relative block w-full overflow-hidden rounded-[28px] border border-black/[0.06] bg-white text-left shadow-[0_12px_40px_-8px_rgba(15,40,30,0.12)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]",
    size === "hero" && "z-10 shadow-[0_24px_60px_-12px_rgba(15,40,30,0.18)] md:scale-[1.02] md:-translate-y-1"
  );

  const media = (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-neutral-100",
        size === "hero"
          ? "aspect-[16/11] min-h-[260px] md:aspect-[16/10] md:min-h-[360px] lg:min-h-[420px]"
          : "aspect-[4/3] min-h-[180px] md:min-h-[240px] lg:min-h-[260px]"
      )}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
        sizes={size === "hero" ? "(max-width:768px) 100vw, 55vw" : "(max-width:768px) 50vw, 30vw"}
        quality={92}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      <span className="absolute bottom-4 left-4 max-w-[85%] font-display text-lg font-semibold tracking-tight text-white drop-shadow-sm md:text-xl lg:text-2xl">
        {item.title}
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {media}
        <span className="sr-only">{item.title}</span>
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {media}
    </button>
  );
}

export function GalleryFeaturedSpotlight({ items, onPhotoClick, getGlobalIndex, linkAllTo }: Props) {
  if (items.length === 0) return null;

  const left = items[0];
  const center = items[1] ?? items[0];
  const right = items[2] ?? items[0];

  const h = linkAllTo;
  const oc = (pos: 0 | 1 | 2) => (h ? undefined : () => onPhotoClick?.(getGlobalIndex(pos)));

  if (items.length === 1) {
    return (
      <div className="mx-auto max-w-5xl px-4 pb-2 sm:px-5">
        <SpotlightCard item={items[0]} onClick={oc(0)} href={h} size="hero" />
      </div>
    );
  }

  if (items.length === 2) {
    return (
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-4 pb-2 sm:grid-cols-2 sm:px-5">
        <SpotlightCard item={items[0]} onClick={oc(0)} href={h} size="hero" />
        <SpotlightCard item={items[1]} onClick={oc(1)} href={h} size="hero" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pb-2 sm:px-6 xl:max-w-[90rem]">
      <div className="flex flex-col gap-5 md:hidden">
        <SpotlightCard item={center} onClick={oc(1)} href={h} size="hero" />
        <div className="grid grid-cols-2 gap-4">
          <SpotlightCard item={left} onClick={oc(0)} href={h} size="side" />
          <SpotlightCard item={right} onClick={oc(2)} href={h} size="side" />
        </div>
      </div>

      <div className="hidden items-end justify-center gap-4 md:flex lg:gap-6">
        <div className="w-[26%] min-w-0 pb-5 opacity-95 lg:w-[24%]">
          <SpotlightCard item={left} onClick={oc(0)} href={h} size="side" />
        </div>
        <div className="w-[48%] min-w-0 lg:w-[46%]">
          <SpotlightCard item={center} onClick={oc(1)} href={h} size="hero" />
        </div>
        <div className="w-[26%] min-w-0 pb-5 opacity-95 lg:w-[24%]">
          <SpotlightCard item={right} onClick={oc(2)} href={h} size="side" />
        </div>
      </div>
    </div>
  );
}
