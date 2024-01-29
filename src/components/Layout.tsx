import { BaseHeader } from "./BaseHeader";
import { BaseFooter } from "./BaseFooter";
import { useHamburgerMenuContext } from "@/context/hamburgerMenu";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDevice } from "@/hooks/useDevice";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isSp } = useDevice();
  const router = useRouter();
  const { isMenuOpen, closeMenu } = useHamburgerMenuContext();

  // ページ遷移時にハンバーガーメニューを閉じる
  useEffect(() => {
    router.events.on("routeChangeStart", closeMenu);

    return () => {
      router.events.off("routeChangeStart", closeMenu);
    };
  }, [router, closeMenu]);

  // ハンバーガーメニューが開いているときはスクロール禁止
  useEffect(() => {
    if (isMenuOpen) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  }, [isMenuOpen]);

  // PC/SPで切り替えが発生した時に初期化処理を実行
  useEffect(() => {
    if (!isSp) {
      closeMenu();
      enableBodyScroll(document.body);
    }
  }, [isSp]);

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
