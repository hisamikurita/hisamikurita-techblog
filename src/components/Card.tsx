export const Card = ({ article }: any) => {
  const { thumbnail, title, body } = article;

  return (
    <article>
      <img
        src={`${thumbnail.url}?fm=webp&q=80`}
        alt=""
        width={thumbnail.width}
        height={thumbnail.height}
      />
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
