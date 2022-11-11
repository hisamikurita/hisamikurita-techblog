import 'destyle.css';
import '../styles/app.scss'
import { MetaData } from '../components/MetaData';

const app = ({ Component, pageProps }) => {
  return <>
    <MetaData />
    <Component {...pageProps} />
  </>
}

export default app
