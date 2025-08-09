import { SOURCE } from "@/constants";
import { PageIndex } from "@/features/index";
import { getBlogList } from "@/libs/microcms";
import { Article } from "@/types";
import { getDraftKey } from "@/utils/parameters";
import { useEffect, useState } from "react";

const Index = () => {
  const [data, setData] = useState([] as Article[]);

  useEffect(() => {
    (async () => {
      // 下書き用のパラメーターがある場合は取得して、APIリクエストを行う
      const requestUrl = window.location.href;
      const draftKey = getDraftKey(requestUrl);
      const microcmsData = await getBlogList({ draftKey }, true);

      const allData: Article[] = [
        ...(microcmsData.contents?.map((article) => ({
          ...article,
          source: SOURCE.MICROCMS,
        })) || []),
      ];

      setData(allData);
    })();
  }, []);

  return <PageIndex data={data} />;
};

export default Index;
