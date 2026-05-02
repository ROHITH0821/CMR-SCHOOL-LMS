import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill bg-accent/15 px-3 py-1 text-xs font-medium text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}
