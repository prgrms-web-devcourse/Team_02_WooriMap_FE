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
  const [lastPostId, setLastPostId] = useState(0);
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

      console.log(newPostList);
      return newPostList;
    } catch (error) {
      return Promise.reject(error);
    }
  }, [instance, lastPostId, postFilter?.tagIds, postFilter?.title]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  // 포스트 필터가 바뀔때마다 실행되는 포스트리스트 가져오는 로직
  useEffect(() => {
    // ANCHOR: 필터 규칙을 적용하여 포스트들을 가져온다.
    const getFilteredPost = async (newPostFilter: IPostFilterProps) => {
      try {
        const { tagIds, title: titleFilter } = newPostFilter;

        const tagIdParams = getTagIdQuery(tagIds);
        const titleParams = getTitleQuery(titleFilter);
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
        return null;
      } catch (error) {
        return Promise.reject(error);
      }
    };

    /**
     * ANCHOR: getAllPost와 filteredPost의 역할이 사실상 동일하므로,
     * 해당 부분을 하나의 함수로 만드는 것이 좋을 듯 하다.
     */
    const getAllPost = async () => {
      try {
        const data = await instance
          .get<IApiResponse<IPostMain[]>>(`/couples/posts`)
          .then((response) => response.data.data);
        const newPostList = data.map<IThumbnailCardProps>((props) => ({
          postId: String(props.postId),
          title: props.title,
          postThumbnailPath: props.imageUrl,
          createDate: props.createDateTime,
          latitude: String(props.latitude),
          longitude: String(props.longitude),
        }));
        setPostList(newPostList);
        return null;
      } catch (error) {
        return Promise.reject(error);
      }
    };

    // 여기서부터 useEffect에 들어갈 로직
    if (postFilter?.tagIds.length === 0 && postFilter?.title === '') {
      setLastPostId(0);
      getAllPost();
    } else if (postFilter !== null) {
      setLastPostId(0);
      getFilteredPost(postFilter);
    }
  }, [instance, lastPostId, postFilter]);

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
