import "@/styles/globals.scss";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { NotoSansJp } from "@/libs/font";
import { RobotoCondensed } from "@/libs/font";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <>
      <style jsx global>{`
        :root {
          --font-noto-sans-jp: ${NotoSansJp.variable};
          --font-roboto-condensed: ${RobotoCondensed.variable};
        }
      `}</style>
      <Component {...pageProps} />
    </>,
  );
};

export default App;
