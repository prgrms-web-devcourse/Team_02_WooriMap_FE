import { ITag, IMainSidebarProps } from 'types';
import { useState, useEffect } from 'react';
import { CoupleProfile, MainSearchBar, MainThumbnailList } from 'components';
import * as S from './MainSidebar.styles';

export function MainSidebar({
  coupleData,
  postList,
  handlePostFilter,
}: IMainSidebarProps) {
  const { me, you, startDate } = coupleData;

  return (
    <S.Container>
      <CoupleProfile me={me} you={you} startDate={startDate} />
      <MainSearchBar handlePostFilter={handlePostFilter} />
      <MainThumbnailList postList={postList} />
    </S.Container>
  );
}
