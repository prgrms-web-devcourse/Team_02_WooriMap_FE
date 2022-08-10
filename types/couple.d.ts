export interface IUserProfile {
  isCouple: boolean;
}

export interface IUserProfileProps extends IUserProfile {
  nickName: string;
  imageUrl?: string | null;
  coupleNickName?: string;
  startDate?: string;
}
