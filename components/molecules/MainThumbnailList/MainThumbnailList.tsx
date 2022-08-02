import { useState } from 'react';
import { arrayBuffer } from 'stream/consumers';
import * as S from './MainThumbnailList.styles';

interface IThumbnailCardProps {
  postId: string;
  postThumbnailPath: string;
  title: string;
  createDate: string;
}

function ThumbnailCard({
  postId,
  postThumbnailPath,
  title,
  createDate,
}: IThumbnailCardProps) {
  return (
    <S.CardContainer url={postThumbnailPath}>
      <div>
        <S.Title>{title}</S.Title>
        <S.CreateDate>{createDate}</S.CreateDate>
      </div>
    </S.CardContainer>
  );
}
/*
postList = [
  {
    "postId": 1L,
    "postThumbnailPath": "path",
    "title": "제목",
    "createDate":"2022-07-26"
  },
];
*/
export function MainThumbnailList({
  postList,
}: {
  postList: IThumbnailCardProps[];
}) {
  return (
    <S.MainThumbnailListContainer>
      {postList.map(({ postId, postThumbnailPath, title, createDate }) => (
        <ThumbnailCard
          postId={postId}
          postThumbnailPath={postThumbnailPath}
          title={title}
          createDate={createDate}
        />
      ))}
    </S.MainThumbnailListContainer>
  );
}
