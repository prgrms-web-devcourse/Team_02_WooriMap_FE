import { useForm } from 'hooks';
// import { ITextInputProps } from 'types';
import { FormBackground, TextInputWithLabel } from 'components';
import { validateValues } from './helper';

import * as S from './SignUpForm.styles';

interface IValidate {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

export function SignUpForm() {
  const onSubmit = () => {
    console.log('submit');
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
          name="passwordConfirm"
          type="password"
          value={confirmPassword}
          text="비밀번호 확인"
          placeholder="비밀번호를 한번 더 입력해주세요"
          onChange={handleChange}
          deleteAll={() => removeAll('passwordConfirm')}
          error={confirmPasswordError}
        />
        <input type="submit" />
      </S.Container>
    </FormBackground>
  );
}