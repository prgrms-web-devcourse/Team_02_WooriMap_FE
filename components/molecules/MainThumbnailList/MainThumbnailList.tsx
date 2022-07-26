import { IThumbnailCardProps } from 'types';
import Link from 'next/link';
import * as S from './MainThumbnailList.styles';

function ThumbnailCard({
  postId,
  postThumbnailPath,
  title,
  createDate,
}: IThumbnailCardProps) {
  return (
    <Link href={`/post/${postId}`}>
      <S.CardContainer url={postThumbnailPath}>
        <div>
          <S.Title>{title}</S.Title>
          <S.CreateDate>{createDate}</S.CreateDate>
        </div>
      </S.CardContainer>
    </Link>
  );
}

export function MainThumbnailList({
  postList,
}: {
  postList: IThumbnailCardProps[];
}) {
  return (
    <S.MainThumbnailListContainer>
      {postList.length ? (
        postList.map(({ postId, postThumbnailPath, title, createDate }) => (
          <ThumbnailCard
            key={postId}
            postId={postId}
            postThumbnailPath={postThumbnailPath}
            title={title}
            createDate={createDate.slice(0, 10)}
          />
        ))
      ) : (
        <S.NoResultAlert>검색 결과가 없습니다 ヽ ( ꒪д꒪ )ﾉ</S.NoResultAlert>
      )}
    </S.MainThumbnailListContainer>
  );
}
