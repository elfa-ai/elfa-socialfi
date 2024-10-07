"use client";

import { useLayoutEffect, useState } from "react";
import { useWindowsResize } from "./useWindowResize";
import useEvent from "../element/useEvent";
import useInitRender from "./useInitRender";

export default function useIsAtTop(topPosition = 1) {
  // const initRender = useInitRender();
  const [isAtTop, setIsAtTop] = useState(
    typeof window !== "undefined" ? window.scrollY <= topPosition : true,
  );

  // const { isMobile } = useWindowsResize();

  useEvent(typeof window !== "undefined" ? window : undefined, "scroll", () => {
    const y = window.scrollY;
    setIsAtTop(y <= topPosition);
  });

  return isAtTop;
}
