import { IUserDTO } from '../interfaces/IUserDTO';
import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import axios, { AxiosError } from 'axios';
import { IRegistrationForm } from '../interfaces/Forms';
import { API_URL } from '../http';

export const lsTokenKey = 'Inmates-token';

export default class Store {
  user = {} as IUserDTO;
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(status: boolean) {
    this.isAuth = status;
  }

  setUser(user: IUserDTO) {
    this.user = user;
  }

  setLoading(status: boolean) {
    this.isLoading = status;
  }

  async login(email: string, password: string) {
    this.setLoading(true);
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem(lsTokenKey, response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.error(e.response?.data?.message);
      } else {
        console.log(e);
      }
    }
    this.setLoading(false);
  }

  async registration(user: IRegistrationForm) {
    this.setLoading(true);
    try {
      const response = await AuthService.registration(user);
      localStorage.setItem(lsTokenKey, response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.error(e.response?.data?.message);
      } else {
        console.log(e);
      }
    }
    this.setLoading(false);
  }

  async logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem(lsTokenKey);
      this.setAuth(false);
      this.setUser({} as IUserDTO);
      console.log(this.user);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(e.response?.data?.message);
      } else {
        console.log(e);
      }
    }
  }

  async checkAuth() {
    this.setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
      console.log('check on', response);
      console.log(response);
      localStorage.setItem(lsTokenKey, response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(e.response?.data?.message);
      } else {
        console.log(e);
      }
    }
    this.setLoading(false);
  }
}
