/* eslint-disable jsx-a11y/label-has-associated-control */
import { TextInput } from 'components';
import * as S from './TextInputWithLabel.styles';

export function TextInputWithLabel() {
  return (
    <S.Container>
      <label htmlFor="frist">hello</label>
      <TextInput name="first" />
    </S.Container>
  );
}
