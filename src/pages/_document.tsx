import { Html, Head, Main, NextScript } from "next/document";

export const Document = () => {
  const id = "mainContents";

  return (
    <Html lang="ja">
      <Head>{!!process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID && <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID}`} crossOrigin="anonymous" />}</Head>
      <body id={id}>
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
