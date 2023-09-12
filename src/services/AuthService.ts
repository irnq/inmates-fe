import API, { Routes } from '../http';
import { AxiosResponse } from 'axios';
import { IAuthResponse } from '../interfaces/response/IAuthResponse';
import { IRegistrationForm } from '../interfaces/Forms';

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
    return API.post<IAuthResponse>(Routes.login, { email, password });
  }

  static async registration(user: IRegistrationForm): Promise<AxiosResponse<IAuthResponse>> {
    return API.post<IAuthResponse>(Routes.registration, { ...user });
  }

  static async logout(): Promise<void> {
    return API.post(Routes.logout);
  }
}
