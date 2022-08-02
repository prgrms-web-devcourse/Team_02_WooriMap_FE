interface IEmail {
  email: string;
}
export interface ILoginFormData extends IEmail {
  password: string;
}

interface IToken {
  accessToken: string;
}

export interface IUserResponse extends IEmail {
  nickName: string;
  couple: string;
}

export interface ILoginResponse extends IToken {
  member: IUserResponse;
}
