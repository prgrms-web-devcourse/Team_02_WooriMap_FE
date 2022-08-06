import { InputHTMLAttributes } from 'react';
import { DeleteAllBtn } from 'components';
import { THandleChange } from 'types';
import * as S from './TextArea.styles';

interface ITextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  handleChange: THandleChange;
  onClickButton: (e: React.MouseEvent<HTMLImageElement>) => void;
}

export function TextArea({
  id,
  name,
  value,
  placeholder,
  handleChange,
  onClickButton,
}: ITextAreaProps) {
  return (
    <S.TextAreaWrapper>
      <S.TextArea
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange({ e })}
      />
      <DeleteAllBtn onClick={onClickButton} />
    </S.TextAreaWrapper>
  );
}
