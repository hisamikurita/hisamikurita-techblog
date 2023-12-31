import { defaultClient } from "@/libs/microcms";
import { PageBlogDetail } from "@/components/PageBlogDetail";

export const getStaticPaths = async () => {
  const data = await defaultClient.get({ endpoint: "blog" });
  const paths = data.contents.map((content: any) => `/blog/${content.id}`);

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await defaultClient.get({ endpoint: "blog", contentId: id });

  return { props: data };
};

const Blog = (data: any) => {
  return <PageBlogDetail {...data} />;
};

export default Blog;
