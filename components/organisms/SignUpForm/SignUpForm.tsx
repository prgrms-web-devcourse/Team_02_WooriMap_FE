import { IInputState, ITextInputProps } from 'types';
import { useForm } from 'hooks';
import {
  FormBackground,
  TextInputWithLabel,
  SubmitButton,
  AuthPageRoutingButton,
  AuthLogoImage,
} from 'components';
import { signup } from 'apis/auth';
import {
  validateValues,
  textInputsProps,
  parseSignUpFormValues,
} from './helper';
import * as S from './SignUpForm.styles';

export function SignUpForm() {
  const initialValues = {
    email: '',
    nickName: '',
    password: '',
    confirmPassword: '',
  };

  const { values, handleChange, handleSubmit, errors, removeAll } =
    useForm<IInputState>({
      initialValues,
      onSubmit: signup,
      validateValues,
    });

  return (
    <FormBackground onSubmit={handleSubmit} noValidate>
      <S.Container>
        <AuthLogoImage />
        {textInputsProps.map((input: ITextInputProps) => {
          const { name } = input;

          return (
            // eslint-disable-next-line react/jsx-key
            <TextInputWithLabel
              {...input}
              {...parseSignUpFormValues({
                handleChange,
                removeAll,
                value: values[name as keyof IInputState] as string,
                error: errors[name as keyof IInputState] as string,
              })}
            />
          );
        })}
        <S.FinalValidationError>{errors.finalError}</S.FinalValidationError>
        <SubmitButton text="회원가입" />
        <AuthPageRoutingButton type="signup" />
      </S.Container>
    </FormBackground>
  );
}
