import { PostTemplate, ImageViewer, PostWrite } from 'components';
import { IPostFormState } from 'types';
import { dummyImages } from 'utils';

export default function PostEdit({ data }: IPostFormState) {
  const { title, content, date, tags, imageUrls, latitude, longitude } = data;

  return (
    <PostTemplate
      type="edit"
      onSubmit={() => {}}
      imageSection={<ImageViewer images={imageUrls} />}
      contentSection={
        <PostWrite
          postState={{
            title,
            content,
            date,
            tags,
            latitude,
            longitude,
          }}
        />
      }
    />
  );
}

export function getStaticProps({ params }: { params: { id: string } }) {
  const data = {
    title: '너와의 첫 만남',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut blanditiis doloremque distinctio sunt repudiandae iure. Voluptate at voluptatem consequuntur reprehenderit modi, necessitatibus ipsa nulla reiciendis tenetur, aliquid voluptatum esse culpa?',
    date: '2020-01-01',
    tags: ['여행', '친구', '여자친구'],
    imageUrls: dummyImages,
    latitude: '37.566535',
    longitude: '126.977969',
  };
  return {
    props: {
      data,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: false,
  };
}
