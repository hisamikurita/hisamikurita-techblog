import "@/styles/globals.scss";
import { NotoSansJp, RobotoCondensed } from "@/utils/font";
import { HamburgerMenuProvider } from "@/context/hamburgerMenu";
import Script from "next/script";
import * as gtag from "@/libs/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";

const App = ({ Component, pageProps }: any) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url: any) => {
      gtag.pageView(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);

  return (
    <div className={`${NotoSansJp.variable} ${RobotoCondensed.variable}`}>
      <div className="font-notosansjp">
        <HamburgerMenuProvider>
          <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`} />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', '${gtag.GA_MEASUREMENT_ID}');
              `,
            }}
          />
          <Component {...pageProps} />
        </HamburgerMenuProvider>
      </div>
    </div>
  );
};

export default App;
