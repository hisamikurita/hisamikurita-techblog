import { CardArticle } from "@/components/CardArticle";
import { convertToArticle } from "../utils";
import type { SearchResultData } from "../types";

type Props = {
  results: SearchResultData[];
};

export const SearchList = ({ results }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {results.map((result) => (
        <CardArticle key={result.id} {...convertToArticle(result)} />
      ))}
    </div>
  );
};
