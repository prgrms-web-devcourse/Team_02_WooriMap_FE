/* eslint-disable jsx-a11y/label-has-associated-control */
import { ITextInputProps } from 'types';
import { TextInput } from 'components';
import * as S from './TextInputWithLabel.styles';

interface ITextInputWithLabelProps extends ITextInputProps {
  error: string;
}

export function TextInputWithLabel(props: ITextInputWithLabelProps) {
  const { name, text, error } = props;

  return (
    <S.Container>
      <S.Wrapper>
        <label htmlFor={name}>{text}</label>
        <TextInput {...props} />
      </S.Wrapper>
      <S.ValidationError>{error}</S.ValidationError>
    </S.Container>
  );
}
