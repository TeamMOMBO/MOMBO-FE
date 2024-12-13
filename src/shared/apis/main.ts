import { MainResponse } from '../types/main';
import clientAuthInstance from './instance/clientAuthInstance';

export const getMainInfo = async () => {
  const response = await clientAuthInstance.get<MainResponse>('/main/');
  return response.data;
};
