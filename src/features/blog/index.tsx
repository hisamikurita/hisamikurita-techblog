import { BaseHead } from "@/components/BaseHead";
import { MicroCmsBlogDetailDataType } from "@/types";
import { DateFormatter } from "@/components/DateFormatter";
import { ADSENSE, ANIMATED_EMOJI, CATEGORY, META_DESCRIPTION, SITE_NAME } from "@/constants";
import { parseToc } from "@/utils/parseToc";
import { ReactSVG } from "react-svg";
import { Toc } from "@/features/blog/components/Toc";
import { CardProfile } from "@/components/CardProfile";
import { useDevice } from "@/hooks/useDevice";
import { CardAdSense } from "@/components/CardAdSense";
import { ContentsRelatedArticles } from "./components/ContentsRelatedArticles";
import { ContentsShare } from "./components/ContentsShare";
import { RichEditor } from "./components/RichEditor";

export const PageBlogDetail = (data: MicroCmsBlogDetailDataType) => {
  const { isSp } = useDevice();
  const { title, thumbnail, body, excerpt, publishedAt, updatedAt, relatedArticles } = data;

  const metaData = {
    title: `${title} | ${SITE_NAME}`,
    description: excerpt || META_DESCRIPTION,
    thumbnail: `${thumbnail?.url}?fm=webp&q=80`,
  };

  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}blog/${data.id}`;
  const tocData = parseToc({ body });

  return (
    <>
      <BaseHead {...metaData} />
      <div className="pb-10 pt-[60px]">
        <div className="c-main-container">
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-6 lg:gap-10">
            {/* 1 ~ 2 列目 */}
            <div className="c-sub-container md:col-span-2">
              <div>
                <h1 className="text-[24px]">{title}</h1>
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
              </div>
              <div className="mt-10 aspect-[1200/630] w-full overflow-hidden rounded-xl">
                <img src={`${thumbnail?.url}?fm=webp&q=80`} alt="" width={thumbnail?.width} height={thumbnail?.height} decoding="async" className="h-full w-full object-cover" />
              </div>
              <div className="custom-editor-container">
                {isSp && (
                  <div className="mt-8 block md:hidden">
                    <Toc toc={tocData} />
                  </div>
                )}
              </div>
              <RichEditor body={body} />
            </div>
            {/* 3 列目 */}
            <div className="flex flex-col gap-8">
              {isSp && <ContentsShare currentUrl={currentUrl} title={title || ""} />}
              <CardProfile />
              <div>
                <h2 className="border-b border-primary pb-1 text-lg">PR</h2>
                <CardAdSense className="mt-4 block aspect-[16/9] w-full" googleAdsensePublisherId={ADSENSE.googleAdsensePublisherId} adSlot={ADSENSE.adSlot[0]} />
              </div>
              {!isSp && (
                <div className="sticky top-[84px] mb-7 hidden md:block">
                  <Toc toc={tocData} />
                </div>
              )}
            </div>
          </div>
          <div className="mt-13">
            {!isSp && <ContentsShare currentUrl={currentUrl} title={title || ""} className="mt-12" />}
            <CardAdSense className="mt-12 block w-full" googleAdsensePublisherId={ADSENSE.googleAdsensePublisherId} adFormat="autorelaxed" adSlot={ADSENSE.adSlot[2]} />
            <ContentsRelatedArticles relatedArticles={relatedArticles} />
          </div>
        </div>
      </div>
    </>
  );
};
