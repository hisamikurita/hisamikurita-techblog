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
      <div className="pb-[200px] pt-[60px]">
        <div className="custom-container">
          <p className="mt-[100px] text-[24px] font-bold">ABOUT</p>
          <p className="mt-[100px] text-[24px] font-bold">{data.name}</p>
          <p className="mt-[100px] text-[24px] font-bold">{data.intro}</p>
        </div>
      </div>
    </>
  );
};
