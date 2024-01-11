import { BaseHead } from "./BaseHead";
import { MicroCmsBlogDetailDataType } from "@/libs/types";
import { Layout } from "@/components/Layout";
import { DateFormatter } from "@/components/DateFormatter";
import { SITE_DESCRIPTION, SITE_NAME } from "@/libs/constants";

export const PageBlogDetail: React.FC<MicroCmsBlogDetailDataType> = (data) => {
  const { title, thumbnail, body, excerpt, publishedAt, revisedAt } = data;

  const metaData = {
    title: `${SITE_NAME} | ${title}`,
    description: excerpt || SITE_DESCRIPTION,
    thumbnail: `${thumbnail?.url}?fm=webp&q=80`,
  };

  return (
    <Layout>
      <BaseHead {...metaData} />
      <div className="pb-[120px] pt-[60px]">
        <div className="h-[200px] md:h-[260px] xl:h-[320px]">
          <img src={`${thumbnail?.url}?fm=webp&q=80`} alt="" width={thumbnail?.width} height={thumbnail?.height} decoding="async" className="h-full w-full object-cover" />
        </div>
        <div className="custom-editor-container">
          <h1 className="mt-[100px] text-[24px] font-bold">{title}</h1>
          <div>
            <DateFormatter date={publishedAt} />
          </div>
          <div className="editor">
            <div className="mt-[90px]" dangerouslySetInnerHTML={{ __html: body || "" }}></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
