import axios from 'axios';
import {
  requestErrorInterceptor,
  requestInterceptor,
  responseErrorInterceptor,
  responseInterceptor,
} from '../interceptor/authInterceptor';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const clientAuthInstance = axios.create({
  baseURL,
});

clientAuthInstance.interceptors.request.use(
  requestInterceptor,
  requestErrorInterceptor,
);

clientAuthInstance.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor,
);

export default clientAuthInstance;
