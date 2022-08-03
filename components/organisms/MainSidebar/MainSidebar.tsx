import * as S from './MainSidebar.styles';
import { CoupleProfile, MainSearchBar, MainThumbnailList } from 'components';

import { IThumbnailCardProps } from 'components/molecules/MainThumbnailList';

interface IProfile {
  profileImagePath: string;
  nickname: string;
}

interface IMainSidebar {
  coupleData: {
    startDate: string;
    me: IProfile;
    you: IProfile;
  };
  postList: IThumbnailCardProps[];
}

export function MainSidebar({ coupleData, postList }: IMainSidebar) {
  const { startDate, me, you } = coupleData;

  return (
    <S.Container>
      <CoupleProfile
        nickname={me.nickname}
        coupleNickname={you.nickname}
        coupleStartingDate={startDate}
      />
      <MainSearchBar />
      <MainThumbnailList postList={postList} />
    </S.Container>
  );
}
