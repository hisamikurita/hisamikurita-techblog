import { PageIndex } from "@/components/PageIndex";
import { getBlog } from "@/libs/microcms";

export const getStaticProps = async () => {
  const data = await getBlog();
  return { props: data };
};

const Index = (data: any) => {
  return <PageIndex {...data} />;
};

export default Index;
