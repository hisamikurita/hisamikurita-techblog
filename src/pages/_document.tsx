import { Html, Head, Main, NextScript } from "next/document";

export const Document = () => {
  const id = "mainContents";

  return (
    <Html lang="ja">
      <Head />
      <body>
        {/*
          ブロックスキップ機能
          スクリーンリーダーユーザーをメインコンテンツへ飛ばす
        */}
        <a className="sr-only" href={`#${id}`}>
          本文へ移動
        </a>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
