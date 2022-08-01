/* eslint-disable jsx-a11y/label-has-associated-control */
import { ITextInputProps } from 'types';
import { TextInput } from 'components';
import * as S from './TextInputWithLabel.styles';

export function TextInputWithLabel(props: ITextInputProps) {
  const { name, text } = props;

  return (
    <S.Container>
      <label htmlFor={name}>{text}</label>
      <TextInput {...props} />
    </S.Container>
  );
}
