import Image from "next/image";
import { BaseHead } from "../../components/BaseHead";
import { MicroCmsAboutDataType } from "@/types";
import { META_TITLE, META_DESCRIPTION } from "@/constants";
import { CfAwardHistoryDataType } from "@/types";
import { ReactSVG } from "react-svg";

export const PageAbout: React.FC<MicroCmsAboutDataType> = (data) => {
  const metaData = {
    title: META_TITLE,
    description: META_DESCRIPTION,
  };

  const { intro } = data;

  return (
    <>
      <BaseHead {...metaData} />
      <div className="pb-10 pt-[60px]">
        <div className="c-main-container">
          <div className="mt-8 rounded-xl bg-gray-100 px-5 py-4">{intro}</div>
          <div className="c-sub-container mt-10">
            <Image src="/ogp.jpg" alt="" width={1280} height={630} aria-hidden className="rounded-xl" />
            <p className="mt-10">このブログは東京で働くUIデザイナー + クリエイティブ・フロンエンドエンジニアのプライベートな情報発信ブログです。</p>
            <div className="mt-8">
              副業でWEBサイト等の制作も行なっているので、ご相談をご希望の方は、kuritahisami@gmail.com
              <a href="mailto:kuritahisami@gmail.com" className="relative top-[1px] mx-1 inline-flex border-b border-primary pb-[1px] text-primary">
                <ReactSVG src="/icons/mail.svg" aria-label="メールアプリを起動します" className="h-4 w-4" />
              </a>
              にご連絡ください。
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
