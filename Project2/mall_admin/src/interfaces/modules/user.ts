export interface ILoginForm {
  t: number;
  principal: string;
  credentials: string;
  sessionUUID: string;
  imageCode: string;
}
export interface IUserInfo {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  shopId: number;
  userId: number;
  authorities: IAuthorityItem[];
}

export interface IAuthorityItem {
  authority: string;
}