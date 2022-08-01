interface IValidate {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

export const validateValues = ({
  email,
  nickname,
  password,
  confirmPassword,
}: IValidate) => {
  const errors: IValidate = {
    email: '',
    nickname: '',
    password: '',
    confirmPassword: '',
  };

  if (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
    errors.email = '이메일 형식이 올바르지 않습니다.';
  }

  if (!email) {
    errors.email = '이메일을 입력해주세요';
  }

  if (/^[a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|0-9]{1,15}$/.test(nickname) === false) {
    errors.nickname = '닉네임은 4자 이상 20자 이하로 입력해주세요';
  }

  if (!nickname) {
    errors.nickname = '닉네임을 입력해주세요';
  }

  if (!password) {
    errors.password = '비밀번호를 입력해주세요';
  }

  if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}/.test(password) === false) {
    errors.password =
      '비밀번호는 대소문자, 숫자, 특수 문자를 하나라도 포함하여 8자 이상으로 입력해주세요';
  }

  if (!confirmPassword) {
    errors.confirmPassword = '비밀번호를 입력해주세요';
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = '비밀번호가 일치하지 않습니다';
  }

  return errors;
};
// import { nanoid } from 'nanoid';
// import { ITextInputProps } from 'types';

// export const initialValues: Array<ITextInputProps> = [
//   {
//     key: nanoid(),
//     name: 'email',
//     text: '이메일',
//     type: 'email',
//     placeholder: '이메일 주소를 입력해주세요',
//     deleteAll: () => {},
//   },
//   {
//     key: nanoid(),
//     name: 'nickname',
//     text: '닉네임',
//     type: 'text',
//     placeholder: '닉네임을 입력해주세요',
//     deleteAll: () => {},
//   },
//   {
//     key: nanoid(),
//     name: 'password',
//     text: '비밀번호',
//     type: 'password',
//     placeholder: '비밀번호를 입력해주세요',
//     deleteAll: () => {},
//   },
//   {
//     key: nanoid(),
//     name: 'passwordConfirm',
//     text: '비밀번호 확인',
//     type: 'password',
//     placeholder: '비밀번호를 한번 더 입력해주세요',
//     deleteAll: () => {},
//   },
// ];
