import { load } from "cheerio";

type Props = {
  body?: string;
};

type Toc = {
  id?: string;
  title?: string;
  level?: number;
};

export const parseToc = ({ body }: Props) => {
  if (!body) return [];

  const $ = load(body);
  const data: Toc[] = [];

  $("h2, h3").each((_, elem) => {
    const element = $(elem).get(0);
    if (!element) return;

    const tagName = element.tagName.toLowerCase();
    const id = $(elem).attr("id");
    const title = $(elem).text();
    const level = tagName === "h2" ? 2 : 3;

    data.push({
      id,
      title,
      level,
    });
  });

  return data;
};
