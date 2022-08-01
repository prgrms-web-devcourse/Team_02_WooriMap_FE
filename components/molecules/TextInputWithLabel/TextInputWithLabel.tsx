/* eslint-disable jsx-a11y/label-has-associated-control */
import { ITextInputProps } from 'types';
import { TextInput } from 'components';
import * as S from './TextInputWithLabel.styles';

export function TextInputWithLabel({
  name,
  type,
  placeholder,
  onChange,
  deleteAll,
}: ITextInputProps) {
  return (
    <S.Container>
      <label htmlFor={name}>hello</label>
      <TextInput name={name} />
    </S.Container>
  );
}
