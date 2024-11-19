import axios from 'axios';
import { useCookies } from 'next-client-cookies';
import { getCookies } from 'next-client-cookies/server';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
});

export const useServerAuthInstance = () => {
  const serverInstance = axios.create({
    baseURL,
    timeout: 5000,
  });

  const cookies = getCookies();

  axiosInstance.interceptors.request.use((config) => {
    const token = cookies.get('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return serverInstance;
};

export const useClientAuthInstance = () => {
  const cookies = useCookies();

  const clientInstance = axios.create({
    baseURL,
    timeout: 5000,
  });

  let isRefreshing = false;
  let refreshSubscribers: ((token: string) => void)[] = [];

  const refreshToken = async () => {
    try {
      const refreshToken = cookies.get('refreshToken');
      const response = await clientInstance.post('/user/api/token/refresh/', {
        refresh: refreshToken,
      });
      const newAccessToken = response.data.access;
      cookies.set('accessToken', newAccessToken);
      return newAccessToken;
    } catch (error) {
      cookies.remove('accessToken');
      cookies.remove('refreshToken');
      throw error;
    }
  };

  clientInstance.interceptors.request.use((config) => {
    const token = cookies.get('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  clientInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        if (!isRefreshing) {
          isRefreshing = true;

          try {
            const newToken = await refreshToken();
            isRefreshing = false;

            refreshSubscribers.forEach((callback) => callback(newToken));
            refreshSubscribers = [];

            return clientInstance(originalRequest);
          } catch (refreshError) {
            refreshSubscribers = [];
            isRefreshing = false;
            throw refreshError;
          }
        }

        return new Promise((resolve) => {
          refreshSubscribers.push((token: string) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(clientInstance(originalRequest));
          });
        });
      }

      return Promise.reject(error);
    },
  );

  return clientInstance;
};
