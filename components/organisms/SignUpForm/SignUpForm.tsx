import { useRouter } from 'next/router';
import { IInputState } from 'types';
import { useForm } from 'hooks';
import {
  FormBackground,
  TextInputWithLabel,
  SubmitButton,
  AuthPageRoutingButton,
} from 'components';
import MainLogo from 'public/image/main-logo-auth.svg';
import { validateValues } from './helper';
import * as S from './SignUpForm.styles';

export function SignUpForm() {
  const router = useRouter();

  const onSubmit = async (values: IInputState) => {
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
      validate: validateValues,
    });

  const { email, nickName, password, confirmPassword } = values;
  const {
    email: emailError,
    nickName: nicknameError,
    password: passwordError,
    confirmPassword: confirmPasswordError,
  } = errors as IInputState;

  return (
    <FormBackground onSubmit={handleSubmit} noValidate>
      <S.Container>
        <S.LogoImage src={MainLogo} width={60} height={120} alt="main-logo" />

        <TextInputWithLabel
          name="email"
          type="email"
          value={email}
          text="이메일"
          placeholder="이메일 주소를 입력해주세요"
          onChange={handleChange}
          deleteAll={() => removeAll('email')}
          error={emailError}
        />
        <TextInputWithLabel
          name="nickName"
          type="text"
          value={nickName}
          text="닉네임"
          placeholder="닉네임을 입력해주세요"
          onChange={handleChange}
          deleteAll={() => removeAll('nickName')}
          error={nicknameError}
        />
        <TextInputWithLabel
          name="password"
          type="password"
          value={password}
          text="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          onChange={handleChange}
          deleteAll={() => removeAll('password')}
          error={passwordError}
        />
        <TextInputWithLabel
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          text="비밀번호 확인"
          placeholder="비밀번호를 한번 더 입력해주세요"
          onChange={handleChange}
          deleteAll={() => removeAll('confirmPassword')}
          error={confirmPasswordError}
        />
        <SubmitButton text="회원가입" />
        <AuthPageRoutingButton type="signup" />
      </S.Container>
    </FormBackground>
  );
}
