import { MicroCmsBlogDetailDataType } from "@/libs/types";

export const PageBlog: React.FC<MicroCmsBlogDetailDataType> = (data) => {
  const { title, body } = data;
  console.log(title);

  return (
    <>
      <h1 className="text-[100px]">{title}</h1>
      <p className="text-[100px]">{body}</p>
    </>
  );
};
