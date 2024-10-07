"use client";

import { useEffect, useRef, useState } from "react";
import useIsAtTop from "./useIsAtTop";

const useNavbar = () => {
  const [shouldShowNav, setShouldShowNav] = useState(true);
  const lastScrollYRef = useRef<number>(0);
  const isAtFullTop = useIsAtTop();
  const isAtDecentTop = useIsAtTop(36);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const controlNavbar = () => {
        if (!isAtDecentTop) {
          setShouldShowNav(window.scrollY <= lastScrollYRef.current);
        }
        lastScrollYRef.current = window.scrollY;
      };

      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [isAtDecentTop]);

  return {
    shouldShowNav: shouldShowNav,
    isAtFullTop,
  };
};

export default useNavbar;
