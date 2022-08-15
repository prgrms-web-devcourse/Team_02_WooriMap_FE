import userState from 'core';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { IUserProfileProps } from 'types';
import { withdrawFromMember } from 'apis/members';
import { useAxiosInstance } from 'hooks';
import LocalStorage from 'utils/storage';
import * as S from './UserProfile.styles';

export function IsNotCoupleProfile({
  imageUrl,
  isCouple,
  nickName,
  ...props
}: IUserProfileProps) {
  const router = useRouter();
  const instance = useAxiosInstance();
  const setUser = useSetRecoilState(userState);

  const onWithDraw = async () => {
    if (window.confirm('회원탈퇴 하시겠습니까?')) {
      const response = await withdrawFromMember({ instance });

      if (response) {
        LocalStorage.removeItem('accessToken');
        setUser(null);
        router.push('/auth/signin');
      }
    }
  };

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
        <S.Withdrawal isCouple={isCouple} onClick={onWithDraw}>
          회원탈퇴
        </S.Withdrawal>
      </S.ButtonWrapper>
    </S.UserProfileBackground>
  );
}
