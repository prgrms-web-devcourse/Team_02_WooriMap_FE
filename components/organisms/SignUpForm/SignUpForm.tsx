import { useState } from 'react';
import { ITextInputProps } from 'types';
import { FormBackground, TextInputWithLabel } from 'components';
import { initialState } from './helper';
import * as S from './SignUpForm.styles';

export function SignUpForm() {
  const [inputs, setInputs] = useState<Array<ITextInputProps>>(initialState);

  return (
    <FormBackground>
      <S.Container>
        {inputs.map((input: ITextInputProps) => (
          <TextInputWithLabel key={input.key} {...input} />
        ))}
      </S.Container>
    </FormBackground>
  );
}
