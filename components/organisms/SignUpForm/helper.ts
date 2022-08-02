import { nanoid } from 'nanoid';
import { IInputState, ITextInputProps } from 'types';
import { emailRegx, nickNameRegx, passwordRegx } from 'utils';

const validateEmail = ({ email }: { email: string }) => {
  if (!email) return '이메일을 입력해주세요';

  if (!emailRegx.test(email)) return '이메일 형식이 올바르지 않습니다.';

  return '';
};

const validateNickName = ({ nickName }: { nickName: string }) => {
  if (!nickName) return '닉네임을 입력해주세요';

  if (!nickNameRegx.test(nickName))
    return '닉네임은 4자 이상 20자 이하로 입력해주세요';

  return '';
};

const validatePassword = ({ password }: { password: string }) => {
  if (!password) return '비밀번호를 입력해주세요';

  if (!passwordRegx.test(password))
    return '비밀번호는 대소문자, 숫자, 특수 문자를 하나라도 포함하여 8자 이상으로 입력해주세요';

  return '';
};

const validateConfirmPassword = ({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) => {
  if (!confirmPassword) return '비밀번호를 입력해주세요';

  if (password !== confirmPassword) return '비밀번호가 일치하지 않습니다';

  return '';
};

export const validateValues = ({
  email,
  nickName,
  password,
  confirmPassword,
}: IInputState) => {
  const errors: IInputState = {
    email: '',
    nickName: '',
    password: '',
    confirmPassword: '',
  };

  errors.email = validateEmail({ email });

  errors.nickName = validateNickName({ nickName });

  errors.password = validatePassword({ password });

  errors.confirmPassword = validateConfirmPassword({
    password,
    confirmPassword,
  });

  return errors;
};

export const textInputsProps: Array<ITextInputProps> = [
  {
    key: nanoid(),
    name: 'email',
    type: 'email',
    text: '이메일',
    placeholder: '이메일 주소를 입력해주세요',
  },
  {
    key: nanoid(),
    name: 'nickName',
    type: 'text',
    text: '닉네임',
    placeholder: '닉네임을 입력해주세요',
  },
  {
    key: nanoid(),
    name: 'password',
    type: 'password',
    text: '비밀번호',
    placeholder: '비밀번호를 입력해주세요',
  },
  {
    key: nanoid(),
    name: 'confirmPassword',
    type: 'password',
    text: '비밀번호 확인',
    placeholder: '비밀번호를 한번 더 입력해주세요',
  },
];

export const parseSignUpFormValues = ({
  handleChange,
  removeAll,
  value,
  error,
  name,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeAll: (name: string) => void;
  value: string;
  error: string;
  name: string | undefined;
}) => {
  return {
    value,
    onChange: handleChange,
    error,
    deleteAll: () => removeAll(`${name}`),
  };
};
