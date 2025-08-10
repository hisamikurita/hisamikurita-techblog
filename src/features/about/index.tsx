import Image from "next/image";
import { BaseHead } from "../../components/BaseHead";
import { MicroCmsAboutDataType } from "@/types";
import { META_TITLE, META_DESCRIPTION } from "@/constants";
import { ReactSVG } from "react-svg";
import { Tabs } from "radix-ui";
import LottieReact from "lottie-react";
import Trophy from "../../../public/lottie/trophy.json";
import GoldMedal from "../../../public/lottie/gold-medal.json";

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
            <div className="mt-10 rounded-xl bg-gray-100 p-4  md:px-6 md:py-5">
              <Tabs.Root className="flex w-full flex-col overflow-hidden rounded-lg" defaultValue="awards">
                <Tabs.List className="flex shrink-0 gap-2 border-b border-gray-100 md:gap-3">
                  <Tabs.Trigger className="flex h-[45px] flex-1 items-center justify-center gap-1 rounded-tr-lg bg-white px-5 data-[state=active]:text-primary data-[state=active]:underline" value="awards">
                    受賞歴
                  </Tabs.Trigger>
                  <Tabs.Trigger className="flex h-[45px] flex-1 items-center justify-center gap-1 rounded-tl-lg bg-white px-5 data-[state=active]:text-primary data-[state=active]:underline" value="career">
                    経歴
                  </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content className="bg-white p-4 md:p-5" value="awards">
                  <ul className="grid gap-4">
                    <li className="flex items-center gap-3 md:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-gray-100 md:h-[66px] md:w-[66px]">
                        <LottieReact animationData={GoldMedal} loop={true} autoplay={true} aria-hidden className="w-6 md:w-11" />
                      </div>
                      <a href="https://www.awwwards.com/sites/hisami-kurita-portfolio" target="_blank" rel="noopener noreferrer" className="font-roboto text-sm font-semibold tracking-wide text-primary underline md:text-2xl">
                        HISAMI KURITA PORTFOLIO Awwwards Site of the Day.
                      </a>
                    </li>
                    <li className="flex items-center gap-3 md:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-gray-100 md:h-[66px] md:w-[66px]">
                        <LottieReact animationData={Trophy} loop={true} autoplay={true} aria-hidden className="w-5 md:w-9" />
                      </div>
                      <p className="font-roboto text-sm font-semibold tracking-wide md:text-2xl">Awwwards Nominated for DEVELOPER OF THE YEAR 2022.</p>
                    </li>
                  </ul>
                </Tabs.Content>
                <Tabs.Content className="bg-white p-4 md:p-5" value="career">
                  <ul className="grid gap-4">
                    <li className="flex items-center gap-3 text-xs md:gap-4 md:text-base">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-gray-100 md:h-12 md:w-12">
                        <span className="relative left-[1px] top-[-2px]">🏢</span>
                      </div>
                      2018年〜2020年 WEB制作会社 マークアップエンジニア
                    </li>
                    <li className="flex items-center gap-3 text-xs md:gap-4 md:text-base">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-gray-100 md:h-12 md:w-12">
                        <span className="relative left-[1px] top-[-2px]">🏢</span>
                      </div>
                      2020年〜2024年 株式会社LIG フロントエンドエンジニア
                    </li>
                    <li className="flex items-center gap-3 text-xs md:gap-4 md:text-base">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-gray-100 md:h-12 md:w-12">
                        <span className="relative left-[1px] top-[-2px]">🏢</span>
                      </div>
                      2024年〜 システム開発会社 フロントエンドエンジニア
                    </li>
                  </ul>
                </Tabs.Content>
              </Tabs.Root>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
