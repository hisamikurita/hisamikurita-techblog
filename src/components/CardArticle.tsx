import Link from "next/link";
import { Article } from "@/types";
import { SOURCE, URL_BLOG, URL_ZENN } from "@/constants";
import { DateFormatter } from "@/components/DateFormatter";
import Image from "next/image";
import LottieReact from "lottie-react";
import Seal from "../../public/lottie/seal.json";
import Smile from "../../public/lottie/smile.json";
import Rocket from "../../public/lottie/rocket.json";
import WritingHand from "../../public/lottie/writing-hand.json";
import PartyingFace from "../../public/lottie/partying-face.json";
import Ghost from "../../public/lottie/ghost.json";

export const CardArticle = (article: Article) => {
  const { id, thumbnail, title, publishedAt, source, emoji, slug } = article;

  const borderStyle = {
    microcms: "bg-gray-300",
    zenn: "bg-gradient-to-r from-[#73C5FF] to-[#AB9DFF]",
  };

  const href = {
    microcms: `${URL_BLOG}${id}`,
    zenn: `${URL_ZENN}${slug}`,
  };

  const emojiData = {
    "🦭": Seal,
    "🚀": Rocket,
    "✍️": WritingHand,
    "🥳": PartyingFace,
    "👻": Ghost,
  };

  const borderClass = borderStyle[source as keyof typeof borderStyle] || "bg-gray-300";
  const currentHref = href[source as keyof typeof href] || `${URL_BLOG}${id}`;
  const currentEmoji = emojiData[emoji as keyof typeof emojiData] || Smile;

  return (
    <article>
      <Link href={currentHref} target={source !== SOURCE.ZENN ? "_self" : "_blank"} className={`${borderClass} transition-[transform, shadow] block h-full w-full rounded-xl p-1 shadow-md duration-300 ease-transform hover:-translate-y-1 hover:shadow-2xl`}>
        <div className="relative block overflow-hidden rounded-lg">
          <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gray-100">
            {source === SOURCE.ZENN && <LottieReact animationData={currentEmoji} loop={true} autoplay={true} aria-hidden className="w-20" />}
            {source !== SOURCE.ZENN && <img src={`${thumbnail?.url}?fm=webp&q=80`} alt="" width={thumbnail?.width} height={thumbnail?.height} decoding="async" className="h-full w-full object-cover" />}
          </div>
          <div className="bg-white px-5 pb-4 pt-5">
            <h2 className="line-clamp-3 h-[86px] text-lg leading-[1.6]">{title}</h2>
            <div className="mt-5 grid grid-cols-2">
              {source === SOURCE.ZENN && <Image src="/images/zenn.png" alt="zenn" width={4167} height={994} className="w-[56px]" />}
              <DateFormatter date={publishedAt} className="col-start-2 text-right" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
