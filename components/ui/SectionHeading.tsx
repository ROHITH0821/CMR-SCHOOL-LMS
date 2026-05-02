import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-center md:text-left"
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-2 font-body text-sm font-semibold uppercase tracking-widest",
            light ? "text-accent" : "text-secondary"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-tight",
          light ? "text-accent" : "text-primary"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl font-body text-base md:text-lg leading-relaxed",
            light ? "text-white/85" : "text-textSecondary",
            align === "center" ? "mx-auto" : "mx-auto md:mx-0"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
