import { getBlogList, getBlogDetail } from "@/libs/microcms";
import { PageBlogDetail } from "@/features/blog/";
import { ContextDataType, MicroCmsBlogDetailDataType } from "@/types";
import { parseRichEditor } from "@/utils/parseRichEditor";

export const getStaticPaths = async () => {
  const data = await getBlogList();
  const paths = data.contents?.map((content: MicroCmsBlogDetailDataType) => `/blog/${content.id}`);

  return { paths, fallback: false };
};

export const getStaticProps = async (context: ContextDataType) => {
  const id = context.params.id;
  const data = await getBlogDetail({}, false, id);
  data.body = await parseRichEditor({ body: data.body });

  return { props: data };
};

const BlogDetail = (data: MicroCmsBlogDetailDataType) => {
  return <PageBlogDetail {...data} />;
};

export default BlogDetail;
