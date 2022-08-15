export interface IUserProfile {
  isCouple: boolean;
}

export interface IUserProfileProps extends IUserProfile {
  nickName: string;
  imageUrl?: string | null;
  coupleNickName?: string;
  startDate?: string;
  email?: string;
}

export interface IUserInfo {
  data: {
    startDate: string;
    me: {
      imageUrl: string;
      nickName: string;
    };
    you: {
      imageUrl: string;
      nickName: string;
    };
  };
}

export interface IInvalidUserInfo {
  data: null;
}

export interface ICoupleInfo {
  startDate: string;
  me: {
    imageUrl: string;
    nickName: string;
  };
  you: {
    imageUrl: string;
    nickName: string;
  };
}
