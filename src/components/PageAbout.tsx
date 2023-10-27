import Image from "next/image";
import { MicroCmsAboutDataType } from "@/libs/types";

export const PageAbout: React.FC<MicroCmsAboutDataType> = (data) => {
  return (
    <div className="pt-[60px] pb-[200px]">
      <div className="custom-container">
        <p className="mt-[100px] font-bold text-[24px]">{data.name}</p>
        <p className="mt-[100px] font-bold text-[24px]">{data.intro}</p>
        <div className="h-[320px]">
          <Image
            src="/images/thumbnail-mv.jpg"
            alt=""
            width={2688}
            height={1536}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
