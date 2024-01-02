import { PageAbout } from "@/components/PageAbout";
import { getAbout } from "@/libs/microcms";
import { MicroCmsAboutDataType } from "@/libs/types";

export const getStaticProps = async () => {
  const data = await getAbout();
  return { props: data };
};

const About = (data: MicroCmsAboutDataType) => {
  return <PageAbout {...data} />;
};

export default About;
