import { parseRichEditor } from "@/utils/parseRichEditor";

type Props = {
  html?: string;
};

export const RichEditor = ({ html }: Props) => {
  const parsedHtml = parseRichEditor({ html });

  return <div className="editor" dangerouslySetInnerHTML={{ __html: parsedHtml || "" }}></div>;
};
