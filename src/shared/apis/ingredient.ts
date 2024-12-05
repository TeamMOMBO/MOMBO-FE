import { IAnalysisResult } from '../types/ingredient';
import { clientAuthInstance } from './instance/clientAuthInstance';

export const createIngredientAnalysis = async (
  formData: FormData,
): Promise<IAnalysisResult> => {
  const response = await clientAuthInstance.post(
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
