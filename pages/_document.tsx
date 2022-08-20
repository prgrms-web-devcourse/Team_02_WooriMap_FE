import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&display=swap"
            rel="stylesheet"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="우리맵" />
          <meta property="og:title" content="우리맵" />
          <meta property="og:description" content="우리 갔던곳, 우리맵" />
          <meta property="og:image" content="https://i.imgur.com/ZzqdUZB.png" />
          <meta property="og:url" content="https://woorimap.vercel.app" />
        </Head>
        <body>
          <div id="toast-portal" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
