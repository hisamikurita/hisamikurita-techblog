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
      <div className="flex items-center justify-center gap-5 rounded-b-xl bg-primary py-5">
        <a href="https://twitter.com/kurichans_1996" target="_blank" rel="noopener noreferrer">
          <ReactSVG src="/icons/x.svg" aria-label="Xを新規タブで開きます" className="h-[18px] w-[18px] text-white" />
        </a>
        <a href="https://github.com/hisamikurita" target="_blank" rel="noopener noreferrer">
          <ReactSVG src="/icons/github.svg" aria-label="Githubを新規タブで開きます" className="h-5 w-5 text-white" />
        </a>
        <a href="mailto:kuritahisami@gmail.com">
          <ReactSVG src="/icons/mail.svg" aria-label="メールアプリを起動します" className="h-5 w-5 text-white" />
        </a>
      </div>
    </div>
  );
};
