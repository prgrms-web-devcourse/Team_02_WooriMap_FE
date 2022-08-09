import React, { InputHTMLAttributes } from 'react';
import { HandleChangeTypes, ITagState } from 'types';
import { DeleteAllBtn } from 'components';
import * as S from './TextInput.styles';

interface ITextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  value: string | Array<ITagState>;
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
      <DeleteAllBtn onClick={onClickButton} />
    </S.TextInputWrapper>
  );
}
