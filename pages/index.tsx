import { MainPageTemplate } from 'components';
import { useState, useEffect } from 'react';
import { useGeolocation, useAxiosInstance } from 'hooks';
import { IApiResponse, ICoupleProfileProps } from 'types';
import LocalStorage from 'utils/storage';

function Home() {
  const instance = useAxiosInstance();
  const [coupleData, setCoupleData] = useState<ICoupleProfileProps>({
    startDate: '0000-00-00',
    me: {
      imageUrl: null,
      nickName: 'myname',
    },
    you: {
      imageUrl: null,
      nickName: 'yourname',
    },
  });

  useEffect(() => {
    const getCoupleData = async () => {
      try {
        const accessToken = LocalStorage.getItem('accessToken', '');

        const data = await instance
          .get<IApiResponse<ICoupleProfileProps>>('/couples', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((response) => response.data.data);
        setCoupleData(data);
        return null;
      } catch (error) {
        return Promise.reject(error);
      }
    };
    getCoupleData();
  }, [instance]);

  // postList를 fetch하는 로직, 추후 고도화 예정
  const getPostList = () => {
    // api 구현 아직..!!
    const dummyData = [
      {
        postId: '1',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '서울특별시',
        createDate: '2022-03-18',
        latitude: '37.56667',
        longitude: '126.97806',
      },
      {
        postId: '2',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '부산광역시',
        createDate: '2022-03-18',
        latitude: '35.17944',
        longitude: '129.07556',
      },
      {
        postId: '3',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '인천광역시',
        createDate: '2022-03-18',
        latitude: '37.45639',
        longitude: '126.70528',
      },
      {
        postId: '4',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '대구광역시',
        createDate: '2022-03-18',
        latitude: '35.87222',
        longitude: '128.60250',
      },
      {
        postId: '5',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '대전광역시',
        createDate: '2022-03-18',
        latitude: '36.35111',
        longitude: '127.38500',
      },
      {
        postId: '6',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '광주광역시',
        createDate: '2022-03-18',
        latitude: '35.15972',
        longitude: '126.85306',
      },
      {
        postId: '7',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '울산광역시',
        createDate: '2022-03-18',
        latitude: '35.53889',
        longitude: '129.31667',
      },
      {
        postId: '8',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '세종특별자치시',
        createDate: '2022-03-18',
        latitude: '36.48750',
        longitude: '127.28167',
      },
      {
        postId: '9',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '제주특별자치시',
        createDate: '2022-03-18',
        latitude: '33.50000',
        longitude: '126.51667',
      },
      {
        postId: '10',
        postThumbnailPath:
          'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        title: '고양시',
        createDate: '2022-03-18',
        latitude: '37.65833',
        longitude: '126.83056',
      },
    ];
    return dummyData;
  };
  const dummyPostListData = getPostList();

  // 지도 첫 렌더링 중심점을 잡는 로직
  const {
    coords: { latitude: lat, longitude: lng },
  } = useGeolocation();

  return (
    <MainPageTemplate
      coupleData={coupleData}
      postList={dummyPostListData}
      coordinate={{ latitude: lat, longitude: lng }}
    />
  );
}
export default Home;
