import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import { Layout } from 'components';
import { AuthProvider } from 'contexts/AuthContext';
import { GlobalStyle, theme } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WooriMap</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RecoilRoot>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RecoilRoot>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
