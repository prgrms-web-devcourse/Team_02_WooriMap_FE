import Link from 'next/link';
import { IUserProfileProps } from 'types';
import * as S from './UserProfile.styles';

export function IsNotCoupleProfile({
  imageUrl,
  isCouple,
  nickName,
  ...props
}: IUserProfileProps) {
  return (
    <S.UserProfileBackground {...props}>
      <S.ProfileWrapper>
        <S.UserProfile path={imageUrl} width={128} height={128} />
        <S.UserNameWrapper>
          <S.UserName>{nickName && nickName}</S.UserName>
        </S.UserNameWrapper>
      </S.ProfileWrapper>
      <S.ButtonWrapper>
        <Link href="/profile/invite">
          <S.MakeCoupleButton variant="pink" size="xlarge">
            커플 맺기
          </S.MakeCoupleButton>
        </Link>
        <Link href="/profile/edit">
          <S.ProfileEditButton size="xlarge">프로필 수정</S.ProfileEditButton>
        </Link>
        <S.Withdrawal isCouple={isCouple}>회원탈퇴</S.Withdrawal>
      </S.ButtonWrapper>
    </S.UserProfileBackground>
  );
}
