import Image from "next/image";

export const Card = ({ article }: any) => {
  const { thumbnail, title, body } = article;
  // console.log(thumbnail);

  return (
    <article>
      <Image src={thumbnail.url} alt="" width={2304} height={1792} />
      <h1 className="pt-[14px] text-[22px] font-bold tracking-[0.02em] line-clamp-2">
        {title}
      </h1>
      <div
        className="pt-[10px] text-[16px] line-clamp-3"
        dangerouslySetInnerHTML={{ __html: body }}
      ></div>
    </article>
  );
};
