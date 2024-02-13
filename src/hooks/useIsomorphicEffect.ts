/**
 * https://eight-bites.blog/2021/05/uselayouteffect-ssr/
 */

import { useEffect, useLayoutEffect } from "react";

export const useIsomorphicEffect = () => {
  return typeof window !== "undefined" ? useLayoutEffect : useEffect;
};
