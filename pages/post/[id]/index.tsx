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
        '대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 60일 이내에 후임자를 선거한다. 사면·감형 및 복권에 관한 사항은 법률로 정한다. 군사법원의 조직·권한 및 재판관의 자격은 법률로 정한다. 재판의 전심절차로서 행정심판을 할 수 있다. 행정심판의 절차는 법률로 정하되, 사법절차가 준용되어야 한다.공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을 진다. 대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다. 국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의 위임 또는 직권으로 총리령 또는 부령을 발할 수 있다. 국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다.',
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
