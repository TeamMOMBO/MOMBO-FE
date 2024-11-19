import { IJoinReq, ProfileResponse } from '../types/auth';
import { ApiResponse } from '../types/axios';
import { axiosInstance, useClientAuthInstance } from './axiosInstance';

export const createUserInfo = async (data: IJoinReq) => {
  const response = await axiosInstance.post('/user/join/', data);
  return response.data;
};

export const createRefreshToken = async (refresh: string) => {
  const response = await axiosInstance.post('/uer/api/token/refresh/', refresh);
  return response.data;
};

export const getUserProfile = async () => {
  const authInstance = useClientAuthInstance();
  const response =
    await authInstance.get<ApiResponse<ProfileResponse>>('/user/profile');
  return response.data;
};
