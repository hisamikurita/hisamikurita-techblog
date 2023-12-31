import { PageAbout } from "@/components/PageAbout";
import { getAbout } from "@/libs/microcms";

export const getStaticProps = async () => {
  const data = await getAbout();
  return { props: data };
};

const About = (data: any) => {
  return <PageAbout {...data} />;
};

export default About;
