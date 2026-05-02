"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { NAV_LINKS, type NavItem } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CMRLotusLogo } from "@/components/logo/CMRLotusLogo";
import { Button } from "@/components/ui/Button";

function hasDropdown(link: NavItem): link is NavItem & { dropdown: { href: string; label: string }[] } {
  return "dropdown" in link && Array.isArray(link.dropdown);
}

function isNavItemActive(pathname: string, link: NavItem) {
  if (!hasDropdown(link)) {
    if (link.href === "/") return pathname === "/";
    if (link.label === "Careers") {
      return pathname === "/careers";
    }
    return pathname === link.href || pathname.startsWith(`${link.href}/`);
  }
  if (link.href === "/") return pathname === "/";
  return pathname === link.href || pathname.startsWith(`${link.href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const isSubPage = pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileOpenDropdown(null);
  }, [pathname]);

  const navLinkClass = (active: boolean) =>
    cn(
      "relative z-10 flex items-center gap-0.5 px-1.5 py-1.5 text-[11px] font-bold tracking-wide transition-colors duration-300 sm:px-2 lg:text-[12px] xl:text-[13px]",
      active ? "text-white" : "text-[#0A2463] hover:text-[#0A2463]"
    );

  return (
    <header
      className={cn(
        "relative isolate w-full overflow-visible rounded-3xl border border-gray-100 bg-white/95 backdrop-blur-md transition-all duration-500",
        scrolled || isSubPage ? "shadow-[0_8px_40px_rgba(0,0,0,0.08)] px-3 py-1.5" : "px-4 py-2.5 shadow-lg"
      )}
    >
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="group relative z-20 flex items-center"
          aria-label="CMR Schools Home"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <CMRLotusLogo
            className={cn(
              "w-auto shrink-0 origin-left transition-all duration-500 group-hover:scale-105",
              scrolled || isSubPage ? "h-11 sm:h-[3.25rem] md:h-14" : "h-16 sm:h-[4.5rem] md:h-[5rem]"
            )}
          />
          <div className={cn(
            "ml-2 sm:ml-3 flex flex-col justify-center border-l-2 border-[#0A2463]/10 pl-2.5 sm:pl-3.5 transition-all duration-500",
            scrolled || isSubPage ? "h-10" : "h-14"
          )}>
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.12em] text-[#0DB6B5] leading-tight">
              Lalgadi Malakpet
            </span>
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.12em] text-[#0A2463] leading-tight">
              Shamirpet
            </span>
          </div>
        </Link>

        <ul className="mx-2 hidden flex-1 items-center justify-center gap-0.5 whitespace-nowrap md:mx-4 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isNavItemActive(pathname, link);
            const dropdown = hasDropdown(link);

            if (dropdown) {
              return (
                <li
                  key={link.href}
                  className="group relative"
                  onMouseEnter={() => setHoveredPath(link.href)}
                  onMouseLeave={() => setHoveredPath(null)}
                >
                  <div className="relative rounded-full px-0.5 py-0.5">
                    {active && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 z-0 rounded-full bg-[#0A2463] shadow-md"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                    {!active && hoveredPath === link.href && (
                      <motion.div
                        layoutId="navbar-hover-dd"
                        className="absolute inset-0 z-0 rounded-full bg-[#0A2463]/12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <Link href={link.href} className={navLinkClass(active)}>
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 shrink-0 opacity-80 transition duration-300",
                          "group-hover:rotate-180"
                        )}
                        aria-hidden
                      />
                    </Link>
                  </div>

                  <div
                    className={cn(
                      "pointer-events-none absolute left-1/2 top-full z-[200] w-max -translate-x-1/2 pt-2",
                      "opacity-0 invisible translate-y-1 transition-all duration-200 ease-out",
                      "group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:translate-y-0"
                    )}
                  >
                    <div
                      className={cn(
                        "max-h-[min(70vh,28rem)] overflow-y-auto rounded-2xl border border-[#0A2463]/10 bg-white p-2",
                        "shadow-[0_25px_70px_-8px_rgba(10,36,99,0.35)] ring-1 ring-black/[0.04]"
                      )}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={`${link.href}-${item.href}-${item.label}`}
                          href={item.href}
                          className="block min-w-[240px] rounded-xl px-4 py-2.5 text-left text-[13px] font-semibold text-[#0A2463] transition hover:bg-[#0A2463]/[0.08] hover:text-[#0DB6B5]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => setHoveredPath(link.href)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                <div className="relative rounded-full px-0.5 py-0.5">
                  {active && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 z-0 rounded-full bg-[#0A2463] shadow-md"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  {!active && hoveredPath === link.href && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 z-0 rounded-full bg-[#0A2463]/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <Link href={link.href} className={navLinkClass(active)}>
                    {link.label}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="z-20 flex items-center gap-2">
          <Button
            href="tel:+914012345678"
            variant="outline"
            className="hidden rounded-full border-[#0A2463]/20 px-4 py-2.5 text-[11px] font-bold text-[#0A2463] hover:bg-[#0A2463]/5 lg:flex items-center gap-2"
          >
            <Phone size={14} className="text-[#0DB6B5]" />
            CALL US
          </Button>

          <Button
            href="/admissions#apply"
            variant="gold"
            className="hidden rounded-full bg-[#0DB6B5] px-5 py-2.5 text-[11px] font-bold tracking-widest text-white shadow-sm transition-colors hover:bg-[#0A2463] sm:px-6 sm:text-xs lg:flex"
          >
            APPLY NOW
          </Button>

          <button
            type="button"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
              open ? "bg-[#0A2463] text-white" : "bg-[#0A2463]/5 text-[#0A2463] hover:bg-[#0A2463]/10"
            )}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <div className="relative flex w-4 flex-col gap-1">
              <span
                className={cn(
                  "h-[2px] w-full rounded-full transition-all duration-300",
                  open ? "translate-y-[6px] rotate-45 bg-white" : "bg-current"
                )}
              />
              <span className={cn("h-[2px] w-full rounded-full transition-all duration-300", open ? "opacity-0" : "bg-current")} />
              <span
                className={cn(
                  "h-[2px] w-full rounded-full transition-all duration-300",
                  open ? "-translate-y-[6px] -rotate-45 bg-white" : "bg-current"
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="origin-top absolute left-0 top-[calc(100%+16px)] w-full overflow-hidden rounded-3xl border border-white/40 bg-white/95 shadow-2xl backdrop-blur-3xl lg:hidden"
          >
            <ul className="flex max-h-[75vh] flex-col gap-1 overflow-y-auto px-4 py-6">
              {NAV_LINKS.map((link, i) => {
                const active = isNavItemActive(pathname, link);
                const dd = hasDropdown(link);

                if (dd) {
                  const expanded = mobileOpenDropdown === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="flex flex-col gap-1"
                    >
                      <div className="flex overflow-hidden rounded-2xl border border-[#0A2463]/10">
                        <Link
                          href={link.href}
                          className={cn(
                            "min-w-0 flex-1 px-5 py-4 text-lg font-bold tracking-wide transition-colors",
                            active ? "bg-[#0A2463] text-white" : "text-[#0A2463] hover:bg-[#0A2463]/5"
                          )}
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          aria-expanded={expanded}
                          className="shrink-0 px-4 text-[#0A2463]"
                          onClick={() => setMobileOpenDropdown((k) => (k === link.href ? null : link.href))}
                        >
                          <ChevronDown className={cn("h-5 w-5 transition", expanded && "rotate-180")} />
                        </button>
                      </div>
                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="ml-3 space-y-1 overflow-hidden border-l-2 border-[#0DB6B5]/30 pl-4"
                          >
                            {link.dropdown.map((item) => (
                              <li key={`${link.href}-${item.href}-${item.label}`}>
                                <Link
                                  href={item.href}
                                  className="block rounded-xl py-2 text-base font-semibold text-[#0A2463]/90 hover:text-[#0DB6B5]"
                                  onClick={() => setOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                }

                return (
                  <motion.li key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-2xl px-5 py-4 text-lg font-bold tracking-wide transition-colors",
                        active ? "bg-[#0A2463] text-white shadow-md" : "text-[#0A2463] hover:bg-[#0A2463]/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.04 }}
                className="mt-4 flex flex-col gap-3 border-t border-[#0A2463]/10 pt-4"
              >
                <Button href="/admissions" className="w-full justify-center rounded-2xl bg-[#0DB6B5] py-4 text-lg font-bold tracking-widest text-white shadow-md">
                  APPLY NOW
                </Button>
                <Button href="tel:+91XXXXXXXXXX" variant="outline" className="w-full justify-center gap-3 rounded-2xl border-[#0A2463]/20 py-4 text-lg font-bold text-[#0A2463]">
                  <Phone className="h-5 w-5" />
                  CALL US
                </Button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
