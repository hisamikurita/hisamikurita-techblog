export type SearchResultData = {
  id: string;
  url: string;
  title: string;
  excerpt: string;
  image?: string;
  category?: string;
  thumbnailEmoji?: string;
  publishedAt?: string;
  updatedAt?: string;
};

export type PagefindResultData = {
  results: Array<{
    id: string;
    data: () => Promise<{
      url: string;
      content: string;
      word_count: number;
      filters: Record<string, string>;
      meta: {
        title: string;
        image?: string;
        category?: string;
        thumbnailEmoji?: string;
        publishedAt?: string;
        updatedAt?: string;
      };
      excerpt: string;
      sub_results: Array<{
        title: string;
        url: string;
        excerpt: string;
      }>;
    }>;
  }>;
};

export type Pagefind = {
  search: (query: string) => Promise<PagefindResultData>;
};
