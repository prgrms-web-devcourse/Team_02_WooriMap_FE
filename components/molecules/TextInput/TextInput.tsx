import React, { InputHTMLAttributes } from 'react';
import { DeleteAllBtn } from 'components';
import * as S from './TextInput.styles';

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClickButton: (e?: React.MouseEvent<HTMLImageElement>) => void;
}

export function TextInput({ onClickButton, ...props }: ITextInputProps) {
  return (
    <S.TextInputWrapper>
      <S.TextInput {...props} />
      <DeleteAllBtn onClick={onClickButton} />
    </S.TextInputWrapper>
  );
}
