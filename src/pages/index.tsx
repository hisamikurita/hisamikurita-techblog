import { SOURCE } from "@/constants";
import { PageIndex } from "@/features/index";
import { getBlogList as getMicrocmsBlogList } from "@/libs/microcms";
import { getBlogList as getZennBlogList } from "@/libs/zenn";
import { Article } from "@/types";

export const getStaticProps = async () => {
  const zennData = await getZennBlogList();
  const microcmsData = await getMicrocmsBlogList();

  const allData: Article[] = [
    ...(microcmsData.contents?.map((article) => ({
      ...article,
      source: SOURCE.MICROCMS,
    })) || []),
    ...(zennData.articles?.map((article) => ({
      ...article,
      publishedAt: article.published_at,
      source: SOURCE.ZENN,
    })) || []),
  ];

  const sortedAllData = allData.sort((a, b) => {
    const dateA = new Date(a.publishedAt || "").getTime();
    const dateB = new Date(b.publishedAt || "").getTime();
    return dateB - dateA;
  });

  return { props: { data: sortedAllData } };
};

const Index = ({ data }: { data: Article[] }) => {
  return <PageIndex data={data} />;
};

export default Index;
