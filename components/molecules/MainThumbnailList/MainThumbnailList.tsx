import { IThumbnailCardProps } from 'types';
import * as S from './MainThumbnailList.styles';

function ThumbnailCard({
  postId,
  postThumbnailPath,
  title,
  createDate,
  latitude,
  longitude,
}: IThumbnailCardProps) {
  const onClick = (_postId: string) => {
    // postId별 라우팅 관련 로직 추가 예정
    alert(`${_postId}를 클릭하셨군여 (๑•̀ㅂ•́)و✧`);
  };

  const coordinate = {
    latitude: latitude || null,
    longitude: longitude || null,
  };

  return (
    <S.CardContainer
      url={postThumbnailPath}
      data-coordinate={coordinate}
      onClick={() => onClick(postId)}
    >
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
      {postList.map(
        ({
          postId,
          postThumbnailPath,
          title,
          createDate,
          latitude,
          longitude,
        }) => (
          <ThumbnailCard
            key={postId}
            postId={postId}
            postThumbnailPath={postThumbnailPath}
            title={title}
            createDate={createDate}
            latitude={latitude}
            longitude={longitude}
          />
        ),
      )}
    </S.MainThumbnailListContainer>
  );
}
