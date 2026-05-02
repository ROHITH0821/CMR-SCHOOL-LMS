"use client";

export function GalleryFilterPill({
  children,
  active,
  onClick,
  className,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border-[0.5px] px-3.5 py-2 text-xs font-medium tracking-tight transition-colors active:scale-[0.97] ${
        active
          ? "border-[#0A2463] bg-[#0A2463] text-white shadow-sm shadow-[#0A2463]/20"
          : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-[#fafafa]"
      } ${className ?? ""}`}
    >
      {children}
    </button>
  );
}

export function GalleryYearPill({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border-[0.5px] px-3 py-1.5 text-xs font-medium tabular-nums tracking-tight transition-colors active:scale-[0.98] ${
        active
          ? "border-neutral-400/80 bg-neutral-100 text-neutral-800"
          : "border-neutral-200/90 bg-white text-neutral-500 hover:border-neutral-300"
      }`}
    >
      {children}
    </button>
  );
}
