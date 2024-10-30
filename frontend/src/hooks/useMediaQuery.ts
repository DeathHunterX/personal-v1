"use client";

import { useCallback, useEffect, useState } from "react";

// References: https://dev.to/juhanakristian/how-to-implement-usemediaquery-hook-in-react-1lc0

export const useMediaQuery = (matchMediaQuery = "max-width: 767px") => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) setTargetReached(true);
    else setTargetReached(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(${matchMediaQuery})`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) setTargetReached(true);

    return () => media.removeEventListener("change", updateTarget);
  }, [matchMediaQuery, updateTarget]);

  return targetReached;
};
