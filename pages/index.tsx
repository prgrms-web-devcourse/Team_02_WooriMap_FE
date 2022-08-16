import { useState, useEffect, useCallback } from 'react';
import { MainPageTemplate, MetaTag } from 'components';
import { useAxiosInstance, useGeolocation } from 'hooks';
import {
  IApiResponse,
  IPostFilterProps,
  IThumbnailCardProps,
  ICoupleProfileProps,
} from 'types';
import { withCoupleRoute } from 'hocs';
import { IPostMain } from 'types/post';
import { getLastIdQuery, getTagIdQuery, getTitleQuery } from 'utils/pages';

function Home() {
  const [postFilter, setPostFilter] = useState<IPostFilterProps | null>(null);
  const [lastPostId] = useState(0);
  const [postList, setPostList] = useState<IThumbnailCardProps[]>([]);
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

  // 지도 첫 렌더링 중심점을 잡는 로직
  const {
    coords: { latitude: lat, longitude: lng },
  } = useGeolocation();

  // ANCHOR: 커플 정보를 불러온다.
  useEffect(() => {
    (async () => {
      try {
        const newCoupleData = await instance
          .get<IApiResponse<ICoupleProfileProps>>('/couples')
          .then((response) => response.data.data);

        setCoupleData(newCoupleData);

        return newCoupleData;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }, [instance]);

  const handlePostFilter = useCallback((newPostFilter: IPostFilterProps) => {
    setPostFilter(newPostFilter);
  }, []);

  const getPosts = useCallback(async () => {
    try {
      const tagIdParams = getTagIdQuery(postFilter?.tagIds || []);
      const titleParams = getTitleQuery(postFilter?.title || '');
      const lastPostIdParams = getLastIdQuery(lastPostId);

      const mainPosts = await instance
        .get<IApiResponse<IPostMain[]>>(
          `/couples/posts?${tagIdParams}${titleParams}${lastPostIdParams}`,
        )
        .then((response) => response.data.data);

      const newPostList = mainPosts.map<IThumbnailCardProps>((props) => ({
        postId: String(props.postId),
        title: props.title,
        postThumbnailPath: props.imageUrl,
        createDate: props.createDateTime,
        latitude: String(props.latitude),
        longitude: String(props.longitude),
      }));

      setPostList(newPostList);
      return newPostList;
    } catch (error) {
      return Promise.reject(error);
    }
  }, [instance, lastPostId, postFilter?.tagIds, postFilter?.title]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

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
