import styled from '@emotion/styled';
import { FormBackground, Button } from 'components';

export const CoupleInviteFormBackground = styled(FormBackground)`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  font-family: 'Noto Serif KR', serif;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 10rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.5rem;
  font-weight: 900;
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 2rem;

  width: 100%;
  height: 10rem;
  padding: 2rem 3rem;

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.whiteTransparent};
`;

export const CodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  width: 100%;
`;

export const Label = styled.label`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  word-break: break-all;
`;
export const Code = styled.span`
  font-size: 1.25rem;
  font-weight: 900;
`;

export const InviteButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
`;
export const InviteButton = styled(Button)`
  width: 100%;
  height: 3.5rem;

  border: none;
  border-radius: 0.5rem;

  color: white;
  background: ${({ disabled, theme }) =>
    disabled === true
      ? theme.colors.gray
      : `linear-gradient(to top right, #ffcfcf, #ff8299)`};
  box-shadow: ${({ theme }) => theme.boxShadow.atom};

  font-size: 0.95rem;
  font-weight: 700;
  line-height: 3.5rem;

  opacity: 50%;
  cursor: pointer;

  transition: ${({ theme }) => theme.opacityTransition};

  :hover {
    opacity: 100%;
  }
`;

export const InviteConfrimButton = styled(Button)`
  width: 100%;
  height: 3.5rem;

  border: 0.15rem solid ${({ theme }) => theme.colors.pink};
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.colors.pink};

  font-size: 0.95rem;
  font-weight: 700;
  line-height: 3.3rem;
  text-shadow: none;

  opacity: 70%;
  cursor: pointer;

  transition: ${({ theme }) => theme.opacityTransition};

  :hover {
    opacity: 100%;
  }
`;

export const Back = styled.span`
  width: 100%;

  margin-top: 8px;
  margin-bottom: 2px; // 34px - 2rem
  color: ${({ theme }) => theme.colors.gray};

  font-size: 0.7rem;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;

  cursor: pointer;
`;

export const Error = styled.span`
  width: 100%;
  height: fit-content;

  text-align: center;
  color: ${({ theme }) => theme.colors.alert};

  font-size: 0.7rem;
`;
