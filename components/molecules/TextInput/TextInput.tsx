import React, { InputHTMLAttributes } from 'react';
import { HandleChangeTypes } from 'types';
import { DeleteAllBtn } from 'components';
import * as S from './TextInput.styles';

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClickButton: (e?: React.MouseEvent<HTMLImageElement>) => void;
  handleChange?: HandleChangeTypes;
}

export function TextInput({
  onClickButton,
  handleChange,
  ...props
}: ITextInputProps) {
  return (
    <S.TextInputWrapper>
      <S.TextInput onChange={(e) => handleChange?.({ e })} {...props} />
      <DeleteAllBtn onClick={onClickButton} />
    </S.TextInputWrapper>
  );
}
