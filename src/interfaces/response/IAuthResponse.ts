import { IUserDTO } from '../IUserDTO';

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUserDTO;
}
