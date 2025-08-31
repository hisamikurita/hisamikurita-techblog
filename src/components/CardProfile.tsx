import { SNS } from "@/constants";
import { cn } from "@/libs/tailwindMerge";
import Image from "next/image";
import { ReactSVG } from "react-svg";

type Props = {
  className?: string;
};

export const CardProfile = ({ className }: Props) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="rounded-t-xl border border-b-0 border-gray-400 p-6">
        <Image src="/images/me.png" alt="" width={240} height={240} className="mx-auto h-20 w-20 rounded-full border border-gray-400 object-cover" />
        <h2 className="mt-2 text-center text-sm font-semibold">くりちゃん</h2>
        <p className="mt-4 text-[13px] text-gray-700">
          東京で働くUIデザイナー + クリエイティブ・フロンエンドエンジニア。
          <br />
          プログラミングが好きで休みの日もコードを書いて、モノづくりを楽しんでいる。文章を書くのは苦手。
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 rounded-b-xl bg-primary py-4">
        <div className="flex shrink-0 items-center gap-2">
          <p className="font-roboto font-bold text-white">FOLLOW</p>
          <ReactSVG src="/icons/chevron-right.svg" aria-hidden />
        </div>
        <div className="flex items-center gap-3">
          {Object.entries(SNS).map(([key, sns]) => (
            <a key={key} href={sns.url} target={sns.blank ? "_blank" : "_self"} {...(sns.blank && { rel: "noopener noreferrer" })} aria-label={sns.label} className="rounded-md bg-[#E68282] p-2 transition-transform duration-300 ease-transform hover:scale-[1.06]">
              <ReactSVG src={`/icons/${key}.svg`} className={cn(sns.size.base, "text-white")} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
