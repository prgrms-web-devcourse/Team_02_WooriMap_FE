import * as S from './MainThumbnailList.styles';

export interface IThumbnailCardProps {
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
  const onClick = (postId: string) => {
    //postId별 라우팅 관련 로직 추가 예정
    alert(`${postId}를 클릭하셨군여 (๑•̀ㅂ•́)و✧`);
  };

  return (
    <S.CardContainer url={postThumbnailPath} onClick={() => onClick(postId)}>
      <div>
        <S.Title>{title}</S.Title>
        <S.CreateDate>{createDate}</S.CreateDate>
      </div>
    </S.CardContainer>
  );
}

export function MainThumbnailList({
  postList,
}: {
  postList: IThumbnailCardProps[];
}) {
  return (
    <S.MainThumbnailListContainer>
      {postList.map(({ postId, postThumbnailPath, title, createDate }) => (
        <ThumbnailCard
          key={postId}
          postId={postId}
          postThumbnailPath={postThumbnailPath}
          title={title}
          createDate={createDate}
        />
      ))}
    </S.MainThumbnailListContainer>
  );
}
