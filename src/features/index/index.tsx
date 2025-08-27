import { CardArticle } from "@/components/CardArticle";
import { BaseHead } from "@/components/BaseHead";
import { META_TITLE, META_DESCRIPTION, ADSENSE } from "@/constants";
import { Article } from "@/types";
import LottieReact from "lottie-react";
import Wave from "../../../public/lottie/wave.json";
import { CardAdSense } from "@/components/CardAdSense";
import { Fragment } from "react";

export const PageIndex = ({ data }: { data: Article[] }) => {
  const metaData = {
    title: META_TITLE,
    description: META_DESCRIPTION,
  };

  return (
    <>
      <BaseHead {...metaData} />
      <div className="pb-10 pt-[60px]">
        <div className="c-main-container">
          <div className="mt-8 rounded-xl bg-gray-100 px-5 py-4">
            ようこそ。UIデザイナー + クリエイティブ・フロンエンドエンジニアのプライベートなブログです。
            <LottieReact animationData={Wave} loop={true} autoplay={true} aria-hidden className="relative top-1 inline-block w-[22px]" />
          </div>
          {data.length > 0 && (
            <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {data.map((article: Article, index) => (
                <Fragment key={article.id}>
                  {index === 6 && (
                    <li className="overflow-hidden rounded-lg border-4 border-gray-300">
                      <CardAdSense className="block h-full w-full" googleAdsensePublisherId={ADSENSE.googleAdsensePublisherId} adSlot={ADSENSE.adSlot[0]} />
                    </li>
                  )}
                  <li>
                    <CardArticle {...article} />
                  </li>
                </Fragment>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
