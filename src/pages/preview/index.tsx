import { PageIndex } from "@/components/PageIndex";
import { getBlog } from "@/libs/microcms";
import { getDraftKey } from "@/utils/parameters";
import { useEffect, useState } from "react";

const Index = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      // 下書き用のパラメーターがある場合は取得して、APIリクエストを行う
      const requestUrl = window.location.href;
      const draftKey = getDraftKey(requestUrl);
      const data = await getBlog({ draftKey }, true);
      setData(data);
    })();
  }, []);

  return <PageIndex {...data} />;
};

export default Index;
