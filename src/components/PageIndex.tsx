import Image from "next/image";
import { Card } from "@/components/Card";
import { MicroCmsBlogDataType, MicroCmsBlogDetailDataType } from "@/libs/types";
import { BaseHead } from "./BaseHead";
import { SITE_DESCRIPTION, SITE_NAME } from "@/libs/constants";
import { Layout } from "@/components/Layout";

export const PageIndex: React.FC<MicroCmsBlogDataType> = (data) => {
  const metaData = {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  };
  const articles = data.contents;

  return (
    <Layout>
      <BaseHead {...metaData} />
      <div className="pb-[120px] pt-[60px]">
        <div className="h-[200px] md:h-[260px] xl:h-[320px]">
          <Image src="/images/thumbnail-mv.jpg" alt="" width={2688} height={1536} className="h-full w-full object-cover" />
        </div>
        <div className="custom-main-container">
          <h1 className="mt-[100px] font-roboto text-[24px] font-bold">BLOG</h1>
          <ul className="mt-[100px] grid gap-[42px] md:grid-cols-2 xl:grid-cols-3">
            {articles &&
              articles.map((article: MicroCmsBlogDetailDataType) => (
                <li key={article.id}>
                  <Card {...article} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};
