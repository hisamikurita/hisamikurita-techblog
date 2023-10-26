import { LayoutDefault } from "@/components/LayoutDefault";
import { PageAbout } from "@/components/PageAbout";
import { getAbout } from "@/libs/microcms-preview";
import { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const data = await getAbout();
      setData(data);
    })();
  }, []);

  return <PageAbout {...data} />;
};

About.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default About;
