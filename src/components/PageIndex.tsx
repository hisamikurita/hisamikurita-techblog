import Image from "next/image";
import { Card } from "@/components/Card";
import { MicroCmsBlogDataType } from "@/libs/types";
import { BaseHead } from "./BaseHead";
import { SITE_DESCRIPTION, SITE_NAME } from "@/libs/constants";

export const PageIndex: React.FC<MicroCmsBlogDataType> = (data) => {
  const metaData = {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  };
  const articles = data.contents || [];

  return (
    <>
      <BaseHead {...metaData} />
      <div className="pb-[200px] pt-[60px]">
        <div className="h-[320px]">
          <Image src="/images/thumbnail-mv.jpg" alt="" width={2688} height={1536} className="h-full w-full object-cover" />
        </div>
        <div className="custom-container">
          <p className="mt-[100px] text-[24px] font-bold">BLOG</p>
          <ul className="mt-[100px] grid grid-cols-3 gap-[42px]">
            {articles.map((article: any) => (
              <li key={article.id}>
                <Card article={article} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
