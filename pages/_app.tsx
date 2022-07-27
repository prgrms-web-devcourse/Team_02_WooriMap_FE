//import '../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
