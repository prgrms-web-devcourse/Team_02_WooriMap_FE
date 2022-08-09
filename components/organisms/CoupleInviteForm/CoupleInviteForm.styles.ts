import styled from '@emotion/styled';
import { FormBackground, Button } from 'components';

export const CoupleInviteFormBackground = styled(FormBackground)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  margin-top: 102px; // 136 - 2rem
  margin-bottom: 84px;
  font-weight: 900;
  font-size: 36px;
`;

export const CodeWrapper = styled.div`
  margin-bottom: 100px;
`;

// TextInputWithLabel과 css 맞추기

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  box-sizing: border-box;
  width: 100%;

  margin-bottom: 16px;
`;
export const Wrapper = styled.div`
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin-right: 22px;

  font-size: 20px;
  font-weight: bold;
  word-break: break-all;
  text-align: center;
`;
export const Code = styled.span`
  height: 20px;

  font-weight: 900;
  font-size: 20px;
  float: right;
`;

export const InviteButton = styled(Button)``;
export const InviteConfrimButton = styled(Button)`
  margin-top: 8px;
`;

export const Back = styled.span`
  margin-top: 8px;
  margin-bottom: 2px; // 34px - 2rem
  color: ${({ theme }) => theme.colors.gray};
`;
