import { load } from "cheerio";

type Props = {
  body?: string;
};

type Toc = {
  id?: string;
  title?: string;
};

export const parseToc = ({ body }: Props) => {
  if (!body) return [];

  const $ = load(body);
  const data: Toc[] = [];

  $("h2").each((_, elem) => {
    const element = $(elem).get(0);
    if (!element) return;

    const id = $(elem).attr("id");
    const title = $(elem).text();

    data.push({
      id,
      title,
    });
  });

  return data;
};
