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
import { ButtonShare } from "@/components/ButtonShare";
import LottieReact from "lottie-react";
import HeartFace from "../../../public/lottie/heart-face.json";

export const PageBlogDetail: React.FC<MicroCmsBlogDetailDataType> = (data) => {
  const { isSp } = useDevice();
  const { title, thumbnail, body, excerpt, publishedAt, updatedAt } = data;

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
          <div className="grid grid-cols-3">
            <div className="c-sub-container col-span-3 md:col-span-2">
              <div className="mt-16 rounded-xl border-dashed  border-primary bg-gray-100 p-4">
                <p className="flex items-center justify-center gap-2">
                  この記事をシェアする
                  <LottieReact animationData={HeartFace} loop={true} autoplay={true} aria-hidden className="relative top-[0.8px] w-6" />
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <ButtonShare variant="x" url={currentUrl} title={title} />
                  <ButtonShare variant="fb" url={currentUrl} title={title} />
                  <ButtonShare variant="hatena" url={currentUrl} title={title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
