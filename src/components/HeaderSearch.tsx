import { useState } from "react";
import { useRouter } from "next/router";
import { ReactSVG } from "react-svg";

export const HeaderSearch = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      await router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <ReactSVG src="/icons/search.svg" aria-hidden className="h-4 w-4 text-gray-400" />
      </div>
      <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="記事を検索する..." className="w-full rounded-md border border-gray-300 py-1.5 pl-9 pr-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20" aria-label="サイト内検索" />
    </form>
  );
};
