import Link from "next/link";
import { URL_HOME, MENUS, SITE_NAME, URL_ABOUT, SNS, RSS, CONTACT } from "@/constants";
import { useDevice } from "@/hooks/useDevice";
import { HamburgerMenuIcon, Cross1Icon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useHamburgerMenu } from "@/hooks/useHamburgerMenu";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactSVG } from "react-svg";
import { cn } from "@/libs/tailwindMerge";
import { HeaderSearch } from "./HeaderSearch";

export const BaseHeader = () => {
  const { isSp } = useDevice();
  const { isMenuOpen, toggleMenu } = useHamburgerMenu();
  useFocusTrap(isMenuOpen);
  const router = useRouter();

  return (
    <header className="fixed z-10 flex h-[60px] w-full items-center border-b-[1px] bg-white">
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
                <li className="w-[200px]">
                  <HeaderSearch />
                </li>
                {MENUS.map((menu, index) => (
                  <li key={index} className="font-roboto font-semibold tracking-wide">
                    <Link href={menu.url} className="group relative transition-opacity duration-300 ease-material hover:text-primary">
                      {menu.name}
                      <span className="absolute bottom-0 left-0 h-[1px] w-full bg-primary opacity-0 transition-opacity duration-300 ease-material group-hover:opacity-100"></span>
                    </Link>
                  </li>
                ))}
                <div className="flex items-center gap-3">
                  {Object.entries(SNS).map(([key, sns]) => (
                    <a key={key} href={sns.url} target={sns.blank ? "_blank" : "_self"} {...(sns.blank && { rel: "noopener noreferrer" })} aria-label={sns.label} className="group relative">
                      <span className="absolute left-[50%] top-[50%] h-6 w-6 translate-x-[-50%] translate-y-[-50%] rounded-md bg-[#E68282] opacity-0 transition-opacity duration-300 ease-material group-hover:opacity-100"></span>
                      <ReactSVG src={`/icons/${key}.svg`} className={cn(sns.size.base, "relative text-primary transition-opacity duration-300 ease-material group-hover:text-white")} />
                    </a>
                  ))}
                  <a href={CONTACT.mail.url} aria-label={CONTACT.mail.label} className="group relative">
                    <span className="absolute left-[50%] top-[50%] h-6 w-6 translate-x-[-50%] translate-y-[-50%] rounded-md bg-[#E68282] opacity-0 transition-opacity duration-300 ease-material group-hover:opacity-100"></span>
                    <ReactSVG src="/icons/mail.svg" className={cn(CONTACT.mail.size.base, "relative text-primary transition-opacity duration-300 ease-material group-hover:text-white")} />
                  </a>
                  <a href={RSS.url} target={RSS.blank ? "_blank" : "_self"} {...(RSS.blank && { rel: "noopener noreferrer" })} aria-label={RSS.label} className="group relative">
                    <span className="absolute left-[50%] top-[50%] h-6 w-6 translate-x-[-50%] translate-y-[-50%] rounded-md bg-[#E68282] opacity-0 transition-opacity duration-300 ease-material group-hover:opacity-100"></span>
                    <ReactSVG src="/icons/rss.svg" className={cn(RSS.size, "relative text-primary transition-opacity duration-300 ease-material group-hover:text-white")} />
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
                    <ul className="px-[30px] py-4">
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
                  <div className="px-[30px] pb-8">
                    <HeaderSearch />
                  </div>
                  <div className="flex items-center justify-center gap-5 bg-primary py-4">
                    {Object.entries(SNS).map(([key, sns]) => (
                      <a key={key} href={sns.url} target={sns.blank ? "_blank" : "_self"} {...(sns.blank && { rel: "noopener noreferrer" })} aria-label={sns.label} className="rounded-md bg-[#E68282] p-2">
                        <ReactSVG src={`/icons/${key}.svg`} className={cn(sns.size.base, "text-white")} />
                      </a>
                    ))}
                    <a href={CONTACT.mail.url} aria-label={CONTACT.mail.label} className="rounded-md bg-[#E68282] p-2">
                      <ReactSVG src="/icons/mail.svg" className={cn(CONTACT.mail.size.base, "text-white")} />
                    </a>
                    <a href={RSS.url} target={RSS.blank ? "_blank" : "_self"} {...(RSS.blank && { rel: "noopener noreferrer" })} aria-label={RSS.label} className="rounded-md bg-[#E68282] p-2">
                      <ReactSVG src="/icons/rss.svg" className={cn(RSS.size, "text-white")} />
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
