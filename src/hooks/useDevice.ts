import { useState, useLayoutEffect } from "react";
import { MQ_MAX } from "@/libs/constants";

export const useDevice = () => {
  const [isSp, setIsSp] = useState(false);

  useLayoutEffect(() => {
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
