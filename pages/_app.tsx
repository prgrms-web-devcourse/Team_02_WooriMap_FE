import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import { Layout, MetaTag } from 'components';
import { GlobalStyle, theme } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MetaTag title="우리맵" />
      <GlobalStyle />
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
