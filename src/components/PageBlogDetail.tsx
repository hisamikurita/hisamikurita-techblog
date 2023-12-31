import { MicroCmsBlogDetailDataType } from "@/libs/types";
import { Layout } from "@/components/Layout";

export const PageBlogDetail: React.FC<MicroCmsBlogDetailDataType> = (data) => {
  const { title, thumbnail, body } = data;

  return (
    <Layout>
      <div className="pb-[200px] pt-[60px]">
        <div className="custom-container">
          <h1 className="text-[24px] font-bold">{title}</h1>
          <div className="h-[320px]">
            <img src={`${thumbnail.url}?fm=webp&q=80`} alt="" width={thumbnail.width} height={thumbnail.height} decoding="async" />
          </div>
          <p className="text-[20px]">{body}</p>
        </div>
      </div>
    </Layout>
  );
};
