import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getCookie } from 'cookies-next';
import { clientAuthInstance } from '../instance/clientAuthInstance';
import { TokenRefreshManager } from '<prefix>/shared/utils/tokenRefreshManager';

interface ExtendedAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const accessToken = getCookie('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

export const requestErrorInterceptor = (error: AxiosError) => {
  return Promise.reject(error);
};

export const responseInterceptor = (response: AxiosResponse) => {
  return response;
};

export const responseErrorInterceptor = async (
  error: AxiosError<AxiosError, InternalAxiosRequestConfig>,
) => {
  const originalRequest = error.config as ExtendedAxiosRequestConfig;
  const refreshToken = getCookie('refreshToken') as string;

  if (
    error.response?.status === 401 &&
    !originalRequest._retry &&
    refreshToken
  ) {
    originalRequest._retry = true;

    try {
      const newAccessToken =
        await TokenRefreshManager.refreshToken(refreshToken);
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return await clientAuthInstance(originalRequest);
    } catch (refreshError) {
      window.location.href = '/login';
      return Promise.reject(refreshError);
    }
  }

  return Promise.reject(error);
};
