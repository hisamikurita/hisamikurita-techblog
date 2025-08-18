import { BaseHead } from "@/components/BaseHead";
import { Article, MicroCmsBlogDetailDataType } from "@/types";
import { DateFormatter } from "@/components/DateFormatter";
import { ADSENSE, META_DESCRIPTION, SITE_NAME } from "@/constants";
import { RichEditor } from "@/features/blog/components/RichEditor";
import { parseToc } from "@/utils/parseToc";
import { ReactSVG } from "react-svg";
import { Toc } from "@/features/blog/components/Toc";
import { CardProfile } from "@/components/CardProfile";
import { useDevice } from "@/hooks/useDevice";
import { ButtonShare } from "@/features/blog/components/ButtonShare";
import LottieReact from "lottie-react";
import HeartFace from "../../../public/lottie/heart-face.json";
import { CardAdSense } from "@/components/CardAdSense";
import { CardArticle } from "@/components/CardArticle";

export const PageBlogDetail: React.FC<MicroCmsBlogDetailDataType> = (data) => {
  const { isSp } = useDevice();
  const { title, thumbnail, body, excerpt, publishedAt, updatedAt, relatedArticles } = data;

  const metaData = {
    title: `${title} | ${SITE_NAME}`,
    description: excerpt || META_DESCRIPTION,
    thumbnail: `${thumbnail?.url}?fm=webp&q=80`,
  };

  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${data.id}`;

  const tocData = parseToc({ body });

  return (
    <>
      <BaseHead {...metaData} />
      <div className="pb-10 pt-[60px]">
        <div className="c-main-container">
          <h1 className="mt-8 rounded-xl bg-gray-100 px-5 py-4 text-[22px] font-bold">{title}</h1>
          <div className="mt-4 flex flex-wrap gap-2 md:gap-3">
            <div className="flex items-center gap-2">
              <ReactSVG src="/icons/calender.svg" aria-hidden className="h-[13px] w-[13px] text-gray-400" />
              <DateFormatter date={publishedAt} />
            </div>
            <div className="flex items-center gap-2">
              <ReactSVG src="/icons/update.svg" aria-hidden className="h-[14px] w-[14px] -rotate-45 text-gray-400" />
              <DateFormatter date={updatedAt} />
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-6 lg:gap-10">
            {/* 1 ~ 2 列目 */}
            <div className="c-sub-container md:col-span-2">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-gray-300">
                <img src={`${thumbnail?.url}?fm=webp&q=80`} alt="" width={thumbnail?.width} height={thumbnail?.height} decoding="async" className="h-full w-full object-cover" />
              </div>
              <div className="custom-editor-container">
                {isSp && (
                  <div className="mt-8 block md:hidden">
                    <Toc toc={tocData} />
                  </div>
                )}
                <div className="mt-13">
                  <RichEditor body={body} />
                  <div className="mt-12 rounded-xl border-dashed  border-primary bg-gray-100 p-4">
                    <div className="flex items-center justify-center gap-2">
                      この記事をシェアする
                      <LottieReact animationData={HeartFace} loop={true} autoplay={true} aria-hidden className="relative top-[0.8px] w-6" />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <ButtonShare variant="x" url={currentUrl} title={title} />
                      <ButtonShare variant="fb" url={currentUrl} title={title} />
                      <ButtonShare variant="hatena" url={currentUrl} title={title} />
                    </div>
                  </div>
                  <CardAdSense className="mt-12 block w-full" googleAdsensePublisherId={ADSENSE.googleAdsensePublisherId} adFormat="autorelaxed" adSlot={ADSENSE.adSlot[2]} />
                  {relatedArticles && (
                    <div className="mt-12">
                      <div className="flex items-center gap-2 border-b border-primary pb-2 text-lg font-bold text-primary">
                        <div className="flex items-center justify-center rounded-full bg-primary p-2">
                          <ReactSVG src="/icons/note.svg" aria-hidden className="relative top-[-0.1px] h-4 w-4 text-white" />
                        </div>
                        あわせて読みたい
                      </div>
                      <ul className="mt-8 grid grid-cols-2 gap-5">
                        {relatedArticles?.map((article: Article) => (
                          <li key={article.id}>
                            <CardArticle {...article} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* 3 列目 */}
            <div className="flex flex-col gap-8">
              <CardProfile />
              <div>
                <h2 className="border-b border-primary pb-1 text-lg">PR</h2>
                <CardAdSense className="mt-4 block aspect-[16/9] w-full" googleAdsensePublisherId={ADSENSE.googleAdsensePublisherId} adSlot={ADSENSE.adSlot[0]} />
              </div>
              {!isSp && (
                <div className="sticky top-[84px] hidden md:block">
                  <Toc toc={tocData} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
