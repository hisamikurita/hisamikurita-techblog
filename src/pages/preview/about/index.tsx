import { PageAbout } from "@/features/about";
import { getAbout } from "@/libs/microcms";
import { getDraftKey } from "@/utils/parameters";
import { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      // 下書き用のパラメーターがある場合は取得して、APIリクエストを行う
      const requestUrl = window.location.href;
      const draftKey = getDraftKey(requestUrl);
      const data = await getAbout({ draftKey }, true);
      setData(data);
    })();
  }, []);

  return <PageAbout {...data} />;
};

export default About;
