import { BaseHeader } from "./BaseHeader";
import { BaseFooter } from "./BaseFooter";
import { useHamburgerMenuContext } from "@/context/hamburgerMenu";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isMenuOpen } = useHamburgerMenuContext();

  return (
    <>
      <div className="pointer-events-none fixed left-[0px] top-[0px] z-10 h-full w-full bg-black bg-opacity-30" aria-hidden="true" {...(!isMenuOpen && { hidden: true })}></div>
      <div>
        <BaseHeader />
      </div>
      <main {...(isMenuOpen ? { inert: "" } : "")}>{children}</main>
      <div {...(isMenuOpen ? { inert: "" } : "")}>
        <BaseFooter />
      </div>
    </>
  );
};
