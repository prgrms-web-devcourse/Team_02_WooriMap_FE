import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import { Layout, MetaTag } from 'components';
import ToastProvider from 'context/ToastContext';
import { GlobalStyle, theme } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MetaTag title="우리맵" />
      <GlobalStyle />
      <RecoilRoot>
        <Layout>
          <ToastProvider>
            <Component {...pageProps} />
          </ToastProvider>
        </Layout>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
