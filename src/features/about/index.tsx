import Image from "next/image";
import { BaseHead } from "../../components/BaseHead";
import { MicroCmsAboutDataType } from "@/libs/types";
import { SITE_DESCRIPTION, SITE_NAME } from "@/libs/constants";
import { Layout } from "@/components/Layout";
import { CfAwardHistoryDataType } from "@/libs/types";
import { CanvasMatter } from "./components/CanvasMatter";
export const PageAbout: React.FC<MicroCmsAboutDataType> = (data) => {
  const metaData = {
    title: `${SITE_NAME} | About`,
    description: SITE_DESCRIPTION,
  };

  const { nameJa, nameEn, intro, awardHistory } = data;

  return (
    <Layout>
      <BaseHead {...metaData} />
      <CanvasMatter />
      <div className="relative z-10 pb-[620px] pt-[60px]">
        <div className="custom-main-container">
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
            <ul className="mt-[40px] grid gap-[16px]">
              {awardHistory &&
                awardHistory.map((content: CfAwardHistoryDataType, index: number) => (
                  <li key={index}>
                    <a aria-label="新規タブで開きます" href={content.link} target="_blank" rel="noopener noreferrer" className="font-bold text-sky-600">
                      {content.title}
                    </a>
                    <span className="mt-[4px] block md:ml-[22px] md:mt-[0px] md:inline">{content.award}</span>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h2 className="mt-[100px] font-roboto text-[20px] font-bold">CONTACT</h2>
            <p className="mt-[40px]">
              <a href="mailto:kuritahisami@gmail.com">kuritahisami@gmail.com</a>
            </p>
            <ul className="mt-[22px] flex items-center gap-[18px]">
              <li>
                <a href="https://github.com/hisamikurita" target="_blank" rel="noopener noreferrer" className="flex h-[32px] w-[32px]">
                  <svg aria-label="Githubを新規タブで開きます" viewBox="0 0 16 16" width="16" height="16" className="h-full w-full">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/kurichans_1996" target="_blank" rel="noopener noreferrer" className="flex h-[27px] w-[27px]">
                  <svg aria-label="Xを新規タブで開きます" viewBox="0 0 24 24" width="24" height="24" className="h-full w-full">
                    <path d="M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};
