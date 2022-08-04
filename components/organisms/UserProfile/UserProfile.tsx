import { IUserProfile } from 'types/couple';
import * as S from './UserProfile.styles';

interface IUserProfileProps extends IUserProfile {
  nickName: string;
  coupleNickName?: string;
  coupleStartingDate?: string;
}

export function UserProfile({
  isCouple,
  nickName,
  coupleNickName,
  coupleStartingDate,
  ...props
}: IUserProfileProps) {
  if (isCouple) {
    return (
      <S.UserProfileBackground {...props}>
        <S.ProfileWrapper>
          <S.UserProfile width={128} height={128} />
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
              D + 237
              {/* D + {coupleStartingDate && calculatFunc(coupleStartingDate)} */}
            </S.CoupleInfo>
            <S.StartringDate>
              {coupleStartingDate && coupleStartingDate}
            </S.StartringDate>
          </S.CoupleInfoRow>
        </S.CoupleInfoWrapper>
        <S.ProfileEditButton size="xlarge">프로필 수정</S.ProfileEditButton>
        <S.Withdrawal isCouple={isCouple}>회원탈퇴</S.Withdrawal>
      </S.UserProfileBackground>
    );
  }

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
          커플 맺기
        </S.MakeCoupleButton>
        <S.ProfileEditButton size="xlarge">프로필 수정</S.ProfileEditButton>
      </S.ButtonWrapper>
      <S.Withdrawal isCouple={isCouple}>회원탈퇴</S.Withdrawal>
    </S.UserProfileBackground>
  );
}
