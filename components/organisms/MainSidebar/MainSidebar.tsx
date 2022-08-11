import {
  ITag as ITagWithoutId,
  IMainSidebarProps,
  IApiResponse,
  IResponseTag,
} from 'types';
import { useState, useEffect } from 'react';
import { CoupleProfile, MainSearchBar, MainThumbnailList } from 'components';
import LocalStorage from 'utils/storage';
import { useAxiosInstance } from 'hooks';
import * as S from './MainSidebar.styles';

interface ITag extends ITagWithoutId {
  id: number;
}

export function MainSidebar({
  coupleData,
  postList,
  handlePostFilter,
}: IMainSidebarProps) {
  const { me, you, startDate } = coupleData;
  const dummyWholeTagList: ITag[] = [
    {
      id: 1,
      name: '첫번째 태그',
      color: '#ffea7a80',
    },
    {
      id: 2,
      name: '두번째 태그',
      color: '#ff8f8f80',
    },
    {
      id: 3,
      name: '세번째 태그',
      color: '#97baff80',
    },
    {
      id: 4,
      name: '네번째 태그',
      color: '#ffea7a80',
    },
    {
      id: 5,
      name: '다섯번째 태그',
      color: '#d9d9d980',
    },
  ];
  const instance = useAxiosInstance();
  const [wholeTagList, setWholeTagList] = useState<ITag[] | null>(null);

  // 모든 태그리스트를 가져오는 로직
  useEffect(() => {
    const getWholeTagList = async () => {
      try {
        const accessToken = LocalStorage.getItem('accessToken', '');
        const data = await instance
          .get<IApiResponse<IResponseTag[]>>('/couples/tags', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((response) => response.data.data);
        const tags = data.map(({ id, name, color }) => ({
          id,
          name,
          color,
        }));
        // 태그 확인용, 곧 삭제 예정
        console.log('tags : ', tags);
        setWholeTagList(tags);
        return null;
      } catch (error) {
        return Promise.reject(error);
      }
    };
    getWholeTagList();
  }, [instance]);

  return (
    <S.Container>
      <CoupleProfile me={me} you={you} startDate={startDate} />
      <MainSearchBar
        handlePostFilter={handlePostFilter}
        wholeTagList={wholeTagList || dummyWholeTagList}
      />
      <MainThumbnailList postList={postList} />
    </S.Container>
  );
}
