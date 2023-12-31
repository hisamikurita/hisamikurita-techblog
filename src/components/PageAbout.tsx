import Image from "next/image";
import { BaseHead } from "./BaseHead";
import { MicroCmsAboutDataType } from "@/libs/types";
import { SITE_DESCRIPTION, SITE_NAME } from "@/libs/constants";
import { Layout } from "@/components/Layout";

export const PageAbout: React.FC<MicroCmsAboutDataType> = (data) => {
  const metaData = {
    title: `${SITE_NAME} | About`,
    description: SITE_DESCRIPTION,
  };

  const { nameJa, nameEn, intro } = data;

  return (
    <Layout>
      <BaseHead {...metaData} />
      <div className="pb-[200px] pt-[60px]">
        <div className="custom-container">
          <div>
            <h1 className="mt-[100px] font-roboto text-[24px] font-bold">ABOUT</h1>
            <p className="mt-[100px] w-[220px]">
              <Image src="/images/me.png" alt="" width={1674} height={1674} />
            </p>
            <p className="mt-[40px]">
              <span>{nameJa}</span>
              <span className="ml-[10px]">{nameEn}</span>
            </p>
            <p className="mt-[28px] whitespace-pre-wrap leading-[2.0]">{intro}</p>
          </div>
          <div>
            <h2 className="mt-[100px] font-roboto text-[20px] font-bold">AWARD</h2>
            <ul className="mt-[40px]">
              <li>
                <a href="https://hsmkrt1996.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-sky-600">
                  HISAMI KURITA PORTFOLIO
                </a>
                <span className="ml-[22px]">Awwwards SOTD / Nominated for DEVELOPER OF THE YEAR 2022</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};
