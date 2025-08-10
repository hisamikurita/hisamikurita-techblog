import { useState, useLayoutEffect } from "react";
import { MQ_MAX } from "@/constants";
import { useIsomorphicEffect } from "@/hooks/useIsomorphicEffect";

export const useDevice = () => {
  const [isSp, setIsSp] = useState(false);
  const isomorphicEffect = useIsomorphicEffect();

  isomorphicEffect(() => {
    const updateIsSp = (e: MediaQueryListEvent) => {
      setIsSp(e.matches);
    };

    const mql = window.matchMedia(MQ_MAX);
    mql.addEventListener("change", updateIsSp);
    setIsSp(mql.matches);

    return () => mql.removeEventListener("change", updateIsSp);
  }, []);

  return { isSp };
};
