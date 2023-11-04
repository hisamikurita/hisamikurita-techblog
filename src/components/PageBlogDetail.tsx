import { MicroCmsBlogDetailDataType } from "@/libs/types";

export const PageBlogDetail: React.FC<MicroCmsBlogDetailDataType> = (data) => {
  const { title, body } = data;

  return (
    <>
      <h1 className="text-[100px]">{title}</h1>
      <p className="text-[100px]">{body}</p>
    </>
  );
};
