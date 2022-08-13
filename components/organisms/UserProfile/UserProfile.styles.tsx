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
  gap: 16px;

  margin-top: 76px;
`;

export const MakeCoupleButton = styled(Button)``;
export const ProfileEditButton = styled(Button)`
  margin-top: 2rem;
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
`;
