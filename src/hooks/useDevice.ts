import { useState, useLayoutEffect } from "react";
import { MQ_MAX } from "@/constants";
import { useIsomorphicEffect } from "@/hooks/useIsomorphicEffect";

export const useDevice = () => {
  const [isSp, setIsSp] = useState(false);
  const isomorphicEffect = useIsomorphicEffect();

  isomorphicEffect(() => {
    const updateIsSp = (e: any) => {
      setIsSp(e.matches);
    };

    const mql = window.matchMedia(MQ_MAX);
    mql.addEventListener("change", updateIsSp);
    updateIsSp(mql);

    return () => window.removeEventListener("resize", updateIsSp);
  }, []);

  return { isSp };
};
