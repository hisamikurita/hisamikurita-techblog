import { ReactSVG } from "react-svg";

type Toc = {
  id?: string;
  title?: string;
};

export const Toc = ({ toc }: { toc: Toc[] }) => {
  return (
    <div className="rounded-xl bg-gray-100 px-5 py-4">
      <h2 className="flex items-center gap-2 border-b border-primary pb-2 text-lg font-bold text-primary">
        <ReactSVG src="/icons/toc.svg" aria-hidden className=" relative top-[1px] h-7 w-7" />
        目次
      </h2>
      <ul className="mt-3 grid gap-2">
        {toc &&
          toc.map((data) => (
            <li key={data.id} className="text-sm">
              <a href={`#${data.id}`}>・{data.title}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};
