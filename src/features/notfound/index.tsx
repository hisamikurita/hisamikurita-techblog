import { BaseHead } from "@/components/BaseHead";
import { META_TITLE, META_DESCRIPTION } from "@/constants";
import LottieReact from "lottie-react";
import LoudlyCrying from "../../../public/lottie/loudly-crying.json";
import { Button } from "@/components/Button";

export const PageNotfound = () => {
  const metaData = {
    title: `${META_TITLE} | 404 Not Found`,
    description: META_DESCRIPTION,
  };

  return (
    <>
      <BaseHead {...metaData} />
      <div className="pb-10 pt-[60px]">
        <div className="c-main-container">
          <div className="mt-8 rounded-xl bg-gray-100 px-5 py-4 text-[22px] font-bold">
            お探しの記事が見つかりませんでした。
            <LottieReact animationData={LoudlyCrying} loop={true} autoplay={true} aria-hidden className="relative top-[5px] inline-block w-[26px]" />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-6 lg:gap-10">
            <div className="c-sub-container md:col-span-2">
              <p>
                お探しの記事は削除されたか、URLが変更された可能性があります。
                <br />
                トップページに戻って、他の記事をお楽しみください。
              </p>
              <div className="mt-10">
                <Button href="/" text="トップページへ戻る" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
