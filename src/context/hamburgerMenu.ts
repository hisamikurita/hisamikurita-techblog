import { createContext } from "react";

export const HamburgerMenuContext = createContext({ isMenuOpen: false, toggleMenu: () => {}, closeMenu: () => {} });
