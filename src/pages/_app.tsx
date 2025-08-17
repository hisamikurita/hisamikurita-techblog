import "@/styles/globals.scss";
import { NotoSansJp, RobotoCondensed } from "@/utils/font";
import { HamburgerMenuProvider } from "@/providers/hamburgerMenu";
import { useGtag } from "@/hooks/useGtag";
import { Layout } from "@/components/Layout";
import Script from "next/script";

const App = ({ Component, pageProps }: any) => {
  const { renderGtagScripts } = useGtag();

  return (
    <>
      {!!process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID && <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID}`} crossOrigin="anonymous" strategy="afterInteractive" />}
      {renderGtagScripts()}
      <div className={`${NotoSansJp.variable} ${RobotoCondensed.variable}`}>
        <div className="font-notosansjp">
          <HamburgerMenuProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </HamburgerMenuProvider>
        </div>
      </div>
    </>
  );
};

export default App;
