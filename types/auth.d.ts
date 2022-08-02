interface IEmail {
  email: string;
}
export interface ILoginFormData extends IEmail {
  password: string;
}

interface ITokenSet {
  accessToken: string;
  refreshToken: string;
}

export interface IUserResponse extends IEmail {
  nickName: string;
}

export interface ILoginResponse extends ITokenSet {
  member: IUserResponse;
}
