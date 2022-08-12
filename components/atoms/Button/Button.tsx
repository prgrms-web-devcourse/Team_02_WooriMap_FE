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
  font-size: 1.2rem;
`;

const blackButtonStyle = ({ theme }: IThemeProps) => css`
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
  font-size: 1.2rem;
`;

const blackOutlinedButtonStyle = ({ theme }: IThemeProps) => css`
  border: 0;
  outline: 0;
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  border: 2px solid ${theme.colors.black};
  font-size: 1.2rem;
  line-height: 2rem;
  text-shadow: 0 4px 4px #00000033;
`;

const grayOutlinedButtonStyle = ({ theme }: IThemeProps) => css`
  border: 0;
  outline: 0;
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  border: 3px solid ${theme.colors.gray};
  font-size: 1.2rem;
`;

const pinkButtonStyle = ({ theme }: IThemeProps) => css`
  border: 0;
  outline: 0;
  color: ${theme.colors.black};
  background-color: ${theme.colors.pink};
  border: 3px solid ${theme.colors.black};
  font-size: 1.2rem;
`;

export const Button = styled.button<IButtonStyleProps>`
  cursor: pointer;
  appearance: none;
  text-align: center;
  text-decoration: none;
  margin: 0;
  box-sizing: border-box;

  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5rem;

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
