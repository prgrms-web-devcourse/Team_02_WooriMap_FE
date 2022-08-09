import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { IButtonStyleProps } from 'types';

const disabledButtonStyle = ({ theme }: IThemeProps) => css`
  border: 0;
  outline: 0;
  color: ${theme.colors.white};
  background-color: ${theme.colors.gray};
  cursor: default;
  pointer-events: none;
`;

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

const pinkButtonStyle = ({ theme }: IThemeProps) => css`
  border: 0;
  outline: 0;
  color: ${theme.colors.black};
  background-color: ${theme.colors.pink};
  border: 3px solid ${theme.colors.black};
`;

export const Button = styled.button<IButtonStyleProps>`
  cursor: pointer;
  appearance: none;
  text-align: center;
  text-decoration: none;
  margin: 0;
  box-sizing: border-box;

  font-weight: bold;
  border-radius: 8px;

  ${({
    size,
    theme: {
      sizes: { buttons },
    },
  }) => {
    switch (size) {
      case 'xsmall':
        return buttons.xsmall;
      case 'small':
        return buttons.small;
      case 'medium':
        return buttons.medium;
      case 'large':
        return buttons.large;
      case 'xlarge':
        return buttons.xlarge;
      default:
        return null;
    }
  }}

  ${({ variant, disabled }) => {
    if (disabled) return disabledButtonStyle;

    switch (variant) {
      case 'black':
        return blackButtonStyle;

      case 'grayOutlined':
        return grayOutlinedButtonStyle;

      case 'pink':
        return pinkButtonStyle;

      default:
        return blackOutlinedButtonStyle;
    }
  }};
`;
