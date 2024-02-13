import Link from "next/link";
import { URL_HOME, MENUS } from "@/libs/constants";
import { useDevice } from "@/hooks/useDevice";
import { HamburgerMenuIcon, Cross1Icon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useHamburgerMenuContext } from "@/context/hamburgerMenu";
import { useEffect } from "react";

export const BaseHeader = () => {
  const { isSp } = useDevice();
  const { isMenuOpen, toggleMenu } = useHamburgerMenuContext();

  /**
   * メニューが開いているときにメニュー内を tab or shift + tab キーでフォーカスが移動するようにする
   * => フォーカストラップ対応
   */
  useEffect(() => {
    const button: HTMLButtonElement = document.querySelector("[data-menu='hamburger']")!;
    const menusSp: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("[data-menu='sp']");

    if (isMenuOpen) menusSp[0].focus(); // メニューが開いたときに最初のリンクにフォーカスを移す

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab" && e.shiftKey === false && menusSp[menusSp.length - 1] === document.activeElement && isMenuOpen) {
        // メニューの最後のリンクにフォーカスがあるときに tab キーを押したら
        // メニューのボタンにフォーカスを移す
        e.preventDefault();
        button.focus();
      } else if (e.key === "Tab" && e.shiftKey && button === document.activeElement && isMenuOpen) {
        // メニューのボタンにフォーカスがあるときに shift + tab キーを押したら
        // メニューの最後のリンクにフォーカスを移す
        e.preventDefault();
        menusSp[menusSp.length - 1].focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className={`fixed z-10 flex h-[60px] w-full items-center bg-white ${isMenuOpen ? "border-b-[1px]" : ""}`}>
      <div className="custom-main-container">
        <div className="flex items-center justify-between">
          <p {...(isMenuOpen ? { inert: "" } : "")}>
            <Link href={URL_HOME}>HSMKRT</Link>
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
