import { PostTemplate, ImageViewer, PostBody } from 'components';
import { ITag, ICoordination } from 'types';

interface IPostDetial {
  title: string;
  date: string;
  tagList: ITag[];
  content: string;
  location: ICoordination;
  photos: string[];
}

export default function PostDetail() {
  const getPost = (): IPostDetial => {
    const RESPONSE = {
      title: '강릉 여행',
      contents: '나의 멋진 여행기',
      imageUrls: [
        'https://amabnb.s3.ap-northeast-2.amazonaws.com/static/3e254761-e253-48f3-aa80-7e561ca33e0bfedsd.png',
        'https://amabnb.s3.ap-northeast-2.amazonaws.com/static/3e254761-e253-48f3-aa80-7e561ca33e0bfeds2.png',
      ],
      createdDate: '2022-07-09',
      datingStartDate: '2022-07-01',
      place: {
        latitude: '41.40338',
        longitude: '2.17403',
      },
      tags: [
        { name: '멋진태그', color: '#9d22a6' },
        { name: '강한태그', color: '#bad138' },
        { name: '슈퍼태그', color: '#666cd9' },
        { name: '프로태그', color: '#dd8648' },
        { name: '택택그', color: '#ac536c' },
      ],
    };

    const { title, contents, imageUrls, datingStartDate, place, tags } =
      RESPONSE;

    const postInfo = {
      title,
      date: datingStartDate,
      tagList: tags,
      content: contents,
      location: place,
      photos: imageUrls,
    };

    return postInfo;
  };

  const { title, date, tagList, content, location, photos } = getPost();

  return (
    <PostTemplate
      imageSection={<ImageViewer images={photos} />}
      contentSection={
        <PostBody
          title={title}
          date={date}
          tagList={tagList}
          content={content}
          location={location}
        />
      }
    />
  );
}
