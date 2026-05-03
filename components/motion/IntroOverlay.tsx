"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import dynamic from "next/dynamic";

const CinematicIntro = dynamic(() => import("./CinematicIntro").then(mod => mod.CinematicIntro), { 
  ssr: false,
  loading: () => null 
});

import { useLenis } from "lenis/react";

const STORAGE_KEY = "cmr-cinematic-intro-seen";

function markIntroSeen() {
  try {
    localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // private mode / quota
  }
}

export function IntroOverlay() {
  const [show, setShow] = useState(true);
  const lenis = useLenis();

  useLayoutEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") {
        setShow(false);
      }
    } catch {
      // keep show true
    }
  }, []);

  useEffect(() => {
    if (!show) {
      document.body.style.overflow = "";
      if (lenis) lenis.start();
      return;
    }
    document.body.style.overflow = "hidden";
    if (lenis) lenis.stop();
    return () => {
      document.body.style.overflow = "";
      if (lenis) lenis.start();
    };
  }, [show, lenis]);

  const handleComplete = () => {
    markIntroSeen();
    setShow(false);
  };

  if (!show) return null;

  return <CinematicIntro onComplete={handleComplete} />;
}
