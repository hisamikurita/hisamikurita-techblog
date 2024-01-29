import React from "react";
import { createContext, useState, useContext } from "react";

const HamburgerMenuContext = createContext({ isMenuOpen: false, toggleMenu: () => {}, closeMenu: () => {} });

export const HamburgerMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return <HamburgerMenuContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>{children}</HamburgerMenuContext.Provider>;
};

export const useHamburgerMenuContext = () => {
  return useContext(HamburgerMenuContext);
};
