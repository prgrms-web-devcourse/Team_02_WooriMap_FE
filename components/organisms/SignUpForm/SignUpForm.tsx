import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
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

interface IOnSubmit<T> {
  values: T;
  setErrors?: Dispatch<SetStateAction<T>>;
}

export function SignUpForm() {
  const router = useRouter();
  const initialValues = {
    email: '',
    nickName: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = async ({ values, setErrors }: IOnSubmit<IInputState>) => {
    const res = await signup({ values });

    if (res.message) {
      setErrors?.((prev) => ({ ...prev, finalError: res.message }));
    } else {
      router.push('/auth/signin');
    }
  };

  const { values, handleChange, handleSubmit, errors, removeAll } = useForm<
    IInputState,
    IInputState,
    IInputState
  >({
    initialValues,
    errorState: { ...initialValues },
    onSubmit,
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
