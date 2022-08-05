import { DeleteAllBtn } from 'components';
import * as S from './TextArea.styles';

interface ITextAreaProps {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClickButton: (e: React.MouseEvent<HTMLImageElement>) => void;
}

export function TextArea({
  id,
  name,
  value,
  placeholder,
  onChange,
  onClickButton,
}: ITextAreaProps) {
  return (
    <S.TextAreaWrapper>
      <S.TextArea
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <DeleteAllBtn onClick={onClickButton} />
    </S.TextAreaWrapper>
  );
}
