import { CardArticle } from "@/components/CardArticle";
import { Article } from "@/types";
import { ReactSVG } from "react-svg";

export const ContentsRelatedArticles = ({ relatedArticles }: { relatedArticles?: Article[] }) => {
  return (
    <>
      {relatedArticles && relatedArticles.length > 0 && (
        <div className="mt-12">
          <div className="flex items-center gap-2 border-b border-primary pb-2 text-lg font-bold text-primary">
            <div className="flex items-center justify-center rounded-full bg-primary p-2">
              <ReactSVG src="/icons/note.svg" aria-hidden className="relative top-[-0.1px] h-4 w-4 text-white" />
            </div>
            あわせて読みたい
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {relatedArticles?.map((article: Article) => (
              <li key={article.id}>
                <CardArticle {...article} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
