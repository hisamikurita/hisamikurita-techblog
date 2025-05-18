import { PageAbout } from "@/features/about";
import { getAbout } from "@/libs/microcms";
import { MicroCmsAboutDataType } from "@/types";

export const getStaticProps = async () => {
  const data = await getAbout();
  return { props: data };
};

const About = (data: MicroCmsAboutDataType) => {
  return <PageAbout {...data} />;
};

export default About;
