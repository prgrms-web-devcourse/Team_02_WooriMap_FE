import React, { InputHTMLAttributes } from 'react';
import { HandleChangeTypes, ITag } from 'types';
import { DeleteAllBtn } from 'components';
import * as S from './TextInput.styles';

interface ITextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  value: string | Array<ITag>;
  onClickButton: (e?: React.MouseEvent<HTMLImageElement>) => void;
  handleChange?: HandleChangeTypes;
}

export function TextInput({
  value,
  onClickButton,
  handleChange,
  ...props
}: ITextInputProps) {
  return (
    <S.TextInputWrapper>
      <S.TextInput
        value={value as string}
        onChange={(e) => handleChange?.({ e })}
        {...props}
      />
      <S.DeleteAllBtnContainer>
        <DeleteAllBtn onClick={onClickButton} />
      </S.DeleteAllBtnContainer>
    </S.TextInputWrapper>
  );
}
