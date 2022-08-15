import { useState, useEffect } from 'react';
import { MainPageTemplate, MetaTag } from 'components';
import { useAxiosInstance, useGeolocation } from 'hooks';
import {
  IApiResponse,
  IPostFilterProps,
  IThumbnailCardProps,
  ICoupleProfileProps,
} from 'types';
import { withCoupleRoute } from 'hocs';
import LocalStorage from 'utils/storage';

function Home() {
  const [postFilter, setPostFilter] = useState<IPostFilterProps | null>(null);
  const [lastPostId, setLastPostId] = useState(0);
  const [postList, setPostList] = useState<IThumbnailCardProps[]>([]);
  let accessToken: string | null = '';
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
        const data = await instance.get<IApiResponse<ICoupleProfileProps>>(
          '/couples',
        );
        const newCoupleData = data.data.data;
        return newCoupleData;
      } catch (error) {
        return Promise.reject(error);
      }
    };
    getCoupleData().then((newCoupleData) => setCoupleData(newCoupleData));
  }, [instance]);

  // 지도 첫 렌더링 중심점을 잡는 로직
  const {
    coords: { latitude: lat, longitude: lng },
  } = useGeolocation();

  const handlePostFilter = (newPostFilter: IPostFilterProps) => {
    setPostFilter(newPostFilter);
  };

  const getFilteredPost = async (newPostFilter: IPostFilterProps) => {
    try {
      const { tagIds, title: titleFilter } = newPostFilter.postFilter;
      const tagIdParams = tagIds.length
        ? `tagIds=${tagIds.map((tagId) => `${tagId},`.slice(0, -1))}`
        : '';
      const titleParams = titleFilter ? `&title=${titleFilter}` : '';
      const lastPostIdParams = lastPostId ? `&lastPostId=${lastPostId}` : '';

      const data = await instance
        .get<
          IApiResponse<
            {
              postId: number;
              title: string;
              imageUrl: string;
              createDateTime: string;
              latitude: number;
              longitude: number;
            }[]
          >
        >(`/couples/posts?${tagIdParams}${titleParams}${lastPostIdParams}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => response.data.data);
      const newPostList: IThumbnailCardProps[] = data.map(
        ({ postId, title, imageUrl, createDateTime, latitude, longitude }) => ({
          postId: String(postId),
          title,
          postThumbnailPath: imageUrl,
          createDate: createDateTime,
          latitude: String(latitude),
          longitude: String(longitude),
        }),
      );
      setPostList(newPostList);
      return null;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const getAllPost = async () => {
    try {
      const data = await instance
        .get<
          IApiResponse<
            {
              postId: number;
              title: string;
              imageUrl: string;
              createDateTime: string;
              latitude: number;
              longitude: number;
            }[]
          >
        >(`/couples/posts`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => response.data.data);
      const newPostList: IThumbnailCardProps[] = data.map(
        ({ postId, title, imageUrl, createDateTime, latitude, longitude }) => ({
          postId: String(postId),
          title,
          postThumbnailPath: imageUrl,
          createDate: createDateTime,
          latitude: String(latitude),
          longitude: String(longitude),
        }),
      );
      setPostList(newPostList);
      return null;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  // 포스트 필터가 바뀔때마다 실행되는 포스트리스트 가져오는 로직
  useEffect(() => {
    accessToken = LocalStorage.getItem('accessToken', '');

    if (
      postFilter?.postFilter.tagIds.length === 0 &&
      postFilter?.postFilter.title === ''
    ) {
      setLastPostId(0);
      getAllPost();
    } else if (postFilter !== null) {
      setLastPostId(0);
      getFilteredPost(postFilter);
    }
  }, [postFilter]);

  return (
    <>
      <MetaTag title="우리맵 메인 페이지" />
      <MainPageTemplate
        coupleData={coupleData}
        postList={postList || []}
        coordinate={{ latitude: lat, longitude: lng }}
        handlePostFilter={handlePostFilter}
      />
    </>
  );
}
export default withCoupleRoute(Home);
