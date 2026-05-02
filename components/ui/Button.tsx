import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "gold" | "outline" | "outlineDark" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  gold:
    "bg-accent text-white shadow-soft hover:shadow-soft-lg hover:brightness-105 active:scale-[0.98]",
  outline:
    "border-2 border-white text-white hover:bg-white hover:text-primary",
  outlineDark:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "text-highlight hover:underline",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm rounded-full",
  md: "px-6 py-2.5 rounded-full",
  lg: "px-8 py-3.5 text-base rounded-full font-medium",
};

export function Button({
  children,
  className,
  href,
  variant = "gold",
  size = "md",
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-body transition-all duration-300",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 pointer-events-none",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
