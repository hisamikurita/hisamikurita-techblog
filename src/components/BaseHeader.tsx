import Link from "next/link";
import { URL_HOME, MENUS, SITE_NAME } from "@/constants";
import { useDevice } from "@/hooks/useDevice";
import { HamburgerMenuIcon, Cross1Icon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useHamburgerMenu } from "@/hooks/useHamburgerMenu";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import Image from "next/image";

export const BaseHeader = () => {
  const { isSp } = useDevice();
  const { isMenuOpen, toggleMenu } = useHamburgerMenu();
  useFocusTrap(isMenuOpen);

  return (
    <header className={`fixed z-10 flex h-[60px] w-full items-center bg-white ${isMenuOpen ? "border-b-[1px]" : ""}`}>
      <div className="c-main-container">
        <div className="flex items-center justify-between">
          <p {...(isMenuOpen ? { inert: "" } : "")}>
            <Link href={URL_HOME} className="flex items-center gap-3 font-roboto text-xl font-semibold tracking-wide">
              <Image src="/images/logo.png" alt="" width={120} height={120} aria-hidden className="w-[32px]" />
              {SITE_NAME}
            </Link>
          </p>
          {!isSp && (
            <nav>
              <ul className="flex">
                {MENUS.map((menu, index) => (
                  <li key={index} className="first:mr-[24px]">
                    <Link href={menu.url}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          {isSp && (
            <>
              <button className="h-[20px] w-[20px]" aria-label={!isMenuOpen ? "メニューを開く" : "メニューを閉じる"} aria-expanded={isMenuOpen ? true : false} onClick={toggleMenu} data-menu="hamburger">
                <HamburgerMenuIcon width={20} height={20} {...(isMenuOpen && { hidden: true })} />
                <Cross1Icon width={20} height={20} {...(!isMenuOpen && { hidden: true })} />
              </button>
              <div className="absolute left-[0px] top-[60px] w-full" aria-hidden={!isMenuOpen ? true : false} {...(!isMenuOpen && { hidden: true })}>
                <div className="bg-white">
                  <nav>
                    <ul className="px-[30px] py-[20px] ">
                      {MENUS.map((menu, index) => (
                        <li key={index}>
                          <Link data-menu="sp" href={menu.url} className="flex items-center justify-between py-[10px]">
                            {menu.name}
                            <ArrowRightIcon width={20} height={20} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
