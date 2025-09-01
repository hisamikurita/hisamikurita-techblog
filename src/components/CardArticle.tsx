import Link from "next/link";
import { Article } from "@/types";
import { URL_BLOG, CATEGORY, ANIMATED_EMOJI } from "@/constants";
import { DateFormatter } from "@/components/DateFormatter";
import LottieReact from "lottie-react";
import Smile from "../../public/lottie/smile.json";

export const CardArticle = (article: Article) => {
  const { id, thumbnail, title, publishedAt, category, thumbnailEmoji } = article;

  const borderStyle = {
    works: "bg-gray-300",
    tech: "bg-gradient-to-r from-[#FF7F7F] to-[#FFC698]",
  };

  const borderClass = borderStyle[category?.id as keyof typeof borderStyle] || "";
  const currentEmoji = ANIMATED_EMOJI[thumbnailEmoji as keyof typeof ANIMATED_EMOJI] || Smile;

  return (
    <article>
      <Link href={`${URL_BLOG}${id}`} className={`${borderClass} transition-[transform, shadow] block h-full w-full rounded-xl p-1 shadow-md duration-300 ease-transform hover:-translate-y-1 hover:shadow-2xl`}>
        <div className="relative block overflow-hidden rounded-lg">
          <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-red-50">
            {category?.id === CATEGORY.TECH && <LottieReact animationData={currentEmoji} loop={true} autoplay={true} aria-hidden className="w-20" />}
            {category?.id === CATEGORY.WORKS && <img src={`${thumbnail?.url}?fm=webp&q=80`} alt="" width={thumbnail?.width} height={thumbnail?.height} decoding="async" className="h-full w-full object-cover" />}
          </div>
          <div className="bg-white px-5 pb-4 pt-5">
            <h2 className="line-clamp-3 h-[86px] text-lg leading-[1.6]">{title}</h2>
            <div className="mt-5 grid grid-cols-2">
              <DateFormatter date={publishedAt} className="col-start-2 text-right" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
