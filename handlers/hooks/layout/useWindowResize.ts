"use client";
import { useLayoutEffect, useState } from "react";

export function useWindowsResize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return { size, isMobile: size.width < 768 };
}
