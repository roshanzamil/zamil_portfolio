"use client";

import { useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const GsapProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // Refresh ScrollTrigger on component mount to ensure proper calculations
    ScrollTrigger.refresh();
  }, []);

  return <>{children}</>;
};
