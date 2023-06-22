import type { AppProps } from "next/app";
import "@nextcss/reset";

import "styles/global.scss";

function WindbnbApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default WindbnbApp;
