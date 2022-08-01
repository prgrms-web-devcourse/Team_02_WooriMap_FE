import { nanoid } from 'nanoid';
import { ITextInputProps } from 'types';

export const initialState: Array<ITextInputProps> = [
  {
    key: nanoid(),
    name: 'email',
    text: '이메일',
    type: 'email',
    placeholder: '이메일 주소를 입력해주세요',
    onChange: () => {},
    deleteAll: () => {},
  },
  {
    key: nanoid(),
    name: 'nickname',
    text: '닉네임',
    type: 'text',
    placeholder: '닉네임을 입력해주세요',
    onChange: () => {},
    deleteAll: () => {},
  },
  {
    key: nanoid(),
    name: 'password',
    text: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력해주세요',
    onChange: () => {},
    deleteAll: () => {},
  },
  {
    key: nanoid(),
    name: 'passwordConfirm',
    text: '비밀번호 확인',
    type: 'password',
    placeholder: '비밀번호를 한번 더 입력해주세요',
    onChange: () => {},
    deleteAll: () => {},
  },
];
