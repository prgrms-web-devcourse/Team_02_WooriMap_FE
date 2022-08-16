import userState from 'core';
import Image from 'next/image';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import { breakUpWithCouple } from 'apis/couple';
import { calculateDDay } from 'utils';
import { IUserProfileProps } from 'types';
import { useAxiosInstance } from 'hooks';
import LocalStorage from 'utils/storage';
import { useState } from 'react';
import { Modal } from 'components';
import { modalImage } from 'public/image';
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
  const [isVisible, setVisible] = useState<boolean>(false);

  const onBreakUp = async () => {
    const response = await breakUpWithCouple({ instance });

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
  };

  const handleBreakUpClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setVisible(true);
  };

  const handleBreakUpConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onBreakUp();
  };

  const handleBreakUpReject = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setVisible(false);
  };

  const handleClickAway = () => {
    setVisible(false);
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
            D + {startDate && calculateDDay(startDate)}
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
          <S.EditButtonWrapper>
            <S.ProfileEditButton size="xlarge">프로필 수정</S.ProfileEditButton>
          </S.EditButtonWrapper>
        </Link>
        <S.Withdrawal isCouple={isCouple} onClick={handleBreakUpClick}>
          커플끊기
        </S.Withdrawal>
      </S.CoupleInfoWrapper>
      <Modal isVisible={isVisible} onClose={handleClickAway}>
        <S.ModalContainer>
          <Image src={modalImage} alt="경고 이미지" width={48} height={48} />
          <S.ModalTitle>커플끊기 확인</S.ModalTitle>
          <S.ModalContent>
            커플 상태를 해제하시면 복구하실 수 없어요
            <br />
            정말로 해제하시겠어요?
          </S.ModalContent>
          <S.ModalOptions>
            <S.ConfirmButton size="small" onClick={handleBreakUpConfirm}>
              네, 해제합니다
            </S.ConfirmButton>
            <S.CancelButton size="small" onClick={handleBreakUpReject}>
              취소
            </S.CancelButton>
          </S.ModalOptions>
        </S.ModalContainer>
      </Modal>
    </S.UserProfileBackground>
  );
}
