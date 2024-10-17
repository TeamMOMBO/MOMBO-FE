import { IJoinReq } from '../types/auth';
import axiosInstance from './axiosInstance';

export const createUserInfo = async (data: IJoinReq) => {
  const response = await axiosInstance.post('/user/join/', data);
  return response.data;
};
