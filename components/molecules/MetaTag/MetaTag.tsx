import Head from 'next/head';

interface IMetaTag {
  title: string;
}

/**
 * ANCHOR: 추후 og:image나 og:title 등 메타 테그를 추가할 수 있다.
 */
function MetaTag({ title }: IMetaTag) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
}

export default MetaTag;
