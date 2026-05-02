"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

export function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);
  const taglineCharsRef = useRef<HTMLSpanElement[]>([]);
  const [showSkip, setShowSkip] = useState(false);

  const petalTop = useRef<SVGPathElement>(null);
  const petalLeftTeal = useRef<SVGPathElement>(null);
  const petalRightTeal = useRef<SVGPathElement>(null);
  const petalLeftPink = useRef<SVGPathElement>(null);
  const petalRightPink = useRef<SVGPathElement>(null);
  const centerDot = useRef<SVGCircleElement>(null);

  const cmrTextC = useRef<SVGTextElement>(null);
  const cmrTextM = useRef<SVGTextElement>(null);
  const cmrTextR = useRef<SVGTextElement>(null);

  const groupSchools = useRef<SVGTextElement>(null);

  useEffect(() => {
    const skipTimer = setTimeout(() => setShowSkip(true), 1000);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set(
        [
          petalTop.current,
          petalLeftTeal.current,
          petalRightTeal.current,
          petalLeftPink.current,
          petalRightPink.current,
          centerDot.current,
        ],
        { scale: 0, opacity: 0, transformOrigin: "center bottom" }
      );

      gsap.set(centerDot.current, { transformOrigin: "center center" });

      gsap.set([cmrTextC.current, cmrTextM.current, cmrTextR.current], { opacity: 0, y: 20 });
      gsap.set(groupSchools.current, { opacity: 0, y: 10 });

      tl.to(petalTop.current, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.5)" })
        .to(
          [petalLeftTeal.current, petalRightTeal.current],
          { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.2)", stagger: 0.1 },
          "-=0.4"
        )
        .to(
          [petalLeftPink.current, petalRightPink.current],
          { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.2)", stagger: 0.1 },
          "-=0.3"
        )
        .to(centerDot.current, { scale: 1, opacity: 1, duration: 0.4, ease: "bounce.out" }, "-=0.2");

      tl.to(
        [cmrTextC.current, cmrTextM.current, cmrTextR.current],
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1 },
        "-=0.1"
      );

      tl.to(groupSchools.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2");

      tl.fromTo(
        taglineCharsRef.current,
        { opacity: 0, scale: 1.2, filter: "blur(2px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.1,
          stagger: 0.05,
          ease: "power2.out",
        },
        "+=0.2"
      );

      tl.to(
        flareRef.current,
        { opacity: 1, scale: 1.5, duration: 2, ease: "power2.out" },
        "-=1"
      );

      tl.to(
        containerRef.current,
        {
          scale: 1.5,
          opacity: 0,
          duration: 1.2,
          ease: "power4.inOut",
          onComplete,
        },
        "+=1.5"
      );
    }, containerRef);

    return () => {
      clearTimeout(skipTimer);
      ctx.revert();
    };
  }, [onComplete]);

  const setTaglineCharRef = (el: HTMLSpanElement | null, index: number) => {
    if (el) {
      taglineCharsRef.current[index] = el;
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex select-none items-center justify-center overflow-hidden bg-[#ffffff]"
    >
      <div className="absolute inset-0 z-0 bg-[#ffffff]">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-50/30 via-transparent to-transparent" />
      </div>

      <div
        ref={flareRef}
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[600px] w-[600px] max-w-full -translate-x-1/2 -translate-y-1/2 opacity-0 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, rgba(244,138,54,0.1) 0%, rgba(13,182,181,0.05) 30%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="pointer-events-none relative z-20 flex flex-col items-center justify-center px-4">
        <div className="mb-6 w-[280px] drop-shadow-xl sm:mb-8 sm:w-[350px] md:w-[450px]">
          <svg viewBox="0 0 200 95" xmlns="http://www.w3.org/2000/svg" fill="none" className="h-auto w-full overflow-visible">
            <g transform="translate(100, 45) scale(0.8)">
              <path ref={petalTop} d="M0,0 C-10,-20 -20,-50 0,-60 C20,-50 10,-20 0,0 Z" fill="#F8A5C2" />
              <path
                ref={petalLeftTeal}
                d="M-8,-15 C-25,-25 -35,-40 -30,-50 C-15,-50 -5,-35 -3,-15 Z"
                fill="#0DB6B5"
              />
              <path
                ref={petalRightTeal}
                d="M8,-15 C25,-25 35,-40 30,-50 C15,-50 5,-35 3,-15 Z"
                fill="#0DB6B5"
              />
              <path ref={petalLeftPink} d="M-10,-5 C-30,-5 -50,-10 -55,-20 C-50,-30 -25,-25 -5,-10 Z" fill="#F8A5C2" />
              <path ref={petalRightPink} d="M10,-5 C30,-5 50,-10 55,-20 C50,-30 25,-25 5,-10 Z" fill="#F8A5C2" />
              <circle ref={centerDot} cx="0" cy="5" r="5" fill="#0DB6B5" />
            </g>

            <text
              ref={cmrTextC}
              x="70"
              y="75"
              textAnchor="middle"
              fontFamily="serif"
              fontSize="34"
              fontWeight="bold"
              fill="#0A2463"
            >
              C
            </text>
            <text
              ref={cmrTextM}
              x="100"
              y="75"
              textAnchor="middle"
              fontFamily="serif"
              fontSize="34"
              fontWeight="bold"
              fill="#0A2463"
            >
              M
            </text>
            <text
              ref={cmrTextR}
              x="130"
              y="75"
              textAnchor="middle"
              fontFamily="serif"
              fontSize="34"
              fontWeight="bold"
              fill="#0A2463"
            >
              R
            </text>

            <text
              ref={groupSchools}
              x="100"
              y="92"
              textAnchor="middle"
              fontFamily="sans-serif"
              fontSize="12"
              fill="#0A2463"
              letterSpacing="1"
            >
              GROUP OF SCHOOLS
            </text>
          </svg>
        </div>

        <p className="mt-8 font-body text-sm font-medium uppercase tracking-[0.3em] text-[#F48A36] sm:mt-10 sm:text-lg md:text-xl flex flex-wrap justify-center">
          {"Igniting the Next Generation".split("").map((char, i) => (
            <span
              key={i}
              ref={(el) => setTaglineCharRef(el, i)}
              className={char === " " ? "w-3" : "inline-block"}
            >
              {char}
            </span>
          ))}
        </p>
      </div>

      <button
        type="button"
        onClick={onComplete}
        className={cn(
          "pointer-events-auto absolute right-6 top-6 z-50 rounded-full border border-[#0A2463]/20 bg-white/50 px-4 py-2 text-xs font-medium text-[#0A2463] backdrop-blur-md transition-all duration-500 hover:bg-[#0A2463]/10",
          showSkip ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        )}
      >
        Skip Intro
      </button>
    </div>
  );
}
