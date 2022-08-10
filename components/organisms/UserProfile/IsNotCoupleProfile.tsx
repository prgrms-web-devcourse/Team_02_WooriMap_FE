import Link from 'next/link';
import { IUserProfileProps } from 'types/couple';
import * as S from './UserProfile.styles';

export function IsNotCoupleProfile({
  isCouple,
  nickName,
  ...props
}: IUserProfileProps) {
  return (
    <S.UserProfileBackground {...props}>
      <S.ProfileWrapper>
        <S.UserProfile width={128} height={128} />
        <S.UserNameWrapper>
          <S.UserName>{nickName && nickName}</S.UserName>
        </S.UserNameWrapper>
      </S.ProfileWrapper>
      <S.ButtonWrapper>
        <S.MakeCoupleButton variant="pink" size="xlarge">
          <Link href="/profile/invite">커플 맺기</Link>
        </S.MakeCoupleButton>
        <S.ProfileEditButton size="xlarge">프로필 수정</S.ProfileEditButton>
      </S.ButtonWrapper>
      <S.Withdrawal isCouple={isCouple}>회원탈퇴</S.Withdrawal>
    </S.UserProfileBackground>
  );
}
