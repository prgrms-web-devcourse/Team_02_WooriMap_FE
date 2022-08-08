import { PostTemplate } from 'components';

export default function PostEdit(props: any) {
  console.log(props);
  return (
    <div>
      <h1>PostEdit</h1>
    </div>
  );
}

export function getStaticProps({ params }: { params: { id: string } }) {
  return {
    props: {
      id: params.id,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: false,
  };
}
