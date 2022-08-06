import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { Layout } from 'components';
import { AuthProvider } from 'contexts/AuthContext';
import AxiosProvider from 'contexts/AxiosContext/AxiosContext';
import { GlobalStyle, theme } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WooriMap</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <AuthProvider>
        <AxiosProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </AxiosProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
