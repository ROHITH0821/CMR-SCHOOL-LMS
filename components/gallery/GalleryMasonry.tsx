"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { GalleryAlbum } from "@/lib/gallery-bento-data";

type Props = {
  items: GalleryAlbum[];
  onTileClick?: (index: number) => void;
  linkHref?: string;
  /** Added to local index when calling onTileClick (for grids that follow a spotlight). */
  indexOffset?: number;
};

/**
 * Pinterest-style CSS columns — equal columns, organic heights.
 * Photo tiles: label bottom-left, count top-right (reference gallery style).
 */
export function GalleryMasonry({ items, onTileClick, linkHref, indexOffset = 0 }: Props) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div
      className="w-full columns-2 gap-x-3 md:columns-3"
      style={{ columnGap: "14px", columnFill: "balance" }}
    >
      {items.map((item, localIndex) => {
        const globalIndex = localIndex + indexOffset;
        return (
          <MasonryCard
            key={`${item.id}-${globalIndex}`}
            item={item}
            index={globalIndex}
            onTileClick={onTileClick}
            linkHref={linkHref}
          />
        );
      })}
    </div>
  );
}

function MasonryCard({
  item,
  index,
  onTileClick,
  linkHref,
}: {
  item: GalleryAlbum;
  index: number;
  onTileClick?: (index: number) => void;
  linkHref?: string;
}) {
  // Defensive check for empty source to prevent Next.js console errors
  if (!item || !item.src) return null;

  const shared = cn(
    "group mb-3 w-full max-w-full break-inside-avoid overflow-hidden rounded-[24px] border border-black/[0.07] bg-white text-left md:mb-3.5",
    "shadow-[0_10px_36px_-12px_rgba(15,40,30,0.12)] transition-[transform,box-shadow] duration-300",
    "hover:z-[1] hover:scale-[1.02] hover:shadow-[0_16px_48px_-12px_rgba(15,40,30,0.16)] active:scale-[0.98]"
  );

  const inner = (
    <div className={cn("relative w-full overflow-hidden bg-neutral-100", item.imageAspectClass)}>
      <Image
        src={item.src}
        alt={item.alt || "Gallery image"}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1280px) 40vw, (max-width: 1536px) 32vw, 28vw"
        className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
        quality={92}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90 transition group-hover:from-black/65" />
      <span className="absolute right-3 top-3 z-[1] rounded-full border border-white/40 bg-white/90 px-2 py-0.5 font-mono text-[10px] font-semibold tabular-nums text-[#1B4332]">
        {item.photos} photos
      </span>
      <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
        <p className="line-clamp-2 font-display text-base font-semibold leading-tight text-white drop-shadow md:text-lg lg:text-xl">{item.title}</p>
        <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/75">{item.category}</p>
      </div>
    </div>
  );

  if (linkHref) {
    return (
      <Link
        href={linkHref}
        className={cn(shared, "block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2463]")}
      >
        {inner}
        <span className="sr-only">{item.title}</span>
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cn(shared, "block w-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2463]")}
      onClick={() => onTileClick?.(index)}
    >
      {inner}
    </button>
  );
}
