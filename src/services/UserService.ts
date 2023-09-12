import API, { Routes } from '../http';
import { AxiosResponse } from 'axios';
import { IUserDTO } from '../interfaces/IUserDTO';

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<Omit<IUserDTO, 'isActivated'>[]>> {
    return API.get<Omit<IUserDTO, 'isActivated'>[]>(Routes.getUsers);
  }
}
