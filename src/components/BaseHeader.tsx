import Link from "next/link";
import { URL_HOME, MENUS, SITE_NAME, URL_ABOUT } from "@/constants";
import { useDevice } from "@/hooks/useDevice";
import { HamburgerMenuIcon, Cross1Icon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useHamburgerMenu } from "@/hooks/useHamburgerMenu";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactSVG } from "react-svg";

export const BaseHeader = () => {
  const { isSp } = useDevice();
  const { isMenuOpen, toggleMenu } = useHamburgerMenu();
  useFocusTrap(isMenuOpen);
  const router = useRouter();

  return (
    <header className={`fixed z-10 flex h-[60px] w-full items-center bg-white ${isMenuOpen ? "border-b-[1px]" : ""}`}>
      <div className="c-main-container">
        <div className="flex items-center justify-between">
          <p {...(isMenuOpen ? { inert: "" } : "")}>
            <Link href={URL_HOME} className="flex items-center gap-3 font-roboto text-xl font-semibold tracking-wide ">
              <span className="flex w-8 gap-2 overflow-hidden rounded-full">
                <Image src="/images/logo.png" alt="" width={120} height={120} aria-hidden className={`${router.asPath === URL_ABOUT ? "-translate-x-10" : ""} w-8 rounded-full duration-300 ease-transform`} />
                <Image src="/images/me.png" alt="" width={120} height={120} aria-hidden className={`${router.asPath === URL_ABOUT ? "-translate-x-10" : ""} w-8 rounded-full duration-300 ease-transform`} />
              </span>
              {SITE_NAME}
            </Link>
          </p>
          {!isSp && (
            <nav className="hidden md:block">
              <ul className="mt-[2px] flex items-center gap-6">
                {MENUS.map((menu, index) => (
                  <li key={index} className="font-roboto font-semibold tracking-wide">
                    <Link href={menu.url}>{menu.name}</Link>
                  </li>
                ))}
                <div className="flex items-center gap-3">
                  <a href="https://twitter.com/kurichans_1996" target="_blank" rel="noopener noreferrer">
                    <ReactSVG src="/icons/x.svg" aria-label="Xを新規タブで開きます" className="h-[14px] w-[14px] text-primary" />
                  </a>
                  <a href="https://github.com/hisamikurita" target="_blank" rel="noopener noreferrer">
                    <ReactSVG src="/icons/github.svg" aria-label="Githubを新規タブで開きます" className="h-4 w-4 text-primary" />
                  </a>
                  <a href="mailto:kuritahisami@gmail.com">
                    <ReactSVG src="/icons/mail.svg" aria-label="メールアプリを起動します" className="h-4 w-4 text-primary" />
                  </a>
                </div>
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
                    <ul className="px-[30px] py-[16px] ">
                      {MENUS.map((menu, index) => (
                        <li key={index}>
                          <Link data-menu="sp" href={menu.url} className="flex items-center justify-between py-[10px] font-roboto font-semibold">
                            {menu.name}
                            <ArrowRightIcon width={20} height={20} className="relative top-[-1px] h-5 w-5" />
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
