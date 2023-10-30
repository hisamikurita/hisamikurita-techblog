import { BaseHead } from "./BaseHead";
import { MicroCmsAboutDataType } from "@/libs/types";

export const PageAbout: React.FC<MicroCmsAboutDataType> = (data) => {
  const metaData = {
    title: "🐶 Hisami Kurita TechBlog | About",
    description: "This WebSite is 🐶 Hisami Kurita TechBlog",
  };

  return (
    <>
      <BaseHead {...metaData} />
      <div className="pt-[60px] pb-[200px]">
        <div className="custom-container">
          <p className="mt-[100px] font-bold text-[24px]">{data.name}</p>
          <p className="mt-[100px] font-bold text-[24px]">{data.intro}</p>
        </div>
      </div>
    </>
  );
};
