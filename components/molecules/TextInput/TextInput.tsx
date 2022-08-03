import React, { InputHTMLAttributes } from 'react';
import deleteIcon from 'public/image/delete.svg';
import * as S from './TextInput.styles';

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClickButton: (e?: React.MouseEvent<HTMLImageElement>) => void;
}

export function TextInput({ onClickButton, ...props }: ITextInputProps) {
  return (
    <S.TextInputWrapper>
      <S.TextInput {...props} />
      <S.DeleteButton
        src={deleteIcon}
        alt="Delete All"
        width={16}
        height={16}
        onClick={onClickButton}
      />
    </S.TextInputWrapper>
  );
}
