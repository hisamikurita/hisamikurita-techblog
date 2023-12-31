import { Roboto_Condensed } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";

export const NotoSansJp = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const RobotoCondensed = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-condensed",
});
