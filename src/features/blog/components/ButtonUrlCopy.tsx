"use client";

import { ReactSVG } from "react-svg";
import { useState } from "react";

type Props = {
  url: string;
};

export const ButtonUrlCopy = ({ url }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`
        inline-flex items-center justify-center gap-2 rounded-lg p-2 font-semibold text-white transition-[transform,_shadow,_background-color] duration-300 ease-transform hover:-translate-y-[2px] hover:shadow-xl md:gap-1 lg:gap-2
        ${isCopied ? "bg-green-500" : "bg-gray-500"}
      `}
      aria-label={isCopied ? "URLをコピーしました" : "URLをコピーする"}
    >
      <span className="hidden md:block md:text-xs lg:text-base">{isCopied ? "コピーしました！" : "URLをコピーする"}</span>
      <ReactSVG src={isCopied ? "/icons/check.svg" : "/icons/copy.svg"} aria-hidden className="relative top-[1px] h-5 w-5" />
    </button>
  );
};
