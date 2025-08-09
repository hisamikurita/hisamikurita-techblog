import { Card } from "@/components/Card";
import { BaseHead } from "@/components/BaseHead";
import { META_TITLE, META_DESCRIPTION } from "@/constants";
import { Layout } from "@/components/Layout";
import { Article } from "@/types";
import LottieReact from "lottie-react";
import Wave from "../../../public/lottie/wave.json";

export const PageIndex = ({ data }: { data: Article[] }) => {
  const metaData = {
    title: META_TITLE,
    description: META_DESCRIPTION,
  };

  return (
    <Layout>
      <BaseHead {...metaData} />
      <div className="pb-10 pt-[60px]">
        <div className="c-main-container">
          <div className="mt-8 flex items-center rounded-xl bg-gray-100 px-5 py-4">
            ようこそ。UIデザイナー + クリエイティブ・フロンエンドエンジニアのプライベートなブログです。
            <LottieReact animationData={Wave} loop={true} autoplay={true} aria-hidden className="w-[22px]" />
          </div>
          <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {data &&
              data.map((article: Article) => (
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
