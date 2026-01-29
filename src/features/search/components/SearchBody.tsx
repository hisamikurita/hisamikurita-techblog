import { usePagefindSearch } from "../hooks/usePagefindSearch";
import { SearchList } from "./SearchList";
import LottieReact from "lottie-react";
import Eyes from "../../../../public/lottie/eyes.json";
import { ReactSVG } from "react-svg";

export const SearchBody = () => {
  const { query, results, isLoading, handleInputChange, onSubmit, inputRef } = usePagefindSearch();

  return (
    <>
      <div className="rounded-xl bg-gray-100 px-5 py-4">
        検索ページです。キーワードを入力して記事を検索してください。
        <LottieReact animationData={Eyes} loop={true} autoplay={true} aria-hidden className="relative top-[5px] mr-2 inline-block w-[22px]" />
        {isLoading && <span>検索中...</span>}
        {!isLoading && query && results.length === 0 && <span>「検索結果が見つかりませんでした。」</span>}
        {!isLoading && results.length > 0 && (
          <>
            「<span className="text-primary underline">{results.length}件</span>の記事が見つかりました」
          </>
        )}
      </div>
      <form onSubmit={onSubmit} className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <ReactSVG src="/icons/search.svg" aria-hidden className="h-5 w-5 text-gray-400" />
        </div>
        <input ref={inputRef} type="search" value={query} onChange={handleInputChange} placeholder="キーワードを入力..." className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" aria-label="検索キーワード" />
      </form>

      {!isLoading && results.length > 0 && (
        <div className="mt-10">
          <SearchList results={results} />
        </div>
      )}
    </>
  );
};
