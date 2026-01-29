import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import type { Pagefind, PagefindResultData, SearchResultData } from "../types";

export const usePagefindSearch = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResultData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPagefindLoaded, setIsPagefindLoaded] = useState(false);
  const pagefindRef = useRef<Pagefind | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadPagefind = async () => {
      try {
        // @ts-ignore
        const pagefind = await import(/* webpackIgnore: true */ "/pagefind/pagefind.js");
        pagefindRef.current = pagefind;
        setIsPagefindLoaded(true);
      } catch (error) {
        // Failed to load Pagefind
        // console.error("Failed to load Pagefind:", error);
      }
    };

    loadPagefind();
  }, []);

  const handleSearch = useCallback(async (searchQuery: string) => {
    if (!pagefindRef.current || !searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const search: PagefindResultData = await pagefindRef.current.search(searchQuery);
      const resultData = await Promise.all(
        search.results.map(async (result) => {
          const data = await result.data();
          return {
            id: result.id,
            url: data.url,
            title: data.meta.title,
            excerpt: data.excerpt,
            image: data.meta.image,
            category: data.meta.category,
            thumbnailEmoji: data.meta.thumbnailEmoji,
            publishedAt: data.meta.publishedAt,
            updatedAt: data.meta.updatedAt,
          };
        }),
      );
      setResults(resultData.reverse());
    } catch {
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // URLパラメータから検索クエリを取得して検索を実行
  useEffect(() => {
    if (router.isReady && isPagefindLoaded) {
      const urlQuery = router.query.q as string;
      if (urlQuery) {
        setQuery(urlQuery);
        handleSearch(urlQuery);
      } else {
        setQuery("");
        setResults([]);
      }
    }
  }, [router.isReady, router.query.q, isPagefindLoaded, handleSearch]);

  // 検索ページで入力フィールドにフォーカス
  useEffect(() => {
    if (router.isReady && inputRef.current) {
      inputRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (searchQuery: string) => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`, undefined, { shallow: true });
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(query);
  };

  return {
    query,
    results,
    isLoading,
    handleInputChange,
    handleSubmit,
    onSubmit,
    inputRef,
  };
};
