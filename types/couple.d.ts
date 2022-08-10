export interface IUserProfile {
  isCouple: boolean;
}

export interface IUserProfileProps extends IUserProfile {
  nickName: string;
  coupleNickName?: string;
  startDate?: string;
}
