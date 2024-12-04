import { AxiosInstance } from 'axios';
import { IAnalysisResult } from '../types/ingredient';

export const createIngredientAnalysis = async (
  formData: FormData,
  clientAuthInstace: AxiosInstance,
): Promise<IAnalysisResult> => {
  const response = await clientAuthInstace.post(
    '/ingredient/analysis/',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return response.data;
};
