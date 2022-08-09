import { nanoid } from 'nanoid';

import { ITextInputProps, HandleChangeTypes } from 'types';

export const textInputsProps: Array<ITextInputProps> = [
  {
    key: nanoid(),
    name: 'email',
    type: 'email',
    variant: 'input',
    text: '이메일',
    placeholder: '이메일 주소를 입력해주세요',
  },
  {
    key: nanoid(),
    name: 'nickName',
    type: 'text',
    variant: 'input',
    text: '닉네임',
    placeholder: '닉네임을 입력해주세요',
  },
  {
    key: nanoid(),
    name: 'password',
    type: 'password',
    variant: 'input',
    text: '비밀번호',
    placeholder: '비밀번호를 입력해주세요',
  },
  {
    key: nanoid(),
    name: 'confirmPassword',
    type: 'password',
    variant: 'input',
    text: '비밀번호 확인',
    placeholder: '비밀번호를 한번 더 입력해주세요',
  },
];

export const parseSignUpFormValues = ({
  handleChange,
  removeAll,
  value,
  error,
}: {
  handleChange: HandleChangeTypes;
  removeAll: (name: string) => void;
  value: string;
  error: string;
}) => {
  return {
    value,
    handleChange,
    error,
    deleteAll: removeAll,
  };
};
