import { BaseHeader } from "./BaseHeader";
import { BaseFooter } from "./BaseFooter";
import { useHamburgerMenu } from "@/hooks/useHamburgerMenu";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isMenuOpen } = useHamburgerMenu();

  return (
    <>
      <div className="pointer-events-none fixed left-[0px] top-[0px] z-10 h-full w-full bg-black bg-opacity-30" aria-hidden="true" {...(!isMenuOpen && { hidden: true })}></div>
      <div className="relative z-20">
        <BaseHeader />
      </div>
      <main {...(isMenuOpen ? { inert: "" } : "")}>{children}</main>
      <div className="relative z-20" {...(isMenuOpen ? { inert: "" } : "")}>
        <BaseFooter />
      </div>
    </>
  );
};
