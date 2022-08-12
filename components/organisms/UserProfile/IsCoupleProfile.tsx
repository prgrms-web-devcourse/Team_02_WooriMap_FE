import userState from 'core';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import { breakUpWithCouple } from 'apis/couple';
import { calculatingDDay } from 'utils';
import { IUserProfileProps } from 'types';
import { useAxiosInstance } from 'hooks';
import LocalStorage from 'utils/storage';
import * as S from './UserProfile.styles';

export function IsCoupleProfile({
  isCouple,
  nickName,
  coupleNickName,
  startDate,
  imageUrl,
  email,
  ...props
}: IUserProfileProps) {
  const query = { isCouple, imageUrl, nickName, startDate };
  const instance = useAxiosInstance();
  const setUser = useSetRecoilState(userState);

  const onBreakUp = async () => {
    if (window.confirm('혹시.. 이별하셨나요?')) {
      const response = await breakWithUpCouple({ instance });

      if (response) {
        const { accessToken } = response;

        LocalStorage.setItem('accessToken', accessToken);
        setUser({
          isCouple: false,
          imageUrl: imageUrl as string,
          nickName: nickName as string,
          email: email as string,
        });
      }
    }
  };

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
      </S.CoupleInfoWrapper>
      <Link
        href={{
          pathname: '/profile/edit',
          query,
        }}
        as="/profile/edit"
      >
        <S.ProfileEditButton size="xlarge">프로필 수정</S.ProfileEditButton>
      </Link>
      <S.Withdrawal isCouple={isCouple} onClick={onBreakUp}>
        커플끊기
      </S.Withdrawal>
    </S.UserProfileBackground>
  );
}
