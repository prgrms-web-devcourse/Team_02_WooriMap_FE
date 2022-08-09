import { IMainSidebarProps } from 'types';
import { CoupleProfile, MainSearchBar, MainThumbnailList } from 'components';
import * as S from './MainSidebar.styles';

export function MainSidebar({ coupleData, postList }: IMainSidebarProps) {
  const { me, you, startDate } = coupleData;

  return (
    <S.Container>
      <CoupleProfile me={me} you={you} startDate={startDate} />
      <MainSearchBar />
      <MainThumbnailList postList={postList} />
    </S.Container>
  );
}
