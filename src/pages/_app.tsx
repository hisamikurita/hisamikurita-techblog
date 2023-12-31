import "@/styles/globals.scss";
import { NotoSansJp, RobotoCondensed } from "@/utils/font";

const App = ({ Component, pageProps }: any) => {
  return (
    <div className={`${NotoSansJp.variable} ${RobotoCondensed.variable}`}>
      <div className="font-notosansjp">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default App;
