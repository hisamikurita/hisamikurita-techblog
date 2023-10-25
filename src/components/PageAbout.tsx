import { MicroCmsAboutDataType } from "@/libs/types";

export const PageAbout: React.FC<MicroCmsAboutDataType> = (data) => {
  return (
    <div className="pt-[60px] pb-[200px]">
      <div className="custom-container">
        <p className="mt-[100px] font-bold text-[24px]">{data.name}</p>
        <p className="mt-[100px] font-bold text-[24px]">{data.intro}</p>
      </div>
    </div>
  );
};
