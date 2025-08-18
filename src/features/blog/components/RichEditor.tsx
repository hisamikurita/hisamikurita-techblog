import { parseRichEditor } from "@/utils/parseRichEditor";

type Props = {
  body?: string;
};

export const RichEditor = ({ body }: Props) => {
  const parsedHtml = parseRichEditor({ body });

  return <div className="editor" dangerouslySetInnerHTML={{ __html: parsedHtml || "" }}></div>;
};
