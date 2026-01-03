import { useEffect } from "react";

export const useCodeCopy = (body?: string) => {
  useEffect(() => {
    const handleCopyClick = async (e: Event) => {
      const button = e.currentTarget as HTMLButtonElement;
      const code = button.getAttribute("data-code");

      if (!code) return;

      // エンコードされた文字を戻す
      const decodedCode = code
        .replace(/&quot;/g, '"')
        .replace(/&#10;/g, "\n")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&");

      await navigator.clipboard.writeText(decodedCode);

      // コピー完了のフィードバック
      button.classList.add("copied");
      const originalHTML = button.innerHTML;
      button.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;

      setTimeout(() => {
        button.classList.remove("copied");
        button.innerHTML = originalHTML;
      }, 2000);
    };

    // イベントリスナーを追加
    const buttons = document.querySelectorAll(".copy-code-button");
    buttons.forEach((button) => {
      button.addEventListener("click", handleCopyClick);
    });

    // クリーンアップ
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleCopyClick);
      });
    };
  }, [body]);
};
