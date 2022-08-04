import styled from '@emotion/styled';
import { FormBackground, Button, Profile } from 'components';
import { IUserProfile } from 'types/couple';

interface ICoupleInfoprops {
  isCoupleDateInfo?: boolean;
}

export const UserProfileBackground = styled(FormBackground)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  margin-top: 63px;
  gap: 32px;
  display: flex;
  justify-content: space-between;
`;

export const UserProfile = styled(Profile)``;

export const UserNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.p`
  font-size: 36px;
  font-weight: 900;
  font-family: serif;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 76px;
`;

export const MakeCoupleButton = styled(Button)``;
export const ProfileEditButton = styled(Button)``;

export const CoupleInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 51px;
  margin-bottom: 62px;
  font-size: 20px;
`;

export const CoupleInfoRow = styled.div``;
export const CoupleInfoLabel = styled.label<ICoupleInfoprops>`
  font-weight: 900;
  margin-right: ${({ isCoupleDateInfo }) =>
    isCoupleDateInfo ? '51px' : '32px'};
`;
export const CoupleInfo = styled.span`
  font-weight: 500;
`;

export const StartringDate = styled.span`
  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  /* width: 128px;
  height: 32px; */

  margin-left: 21px;
  padding: 4.5px 23.5px;
`;

export const Withdrawal = styled.span<IUserProfile>`
  color: ${({ theme }) => theme.colors.gray};
  margin-top: ${({ isCouple }) => (isCouple ? '78px' : '109px')};
  margin-bottom: 33px;
`;
