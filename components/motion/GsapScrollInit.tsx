"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GsapScrollInit() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-gsap-line]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.15,
            ease: "power2.inOut",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      document.querySelectorAll<HTMLElement>("[data-gsap-timeline]").forEach((root) => {
        const a = root.querySelector<HTMLElement>("[data-gsap-tl-1]");
        const b = root.querySelector<HTMLElement>("[data-gsap-tl-2]");
        if (!a || !b) return;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        });
        tl.from(a, { opacity: 0, x: -28, duration: 0.5, ease: "power2.out" }).from(
          b,
          { opacity: 0, y: 22, duration: 0.45, ease: "power2.out" },
          "-=0.25"
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
