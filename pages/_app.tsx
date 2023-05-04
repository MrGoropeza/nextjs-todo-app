// styles
import "@/styles/globals.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/md-dark-indigo/theme.css";

import type { AppProps } from "next/app";
import PrimeReact from "primereact/api";

export default function App({ Component, pageProps }: AppProps) {
  PrimeReact.ripple = true;
  return <Component {...pageProps} />;
}
