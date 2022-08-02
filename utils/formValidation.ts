/**
 * 이메일 정규식
 *
 * 이메일 형식이 아니라면 예외
 * 길이: 50자 이하
 */
const emailRegx =
  /(?=^.{1,50}$)(^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$)/;

/**
 * 닉네임 정규식
 *
 * 길이 : 15자 이하
 */
const nickNameRegx = /^[a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|0-9]{1,15}$/;

/**
 * 비밀번호 정규식
 *
 * 길이 : 8자 이상 20자 이하
 * 대소문자, 숫자, 특수 문자를 하나라도 포함
 */
const passwordRegx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}/;

export default class FormValidation {
  readonly emailRegx: RegExp;

  readonly nickNameRegx: RegExp;

  readonly passwordRegx: RegExp;

  constructor() {
    this.emailRegx = emailRegx;
    this.nickNameRegx = nickNameRegx;
    this.passwordRegx = passwordRegx;
  }

  validateEmail = ({ email }: { email: string }) => {
    if (!email) return '이메일을 입력해주세요';

    if (!this.emailRegx.test(email)) return '이메일 형식이 올바르지 않습니다.';

    return '';
  };

  validateNickName = ({ nickName }: { nickName: string }) => {
    if (!nickName) return '닉네임을 입력해주세요';

    if (!this.nickNameRegx.test(nickName))
      return '닉네임은 4자 이상 20자 이하로 입력해주세요';

    return '';
  };

  validatePassword = ({ password }: { password: string }) => {
    if (!password) return '비밀번호를 입력해주세요';

    if (!this.passwordRegx.test(password))
      return '비밀번호는 대소문자, 숫자, 특수 문자를 하나라도 포함하여 8자 이상으로 입력해주세요';

    return '';
  };

  // eslint-disable-next-line class-methods-use-this
  validateConfirmPassword = ({
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
}