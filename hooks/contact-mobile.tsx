"use client";

import { useState, useEffect } from "react";

export function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < breakpoint;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    
    const updateMobileState = () => setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", updateMobileState);
    
    return () => mediaQuery.removeEventListener("change", updateMobileState);
  }, [breakpoint]);

  return isMobile;
}

export default useMobile;
