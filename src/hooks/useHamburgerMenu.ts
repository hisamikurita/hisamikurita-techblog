import { useContext } from "react";
import { HamburgerMenuContext } from "@/context/hamburgerMenu";

export const useHamburgerMenu = () => {
  const context = useContext(HamburgerMenuContext);

  return context;
};
