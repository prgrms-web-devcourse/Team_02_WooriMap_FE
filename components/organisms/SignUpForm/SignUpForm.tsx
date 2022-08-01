import { FormBackground, TextInputWithLabel } from 'components';
import * as S from './SignUpForm.styles';

export function SignUpForm() {
  return (
    <FormBackground>
      <S.Container>
        <TextInputWithLabel name="닉네임" />
      </S.Container>
    </FormBackground>
  );
}
