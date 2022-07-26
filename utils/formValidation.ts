import {
  IPostValidationState,
  IPostValidationProps,
  IInputState,
  ITag,
} from 'types';

/* eslint-disable class-methods-use-this */
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
const nickNameRegx = /^[a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|0-9|\s]{1,15}$/;

/**
 * 비밀번호 정규식
 *
 * 길이 : 8자 이상 20자 이하
 * 대소문자, 숫자, 특수 문자를 하나라도 포함
 */
const passwordRegx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}/;

class FormValidation {
  readonly emailRegx: RegExp;

  readonly nickNameRegx: RegExp;

  readonly passwordRegx: RegExp;

  constructor() {
    this.emailRegx = emailRegx;
    this.nickNameRegx = nickNameRegx;
    this.passwordRegx = passwordRegx;
  }

  validateTitle = ({ title }: { title: string }): string => {
    if (!title) return '제목을 입력해주세요';

    return '';
  };

  validateImages = ({ imageUrls }: { imageUrls: Array<string> }): string => {
    if (!imageUrls.length) return '이미지를 최소 1개 등록 해주세요';

    if (imageUrls.length > 5) return '이미지는 최대 5개까지 등록 가능합니다';

    return '';
  };

  validateTags = ({ tags }: { tags: Array<ITag> }): string => {
    if (!tags.length) return '태그를 최소 1개 등록 해주세요';

    return '';
  };

  validateLatitude = ({ latitude }: { latitude: number }): string => {
    if (latitude === 0) return '위도를 설정해주세요!';
    if (latitude < 0 || latitude > 90) return '올바른 위도를 설정해주세요!';

    return '';
  };

  validateLongitude = ({ longitude }: { longitude: number }): string => {
    if (longitude === 0) return '경도를 설정해주세요!';
    if (longitude < 0 || longitude > 180) return '올바른 경도를 설정해주세요!';

    return '';
  };

  validateEmail = ({ email }: { email: string }) => {
    if (!email) return '이메일을 입력해주세요';

    if (!this.emailRegx.test(email)) return '이메일 형식이 올바르지 않습니다.';

    return '';
  };

  validateNickName = ({ nickName }: { nickName: string }) => {
    if (!nickName) return '닉네임을 입력해주세요';

    if (!this.nickNameRegx.test(nickName.trim()))
      return '닉네임은 1자 이상 15자 이하로 입력해주세요';

    return '';
  };

  validatePassword = ({ password }: { password: string }) => {
    if (!password) return '비밀번호를 입력해주세요';

    if (!this.passwordRegx.test(password))
      return '비밀번호는 대소문자, 숫자, 특수 문자를 하나라도 포함하여 8자 이상으로 입력해주세요';

    return '';
  };

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

export const postValidation = ({
  title,
  imageUrls,
  tags,
  latitude,
  longitude,
}: IPostValidationProps) => {
  const errors: IPostValidationState = {
    title: '',
    imageUrls: '',
    tags: '',
    latitude: '',
    longitude: '',
  };

  const {
    validateTitle,
    validateImages,
    validateTags,
    validateLatitude,
    validateLongitude,
  } = new FormValidation();

  errors.title = validateTitle({ title });

  errors.imageUrls = validateImages({ imageUrls });

  errors.tags = validateTags({ tags });

  errors.latitude = validateLatitude({ latitude });

  errors.longitude = validateLongitude({ longitude });

  return errors;
};

export const signupValidation = ({
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

  const {
    validateEmail,
    validateNickName,
    validatePassword,
    validateConfirmPassword,
  } = new FormValidation();

  errors.email = validateEmail({ email });

  errors.nickName = validateNickName({ nickName });

  errors.password = validatePassword({ password });

  errors.confirmPassword = validateConfirmPassword({
    password,
    confirmPassword,
  });

  return errors;
};

export const profileEditValidation = ({ nickName }: { nickName: string }) => {
  const errors = {
    nickName: '',
  };

  const { validateNickName } = new FormValidation();

  errors.nickName = validateNickName({ nickName });

  return errors;
};
