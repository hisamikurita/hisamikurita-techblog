import { PageIndex } from "@/features/index";
import { getBlogList as getMicrocmsBlogList } from "@/libs/microcms";
import { Article } from "@/types";

export const getStaticProps = async () => {
  const data = await getMicrocmsBlogList();
  const articles = data.contents;

  return { props: { data: articles } };
};

const Index = ({ data }: { data: Article[] }) => {
  return <PageIndex data={data} />;
};

export default Index;
