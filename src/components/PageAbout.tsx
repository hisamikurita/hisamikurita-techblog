import { BaseHead } from "./BaseHead";
import { MicroCmsAboutDataType } from "@/libs/types";
import { SITE_DESCRIPTION, SITE_NAME } from "@/libs/constants";

export const PageAbout: React.FC<MicroCmsAboutDataType> = (data) => {
  const metaData = {
    title: `${SITE_NAME} | About`,
    description: SITE_DESCRIPTION,
  };

  return (
    <>
      <BaseHead {...metaData} />
      <div className="pt-[60px] pb-[200px]">
        <div className="custom-container">
          <p className="mt-[100px] font-bold text-[24px]">ABOUT</p>
          <p className="mt-[100px] font-bold text-[24px]">{data.name}</p>
          <p className="mt-[100px] font-bold text-[24px]">{data.intro}</p>
        </div>
      </div>
    </>
  );
};
