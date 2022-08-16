import styled from '@emotion/styled';
import { FormBackground, Button, Profile } from 'components';
import { IUserProfile } from 'types';

interface ICoupleInfoprops {
  isCoupleDateInfo?: boolean;
}

export const UserProfileBackground = styled(FormBackground)`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.whiteTransparent};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 10rem;

  padding: 0 3rem;
`;

export const UserProfile = styled(Profile)`
  border: 1px solid;
`;

export const UserNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.p`
  height: 1.6rem;

  padding-right: 1rem;

  font-size: 1.5rem;
  font-weight: 900;
  font-family: 'Noto Serif KR', serif;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 1;
  gap: 0.5rem;

  position: relative;

  width: 100%;
  height: 10rem;

  padding: 3rem 2rem 5rem 2rem;

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.whiteTransparent};
`;

export const MakeCoupleButton = styled(Button)`
  width: 100%;
  height: 4rem;
  background: ${({ theme }) => theme.colors.white};

  border: 3px solid ${({ theme }) => theme.colors.pink};
  border-radius: 0.7rem;

  color: ${({ theme }) => theme.colors.pink};

  font-size: 1.1rem;
  font-weight: 400;

  box-shadow: ${({ theme }) => theme.boxShadow.molecule};

  opacity: 70%;
  transition: ${({ theme }) => theme.opacityTransition};

  :hover {
    opacity: 100%;
  }
`;

export const EditButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  flex-grow: 1;
  margin-bottom: 4rem;
`;
export const ProfileEditButton = styled(Button)`
  width: 100%;
  height: 4rem;
  background: linear-gradient(to top right, #ffcfcf, #ff8299);

  border: none;
  border-radius: 0.7rem;

  color: white;

  font-size: 1.1rem;
  font-weight: 400;

  box-shadow: ${({ theme }) => theme.boxShadow.molecule};

  opacity: 70%;
  transition: ${({ theme }) => theme.opacityTransition};

  :hover {
    opacity: 100%;
  }
`;

export const CoupleInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  flex-grow: 1;

  position: relative;

  width: 100%;

  padding: 3rem 3rem 0 3rem;

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.whiteTransparent};
`;

export const CoupleInfoRow = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;

  width: 100%;
  height: 1.5rem;
`;

export const CoupleInfoLabel = styled.label<ICoupleInfoprops>`
  font-family: 'Noto Serif KR', serif;
  font-size: 1.2rem;
  font-weight: 900;
`;

export const CoupleInfo = styled.span`
  font-weight: 500;
`;

export const StartringDate = styled.span`
  position: absolute;
  top: 1.5rem;
  right: 0;

  font-size: 0.9rem;
  font-weight: 700;
  opacity: 30%;
`;

export const Withdrawal = styled.span<IUserProfile>`
  position: absolute;
  bottom: 2rem;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.8rem;

  cursor: pointer;

  transition: color ease-in 0.2s;
  :hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  width: 25rem;
  height: 18rem;
  padding: 2rem 1rem;
  border-radius: 1rem;
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.alert};

  font-family: 'Noto Sans KR', serif;
  font-size: 1.2rem;
  font-weight: 700;

  opacity: 70%;
`;

export const ModalContent = styled.div`
  font-size: 0.8rem;
  line-height: 1rem;

  white-space: pre-wrap;
  word-wrap: break-word;

  text-align: center;
`;

export const ModalOptions = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 0.5rem;
  padding: 0.5rem 0rem;

  > button {
    width: 7rem;
    height: 3rem;

    border: none;
    border-radius: 0.5rem;

    box-shadow: ${({ theme }) => theme.boxShadow.atom};

    font-size: 0.8rem;
    line-height: 3rem;
    text-shadow: none;

    opacity: 50%;
    transition: ${({ theme }) => theme.opacityTransition};
    :hover {
      opacity: 80%;
    }
  }
`;

export const ConfirmButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.alert};
  color: ${({ theme }) => theme.colors.white};
`;

export const CancelButton = styled(Button)``;
