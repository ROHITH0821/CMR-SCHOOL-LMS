"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { CinematicIntro } from "./CinematicIntro";
import { useLenis } from "@studio-freight/react-lenis";

const STORAGE_KEY = "cmr-cinematic-intro-seen";

function markIntroSeen() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // private mode / quota
  }
}

export function IntroOverlay() {
  const [show, setShow] = useState(true);
  const lenis = useLenis();

  useLayoutEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
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
