import { useEffect } from "react";

/**
 * メニューが開いているときにフォーカストラップを提供するカスタムフック
 * @param isOpen メニューが開いているかどうか
 * @param buttonSelector メニューボタンのセレクター
 * @param menuItemsSelector メニュー項目のセレクター
 */
export const useFocusTrap = (isOpen: boolean, buttonSelector: string = "[data-menu='hamburger']", menuItemsSelector: string = "[data-menu='sp']") => {
  useEffect(() => {
    const button: HTMLButtonElement | null = document.querySelector(buttonSelector);
    const menuItems: NodeListOf<HTMLElement> = document.querySelectorAll(menuItemsSelector);

    if (!button || menuItems.length === 0) return;

    // メニューが開いたときに最初のリンクにフォーカスを移す
    if (isOpen && menuItems[0]) menuItems[0].focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      const lastItem = menuItems[menuItems.length - 1];

      if (e.key === "Tab") {
        // 最後の項目でTabを押した場合、ボタンにフォーカスを移す
        if (!e.shiftKey && document.activeElement === lastItem) {
          e.preventDefault();
          button.focus();
        }
        // ボタンでShift+Tabを押した場合、最後の項目にフォーカスを移す
        else if (e.shiftKey && document.activeElement === button) {
          e.preventDefault();
          lastItem.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, buttonSelector, menuItemsSelector]);
};
