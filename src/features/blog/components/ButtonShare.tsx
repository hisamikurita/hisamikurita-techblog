import { ReactSVG } from "react-svg";

type Props = {
  variant: "x" | "fb" | "hatena";
  url: string;
  title?: string;
};

export const ButtonShare = ({ variant, url, title = "" }: Props) => {
  const shareConfig = {
    x: {
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      label: "Share on",
      icon: <ReactSVG src="/icons/x.svg" aria-label="Xを新規タブで開きます" className="relative top-[0.5px] h-[16px] w-[16px]" />,
      style: "bg-black text-white",
    },
    fb: {
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      label: "Share on",
      icon: <ReactSVG src="/icons/fb.svg" aria-label="FaceBookを新規タブで開きます" className="h-5 w-5" />,
      style: "bg-blue-600 text-white",
    },
    hatena: {
      href: `https://b.hatena.ne.jp/entry/panel/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      label: "はてブに追加",
      icon: <ReactSVG src="/icons/hatena.svg" aria-label="はてなブックマークに追加" className="relative top-[0.6px] h-5 w-5" />,
      style: "bg-[#00B1DE] text-white",
    },
  };

  const config = shareConfig[variant];

  return (
    <a
      href={config.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        transition-[transform, shadow] inline-flex items-center justify-center gap-2  rounded-lg p-2 font-semibold duration-300 ease-transform hover:-translate-y-[2px] hover:shadow-xl md:gap-1 lg:gap-2
        ${config.style}
      `}
    >
      <span className="hidden md:block md:text-xs lg:text-base">{config.label}</span>
      {config.icon}
    </a>
  );
};
