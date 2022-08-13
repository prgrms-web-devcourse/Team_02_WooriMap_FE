import Link from 'next/link';
import { calculatingDDay } from 'utils';
import { IUserProfileProps } from 'types';
import * as S from './UserProfile.styles';

export function IsCoupleProfile({
  isCouple,
  nickName,
  coupleNickName,
  startDate,
  imageUrl,
  ...props
}: IUserProfileProps) {
  const query = { isCouple, imageUrl, nickName, startDate };
  return (
    <S.UserProfileBackground {...props}>
      <S.ProfileWrapper>
        <S.UserProfile path={imageUrl} width={112} height={112} />
        <S.UserNameWrapper>
          <S.UserName>{nickName && nickName}</S.UserName>
        </S.UserNameWrapper>
      </S.ProfileWrapper>
      <S.CoupleInfoWrapper>
        <S.CoupleInfoRow>
          <S.CoupleInfoLabel>맺어진 상대</S.CoupleInfoLabel>
          <S.CoupleInfo>{coupleNickName && coupleNickName}</S.CoupleInfo>
        </S.CoupleInfoRow>
        <S.CoupleInfoRow>
          <S.CoupleInfoLabel isCoupleDateInfo>연애 기간</S.CoupleInfoLabel>
          <S.CoupleInfo>
            D + {startDate && calculatingDDay(startDate)}
          </S.CoupleInfo>
          <S.StartringDate>{startDate && startDate}</S.StartringDate>
        </S.CoupleInfoRow>
        <Link
          href={{
            pathname: '/profile/edit',
            query,
          }}
          as="/profile/edit"
        >
          <S.ProfileEditButton size="xlarge">프로필 수정</S.ProfileEditButton>
        </Link>
        <S.Withdrawal isCouple={isCouple}>회원탈퇴</S.Withdrawal>
      </S.CoupleInfoWrapper>
    </S.UserProfileBackground>
  );
}
