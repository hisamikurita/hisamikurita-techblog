import { defaultClient } from "@/libs/microcms";
import { LayoutDefault } from "@/components/LayoutDefault";
import type { NextPageWithLayout } from "@/pages/_app";
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

const Blog: NextPageWithLayout = (data) => <PageBlogDetail {...data} />;

Blog.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default Blog;
