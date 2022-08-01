import { useRouter } from 'next/router';
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

interface IValidate {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

export function SignUpForm() {
  const router = useRouter();

  const onSubmit = async (values: IValidate) => {
    const { email, nickname, password } = values;

    try {
      const res = await fetch('http://52.79.88.242/api/members/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          nickName: nickname,
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
    nickname: '',
    password: '',
    confirmPassword: '',
  };

  const { values, handleChange, handleSubmit, errors, removeAll } =
    useForm<IValidate>({
      initialValues,
      onSubmit,
      validate: validateValues,
    });

  const { email, nickname, password, confirmPassword } = values;
  const {
    email: emailError,
    nickname: nicknameError,
    password: passwordError,
    confirmPassword: confirmPasswordError,
  } = errors as IValidate;

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
          name="nickname"
          type="text"
          value={nickname}
          text="닉네임"
          placeholder="닉네임을 입력해주세요"
          onChange={handleChange}
          deleteAll={() => removeAll('nickname')}
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
