import { useState, useEffect } from "react";

export const enum Breakpoint {
  SM = 512,
  MD = 768,
  LG = 1024,
  XL = 1280,
  XXL = 1536,
}

export interface WindowSize {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isTabletLarge: boolean;
}

export const useWindowSize = (
  maxMobileWidth: Breakpoint = Breakpoint.MD,
  maxTabletWidth: Breakpoint = Breakpoint.LG,
  maxTabletLargeWidth: Breakpoint = Breakpoint.XL
): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isTabletLarge: false,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth <= maxMobileWidth,
        isTablet: window.innerWidth <= maxTabletWidth,
        isTabletLarge: window.innerWidth <= maxTabletLargeWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [maxMobileWidth]);

  return windowSize;
}
