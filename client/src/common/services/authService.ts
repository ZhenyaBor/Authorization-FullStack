import { instance } from '../api/axios.api';
import { IValue } from '../interface';

export const authService = {
  async registration(userData: IValue) {
    const { data } = await instance.post('user', userData);
    return data;
  },
  async login(userData: IValue) {
    const { data } = await instance.post('auth/login', userData);
    return data;
  },
  async getMe() {
    const { data } = await instance.get('auth/profile');
    if (data) return data;
  },
};
