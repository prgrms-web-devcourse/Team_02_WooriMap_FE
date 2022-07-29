import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { Layout } from 'components';
import { GlobalStyle, theme } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
