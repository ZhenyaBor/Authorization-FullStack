import axios from 'axios';
import { getUserDataFromLocalStorage } from '../helpers';

const user = getUserDataFromLocalStorage();

export const instance = axios.create({
  baseURL: 'http://localhost:7070/api',
  headers: {
    Authorization: `Bearer ${user?.token || ''}`,
  },
});
