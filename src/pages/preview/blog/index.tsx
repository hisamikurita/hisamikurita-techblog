import { PageBlogDetail } from "@/components/PageBlogDetail";
import { getBlogDetail } from "@/libs/microcms";
import { getContentId, getDraftKey } from "@/utils/parameters";
import { useEffect, useState } from "react";

const BlogDetail = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      // 下書き用のパラメーターがある場合は取得して、APIリクエストを行う
      const requestUrl = window.location.href;
      const draftKey = getDraftKey(requestUrl);
      const contentId = getContentId(requestUrl);
      const data = await getBlogDetail({ draftKey }, true, contentId);
      setData(data);
    })();
  }, []);

  return <PageBlogDetail {...data} />;
};

export default BlogDetail;
