import { LayoutDefault } from "@/components/LayoutDefault";
import type { NextPageWithLayout } from "./_app";
import { PageAbout } from "@/components/PageAbout";

const About: NextPageWithLayout = () => <PageAbout />;

About.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default About;
