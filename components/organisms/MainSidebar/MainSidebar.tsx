import { CoupleProfile, MainSearchBar, MainThumbnailList } from 'components';
import { IThumbnailCardProps } from 'components/molecules/MainThumbnailList';
import * as S from './MainSidebar.styles';

interface IProfile {
  profileImagePath: string;
  nickname: string;
}

export interface IMainSidebarProps {
  coupleData: {
    startDate: string;
    me: IProfile;
    you: IProfile;
  };
  postList: IThumbnailCardProps[];
}

export function MainSidebar({ coupleData, postList }: IMainSidebarProps) {
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
