import React, { InputHTMLAttributes } from 'react';
import { THandleChange } from 'types';
import { DeleteAllBtn } from 'components';
import * as S from './TextInput.styles';

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClickButton: (e?: React.MouseEvent<HTMLImageElement>) => void;
  handleChange: THandleChange;
}

export function TextInput({ onClickButton, ...props }: ITextInputProps) {
  const { handleChange, ...rest } = props as ITextInputProps;

  return (
    <S.TextInputWrapper>
      <S.TextInput onChange={(e) => handleChange({ e })} {...rest} />
      <DeleteAllBtn onClick={onClickButton} />
    </S.TextInputWrapper>
  );
}
