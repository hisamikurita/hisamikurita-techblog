import Link from "next/link";
import { URL_BLOG } from "@/libs/constants";

export const Card = ({ article }: any) => {
  const { id, thumbnail, title, body } = article;

  return (
    <article>
      <Link href={`${URL_BLOG}${id}`}>
        <img src={`${thumbnail.url}?fm=webp&q=80`} alt="" width={thumbnail.width} height={thumbnail.height} decoding="async" />
        <h1 className="line-clamp-2 pt-[14px] text-[22px] font-bold tracking-[0.02em]">{title}</h1>
        <div className="line-clamp-3 pt-[10px] text-[16px]" dangerouslySetInnerHTML={{ __html: body }}></div>
      </Link>
    </article>
  );
};
