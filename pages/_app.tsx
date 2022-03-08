import { AppProps } from "next/app";
import '@shared/globals.css';

function Myapp({ Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}

export default Myapp