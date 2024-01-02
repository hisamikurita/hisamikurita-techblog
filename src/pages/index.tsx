import { PageIndex } from "@/components/PageIndex";
import { getBlogList } from "@/libs/microcms";
import { MicroCmsBlogDataType } from "@/libs/types";

export const getStaticProps = async () => {
  const data = await getBlogList();
  return { props: data };
};

const Index = (data: MicroCmsBlogDataType) => {
  return <PageIndex {...data} />;
};

export default Index;
