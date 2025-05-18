import "@/styles/globals.scss";
import { NotoSansJp, RobotoCondensed } from "@/utils/font";
import { HamburgerMenuProvider } from "@/providers/hamburgerMenu";
import { useGtag } from "@/hooks/useGtag";

const App = ({ Component, pageProps }: any) => {
  const { renderGtagScripts } = useGtag();

  return (
    <div className={`${NotoSansJp.variable} ${RobotoCondensed.variable}`}>
      <div className="font-notosansjp">
        <HamburgerMenuProvider>
          {renderGtagScripts()}
          <Component {...pageProps} />
        </HamburgerMenuProvider>
      </div>
    </div>
  );
};

export default App;
