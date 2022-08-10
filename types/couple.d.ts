export interface IUserProfile {
  isCouple: boolean;
}

export interface IUserProfileProps extends IUserProfile {
  nickName: string;
  profileImage: string;
  coupleNickName?: string;
  startDate?: string;
}
