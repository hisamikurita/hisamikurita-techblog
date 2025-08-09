import { ZennBlogDataType } from "@/types";

export const getBlogList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ZENN}&order=latest`);
  const data: ZennBlogDataType = await res.json();

  return data;
};
