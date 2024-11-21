'use client';

import { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { Cookies } from 'next-client-cookies';
import { AUTH_COOKIE_KEYS } from '../types/auth';
interface RefreshResponse {
  access: string;
}

interface ExtendedAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

export const clientAuthInterceptor = (
  instance: AxiosInstance,
  cookies: Cookies,
) => {
  let isRefreshing = false;
  let refreshSubscribers: ((token: string) => void)[] = [];

  const refreshToken = async () => {
    try {
      console.log('🔄 토큰 리프레싱 시작...');
      const refreshToken = cookies.get(AUTH_COOKIE_KEYS.refreshToken);
      if (!refreshToken) {
        console.error('❌ 쿠키에 리프레시 토큰 존재하지 않음');
        cookies.remove('accessToken');
        cookies.remove('refreshToken');
        window.location.href = '/login';
      }

      const response = await instance.post<RefreshResponse>(
        '/user/api/token/refresh/',
        {
          refresh: refreshToken,
        },
      );

      const newAccessToken = response.data.access;
      console.log('✅ 새 엑세스 토큰 받기:', newAccessToken);
      cookies.set(AUTH_COOKIE_KEYS.accessToken, newAccessToken);
      return newAccessToken;
    } catch (error) {
      console.error('❌ 토큰 교체 실패:', error);
      cookies.remove(AUTH_COOKIE_KEYS.accessToken);
      cookies.remove(AUTH_COOKIE_KEYS.refreshToken);
      throw error;
    }
  };

  const onRequest = (config: ExtendedAxiosRequestConfig) => {
    const token = cookies.get(AUTH_COOKIE_KEYS.accessToken);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  };

  const onResponseError = async (error: AxiosError) => {
    const originalRequest = error.config as ExtendedAxiosRequestConfig;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const newToken = await refreshToken();
          isRefreshing = false;

          refreshSubscribers.forEach((callback) => callback(newToken));
          refreshSubscribers = [];

          return instance(originalRequest);
        } catch (refreshError) {
          refreshSubscribers = [];
          isRefreshing = false;
          throw refreshError;
        }
      }

      return new Promise((resolve) => {
        refreshSubscribers.push((token: string) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          resolve(instance(originalRequest));
        });
      });
    }

    return Promise.reject(error);
  };

  return { onRequest, onResponseError };
};
