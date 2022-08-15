import { IThumbnailCardProps } from 'types';
import Image from 'next/image';
import arrowRight from 'public/image/arrowRight.svg';
import Link from 'next/link';
import { CircularIcon } from 'components';
import * as S from './MapMarkerOverlay.styles';

export function MapMarkerOverlay({
  postId,
  postThumbnailPath,
  title,
  createDate,
}: IThumbnailCardProps) {
  return (
    <S.Container>
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
          <Link href={`/post/${postId}`}>
            <S.CircularIconContainer>
              <CircularIcon src={arrowRight} color="rgba(255, 143, 143, 0.5)" />
            </S.CircularIconContainer>
          </Link>
        </S.IconContainer>
      </S.ContentContainer>
    </S.Container>
  );
}
