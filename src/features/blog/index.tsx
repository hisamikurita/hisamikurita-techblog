import { BaseHead } from "@/components/BaseHead";
import { MicroCmsBlogDetailDataType } from "@/types";
import { DateFormatter } from "@/components/DateFormatter";
import { META_DESCRIPTION, SITE_NAME } from "@/constants";
import { RichEditor } from "@/components/RichEditor";
import { parseToc } from "@/utils/parseToc";
import { ReactSVG } from "react-svg";

export const PageBlogDetail: React.FC<MicroCmsBlogDetailDataType> = (data) => {
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
          <h1 className="mt-8 rounded-xl bg-gray-100 px-5 py-4 text-xl font-bold">{title}</h1>
          <div className="mt-4 grid gap-2 md:flex md:gap-3">
            <div className="flex items-center gap-2">
              <ReactSVG src="/icons/calender.svg" aria-hidden className="h-[13px] w-[13px] text-gray-400" />
              <DateFormatter date={publishedAt} />
            </div>
            <div className="flex items-center gap-2">
              <ReactSVG src="/icons/update.svg" aria-hidden className="h-[14px] w-[14px] -rotate-45 text-gray-400" />
              <DateFormatter date={updatedAt} />
            </div>
          </div>
          <div className="c-sub-container">
            <div className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-xl border border-gray-300">
              <img src={`${thumbnail?.url}?fm=webp&q=80`} alt="" width={thumbnail?.width} height={thumbnail?.height} decoding="async" className="h-full w-full object-cover" />
            </div>
            <div className="custom-editor-container">
              <div className="mt-10 rounded-xl bg-gray-100 px-5 py-4">
                <h2 className="text-lg font-bold">目次</h2>
                <ul className="mt-3 grid gap-2">
                  {tocData &&
                    tocData.map((data) => (
                      <li key={data.id} className="text-sm">
                        <a href={`#${data.id}`}>
                          <span></span>
                          {data.title}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="mt-13">
                <RichEditor body={body} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
