import { PostTemplate, ImageViewer } from 'components';
import { ITagState, ICoordinates } from 'types';
import { PostBody } from 'components/organisms/PostBody';

interface IPostDetial {
  title: string;
  date: string;
  tagList: ITagState[];
  content: string;
  location: ICoordinates;
  photos: string[];
}

export default function PostDetail() {
  const getPost = (): IPostDetial => {
    const RESPONSE = {
      title: '강릉 여행',
      contents:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      imageUrls: [
        'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+2.png',
        'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/i1.jpg',
        'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test.png',
        'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+3.png',
      ],
      createdDate: '2022-07-09',
      datingStartDate: '2022-07-01',
      place: {
        latitude: '37.4',
        longitude: '127',
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
      location: {
        latitude: Number(place.latitude),
        longitude: Number(place.longitude),
      },
      photos: imageUrls,
    };

    return postInfo;
  };

  const { title, date, tagList, content, location, photos } = getPost();

  return (
    <PostTemplate
      type="detail"
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
