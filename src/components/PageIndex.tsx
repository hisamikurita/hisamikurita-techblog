import { Card } from "@/components/Card";
import { MicroCmsDataType } from "@/libs/types";

export const PageIndex: React.FC<MicroCmsDataType> = (data) => {
  const articles = data.contents || [];

  return (
    <div className="pt-[60px] pb-[200px]">
      <div className="h-[320px]">
        <img
          src="/images/thumbnail-mv.jpg"
          alt=""
          width={2688}
          height={1536}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="custom-container">
        <p className="mt-[100px] font-bold text-[24px]">BLOG</p>
        <ul className="mt-[100px] grid grid-cols-3 gap-[42px]">
          {articles.map((article: any) => (
            <li key={article.id}>
              <Card article={article} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
