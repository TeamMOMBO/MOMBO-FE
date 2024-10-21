import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IAnalysisResult } from '<prefix>/shared/types/ingredient';

interface IIngredientAnalysisState {
  analysisResult: IAnalysisResult | null;
  setAnalysisResult: (result: IAnalysisResult) => void;
  clearAnalysisResult: () => void;
}

export const useIngredientAnalysisStore = create<IIngredientAnalysisState>()(
  persist(
    (set) => ({
      analysisResult: null,
      setAnalysisResult: (result) => set({ analysisResult: result }),
      clearAnalysisResult: () => set({ analysisResult: null }),
    }),
    {
      name: 'ingredient-analysis-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
