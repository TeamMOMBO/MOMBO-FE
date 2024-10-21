import axiosInstance from './axiosInstance';
import { IAnalysisResult, IIngredientImage } from '../types/ingredient';

export const createIngredientAnalysis = async (
  formData: FormData,
): Promise<IAnalysisResult> => {
  const response = await axiosInstance.post('/ingredient/analysis/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
