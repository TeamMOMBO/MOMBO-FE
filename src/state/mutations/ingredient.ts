import { createIngredientAnalysis } from '<prefix>/shared/apis/ingredient';
import { IAnalysisResult } from '<prefix>/shared/types/ingredient';
import { useMutation } from '@tanstack/react-query';

export const useCreateIngredientAnalysis = () => {
  return useMutation<IAnalysisResult, unknown, FormData>({
    mutationFn: (formData: FormData) => createIngredientAnalysis(formData),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error: unknown) => {
      console.error('성분 분석 실패', error);
    },
  });
};
