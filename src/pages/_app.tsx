import "@/styles/globals.scss";
import { NotoSansJp, RobotoCondensed } from "@/utils/font";
import { HamburgerMenuProvider } from "@/context/hamburgerMenu";

const App = ({ Component, pageProps }: any) => {
  return (
    <div className={`${NotoSansJp.variable} ${RobotoCondensed.variable}`}>
      <div className="font-notosansjp">
        <HamburgerMenuProvider>
          <Component {...pageProps} />
        </HamburgerMenuProvider>
      </div>
    </div>
  );
};

export default App;
