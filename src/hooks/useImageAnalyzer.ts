import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { createIngredientAnalysis } from '<prefix>/shared/apis/ingredient';
import { IAnalysisResult } from '<prefix>/shared/types/ingredient';
import { useIngredientAnalysisStore } from '<prefix>/state/store/IngredientAnalysisStore';

export default function useImageAnalyzer() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const setAnalysisResult = useIngredientAnalysisStore(
    (state) => state.setAnalysisResult,
  );
  //   const [analysisResult, setAnalysisResult] = useState<IAnalysisResult | null>(
  //     null,
  //   );

  const { mutate: analyzeIngredient } = useMutation<
    IAnalysisResult,
    unknown,
    FormData
  >({
    mutationFn: (formData: FormData) => createIngredientAnalysis(formData),
    onSuccess: (data) => {
      console.log(data);
      router.push('/ingredient/result');
      setAnalysisResult(data);
      //   setAnalysisResult(data);
      //성공 응답 data 전역 상태관리?
    },
    onError: (error: unknown) => {
      console.error('성분 분석 실패', error);
      // 에러 처리 로직 추가 (예: 사용자에게 알림)
    },
  });

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
      analyzeIngredient(formData);
    }
  };

  return {
    fileInputRef,
    handleImageClick,
    handleSelectImage,
  };
}
