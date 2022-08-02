import { useRouter } from 'next/router';
import { IInputState, ITextInputProps, ISingnUpRes } from 'types';
import { useForm } from 'hooks';
import {
  FormBackground,
  TextInputWithLabel,
  SubmitButton,
  AuthPageRoutingButton,
  AuthLogoImage,
} from 'components';
import {
  validateValues,
  textInputsProps,
  parseSignUpFormValues,
} from './helper';
import * as S from './SignUpForm.styles';

export function SignUpForm() {
  const router = useRouter();

  const onSubmit = async (values: IInputState): Promise<ISingnUpRes> => {
    const { email, nickName, password } = values;

    try {
      const res = await fetch('http://52.79.88.242/api/members/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          nickName,
        }),
      });

      if (res.status === 201) {
        router.push('/signin');
        return { message: '' };
      }

      const body = await res.json();

      return body;
    } catch (e) {
      console.error(e);

      return {
        message: '서버에러',
      };
    }
  };

  const initialValues = {
    email: '',
    nickName: '',
    password: '',
    confirmPassword: '',
  };

  const { values, handleChange, handleSubmit, errors, removeAll } =
    useForm<IInputState>({
      initialValues,
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
                name,
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
