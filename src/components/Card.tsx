import Link from "next/link";
import { MicroCmsBlogDetailDataType } from "@/types";
import { URL_BLOG } from "@/constants";

export const Card = (article: MicroCmsBlogDetailDataType) => {
  const { id, thumbnail, title, excerpt } = article;

  return (
    <article>
      <Link href={`${URL_BLOG}${id}`}>
        <p className="relative aspect-[16/9] overflow-hidden">
          <img src={`${thumbnail?.url}?fm=webp&q=80`} alt="" width={thumbnail?.width} height={thumbnail?.height} decoding="async" className="h-full w-full object-cover" />
        </p>
        <h2 className="line-clamp-2 pt-[14px] text-[22px] font-bold tracking-[0.02em]">{title}</h2>
        <p className="line-clamp-3 pt-[10px] text-[16px] leading-[1.7]">{excerpt}</p>
      </Link>
    </article>
  );
};
