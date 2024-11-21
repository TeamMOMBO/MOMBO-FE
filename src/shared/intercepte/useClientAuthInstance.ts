'use client';

import axios from 'axios';
import { useCookies } from 'next-client-cookies';
import { useMemo } from 'react';
import { clientAuthInterceptor } from '../apis/clientAuthInterceptor';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useClientAuthInstance = () => {
  const cookies = useCookies();

  const clientInstance = useMemo(() => {
    const instance = axios.create({
      baseURL,
      timeout: 5000,
    });

    const interceptors = clientAuthInterceptor(instance, cookies);

    instance.interceptors.request.use(interceptors.onRequest);
    instance.interceptors.response.use(
      (response) => response,
      interceptors.onResponseError,
    );

    return instance;
  }, [cookies]);

  return clientInstance;
};
