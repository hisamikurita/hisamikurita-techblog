import { BaseHead } from "@/components/BaseHead";
import { MicroCmsBlogDetailDataType } from "@/types";
import { DateFormatter } from "@/components/DateFormatter";
import { META_DESCRIPTION, SITE_NAME } from "@/constants";
import { RichEditor } from "@/components/RichEditor";
import { parseToc } from "@/utils/parseToc";

export const PageBlogDetail: React.FC<MicroCmsBlogDetailDataType> = (data) => {
  const { title, thumbnail, body, excerpt, publishedAt, updatedAt } = data;

  const metaData = {
    title: `${SITE_NAME} | ${title}`,
    description: excerpt || META_DESCRIPTION,
    thumbnail: `${thumbnail?.url}?fm=webp&q=80`,
  };

  const tocData = parseToc({ body });

  return (
    <>
      <BaseHead {...metaData} />
      <div className="pb-[120px] pt-[60px]">
        <div className="h-[200px] md:h-[260px] xl:h-[320px]">
          <img src={`${thumbnail?.url}?fm=webp&q=80`} alt="" width={thumbnail?.width} height={thumbnail?.height} decoding="async" className="h-full w-full object-cover" />
        </div>
        <div className="custom-editor-container">
          <h1 className="mt-[100px] text-[24px] font-bold">{title}</h1>
          <div className="mt-[16px] grid gap-[8px] md:flex md:gap-[30px]">
            <div>
              公開日 : <DateFormatter date={publishedAt} />
            </div>
            <div>
              更新日 : <DateFormatter date={updatedAt} />
            </div>
          </div>
          <div className="mt-[82px] bg-[#f5f5f5] p-[20px]">
            <h2 className="text-[18px] font-bold">目次</h2>
            <ul className="mt-[16px] grid gap-[6px]">
              {tocData &&
                tocData.map((data) => (
                  <li key={data.id} className="text-[14px] opacity-[0.8]">
                    <a href={`#${data.id}`}>
                      <span></span>
                      {data.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="mt-[76px]">
            <RichEditor body={body} />
          </div>
        </div>
      </div>
    </>
  );
};
