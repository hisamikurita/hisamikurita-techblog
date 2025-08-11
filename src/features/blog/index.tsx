import { BaseHead } from "@/components/BaseHead";
import { MicroCmsBlogDetailDataType } from "@/types";
import { DateFormatter } from "@/components/DateFormatter";
import { META_DESCRIPTION, SITE_NAME } from "@/constants";
import { RichEditor } from "@/components/RichEditor";
import { parseToc } from "@/utils/parseToc";
import { ReactSVG } from "react-svg";
import { Toc } from "@/components/Toc";
import { CardProfile } from "@/components/CardProfile";
import { useDevice } from "@/hooks/useDevice";

export const PageBlogDetail: React.FC<MicroCmsBlogDetailDataType> = (data) => {
  const { isSp } = useDevice();
  const { title, thumbnail, body, excerpt, publishedAt, updatedAt } = data;

  const metaData = {
    title: `${title} | ${SITE_NAME}`,
    description: excerpt || META_DESCRIPTION,
    thumbnail: `${thumbnail?.url}?fm=webp&q=80`,
  };

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
                </div>
              </div>
            </div>
            <div>
              <CardProfile />
              {!isSp && (
                <div className="sticky top-[84px] mt-8 hidden md:block">
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
