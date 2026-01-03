"use client";

import { useCodeCopy } from "../hooks/useCodeCopy";

type Props = {
  body?: string;
};

export const RichEditor = ({ body }: Props) => {
  useCodeCopy(body);

  return <div className="editor" dangerouslySetInnerHTML={{ __html: body || "" }}></div>;
};
