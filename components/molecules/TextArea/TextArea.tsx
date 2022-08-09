import { InputHTMLAttributes } from 'react';
import { DeleteAllBtn } from 'components';
import { HandleChangeTypes, ITagState } from 'types';
import * as S from './TextArea.styles';

interface ITextAreaProps
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'value'> {
  value: string | Array<ITagState>;
  handleChange: HandleChangeTypes;
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
        value={value as string}
        placeholder={placeholder}
        onChange={(e) => handleChange({ e })}
      />
      <DeleteAllBtn onClick={onClickButton} />
    </S.TextAreaWrapper>
  );
}
