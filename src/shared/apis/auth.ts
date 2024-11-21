import { IJoinReq, ProfileResponse } from '../types/auth';

import { axiosInstance } from './axiosInstance';

import { AxiosInstance } from 'axios';

export const createUserInfo = async (data: IJoinReq) => {
  const response = await axiosInstance.post('/user/join/', data);
  return response.data;
};

export const requestRefreshToken = async (refresh?: string) => {
  const response = await axiosInstance.post('/uer/api/token/refresh/', refresh);
  return response.data;
};

export const getUserProfile = async (clientAuthInstance: AxiosInstance) => {
  const response =
    await clientAuthInstance.get<ProfileResponse>('/user/profile');
  return response.data;
};
