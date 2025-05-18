import { useEffect, useState, useCallback } from "react";
import { HamburgerMenuContext } from "@/context/hamburgerMenu";
import { useRouter } from "next/router";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useDevice } from "@/hooks/useDevice";

type HamburgerMenuProviderProps = {
  children: React.ReactNode;
};

export const HamburgerMenuProvider: React.FC<HamburgerMenuProviderProps> = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { isSp } = useDevice();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // ページ遷移時にメニューを閉じる
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
  }, [isSp, closeMenu]);

  const value = {
    isMenuOpen,
    toggleMenu,
    closeMenu,
  };

  return <HamburgerMenuContext.Provider value={value}>{children}</HamburgerMenuContext.Provider>;
};
