import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface IButtonStyleProps {
  variant?: string;
}

const blackButtonStyle = ({ theme }: IThemeProps) => css`
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
`;

const blackOutlinedButtonStyle = ({ theme }: IThemeProps) => css`
  border: 0;
  outline: 0;
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  border: 3px solid ${theme.colors.black};
`;

const grayOutlinedButtonStyle = ({ theme }: IThemeProps) => css`
  border: 0;
  outline: 0;
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  border: 3px solid ${theme.colors.gray};
`;

export const Button = styled.button<IButtonStyleProps>`
  // example
  //color: ${({ theme }) => theme.colors.black};

  cursor: pointer;
  appearance: none;
  text-align: center;
  text-decoration: none;
  margin: 0;
  box-sizing: border-box;

  // 임시
  font-size: 16px;
  font-weight: bold;
  padding: 8px 32px;
  border-radius: 25px;

  ${({ variant }) => {
    switch (variant) {
      case 'black':
        return blackButtonStyle;

      case 'grayOutlined':
        return grayOutlinedButtonStyle;

      default:
        return blackOutlinedButtonStyle;
    }
  }};
`;