import { IThumbnailCardProps } from 'types';
import Image from 'next/image';
import arrowRight from 'public/image/arrowRight.svg';
import { CircularIcon } from 'components';
import * as S from './MapMarkerOverlay.styles';

// export interface IThumbnailCardProps {
//   postId: string;
//   postThumbnailPath: string;
//   title: string;
//   createDate: string;
//   latitude?: string;
//   longitude?: string;
// }

export function MapMarkerOverlay({
  postId,
  postThumbnailPath,
  title,
  createDate,
}: IThumbnailCardProps) {
  const onMapMarkerOverlayClick = (postId: string) => {
    alert(`포스트 아이디가 ${postId}인 맵 오버레이를 클릭하셨군요 ♪( 'ω' و(و"`);
  };
  return (
    <S.Container onClick={() => onMapMarkerOverlayClick(postId)}>
      <S.ImageContainer>
        <Image
          src={postThumbnailPath}
          width={7 * 16}
          height={7 * 16}
          alt="미리보기 사진"
        />
      </S.ImageContainer>
      <S.ContentContainer>
        <div>
          <S.Title>{title}</S.Title>
          <S.Date>{createDate}</S.Date>
        </div>
        <S.IconContainer>
          <CircularIcon icon={arrowRight} color="rgba(255, 143, 143, 0.5)" />
        </S.IconContainer>
      </S.ContentContainer>
    </S.Container>
  );
}
