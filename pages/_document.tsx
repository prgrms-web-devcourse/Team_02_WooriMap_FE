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
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&display=swap"
            rel="stylesheet"
          />
          {/* KaKapMap 컴포넌트가 로딩되기 전에 렌더링 되는 것을 방지하는 script */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              kakao.maps.load(function() {
                const  map = new kakao.maps.Map(node, options);
              });
                `,
            }}
          /> */}
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
