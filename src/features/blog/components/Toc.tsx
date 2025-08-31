import { useDevice } from "@/hooks/useDevice";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

type Toc = {
  id?: string;
  title?: string;
  level?: number;
};

export const Toc = ({ toc }: { toc: Toc[] }) => {
  const [activeId, setActiveId] = useState<string>("");
  const { isSp } = useDevice();

  useEffect(() => {
    if (isSp) return;

    const headings = toc
      .map((item) => item.id)
      .filter(Boolean)
      .map((id) => document.getElementById(id!))
      .filter(Boolean) as HTMLElement[];

    if (headings.length === 0) return;

    const options = {
      root: null,
      rootMargin: "-68px 0px -70% 0px",
      threshold: 0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        const firstVisibleEntry = visibleEntries[0];
        setActiveId(firstVisibleEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(callback, options);

    headings.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      headings.forEach((heading) => {
        observer.unobserve(heading);
      });
    };
  }, [toc, isSp]);

  return (
    <div className="rounded-xl bg-gray-100 px-5 py-4">
      <h2 className="flex items-center gap-2 border-b border-primary pb-2 text-lg font-bold text-primary">
        <ReactSVG src="/icons/toc.svg" aria-hidden className="relative top-[1px] h-7 w-7" />
        目次
      </h2>
      <ul className="ml-1 mt-3 grid gap-[9px]">
        {toc &&
          toc.map((data, index) => (
            <li key={data.id} className="relative text-sm">
              {toc.length - 1 !== index && <span className="absolute left-[3px] top-5 h-[calc(100%_-_6px)] w-[1px] rounded-full bg-primary opacity-70"></span>}
              <a href={`#${data.id}`} className={`${activeId === data.id ? "md:opacity-100" : "md:opacity-70"} flex gap-3`}>
                <span className={`${data.level === 3 ? "left-[1px] top-[10px] h-[5px] w-[5px]" : "top-[9px] h-[7px] w-[7px]"} relative block  shrink-0 rounded-full bg-primary`}>{activeId === data.id && !isSp && <span className={`${data.level === 3 ? "left-[-2px] top-[-2px] h-[9px] w-[9px]" : "left-[-2px] top-[-2px] h-[11px] w-[11px] "} absolute rounded-full border border-primary`}></span>}</span>
                <span className={data.level === 3 ? "relative top-[2px] text-xs" : ""}>{data.title}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};
