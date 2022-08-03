import { DeleteAllBtn } from 'components';
import * as S from './TextArea.styles';

export function TextArea() {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
  };

  return (
    <S.TextAreaWrapper>
      <S.TextArea onChange={onChange} />
      <DeleteAllBtn onClick={() => {}} />
    </S.TextAreaWrapper>
  );
}
