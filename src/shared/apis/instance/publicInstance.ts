import axios from 'axios';

export const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const publicInstance = axios.create({
  baseURL,
});
