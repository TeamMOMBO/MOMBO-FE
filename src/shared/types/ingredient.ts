export interface IIngredientInfo {
  id: number;
  categoryId: string;
  effectType: string;
  ingredientKr: string;
  ingredient: string;
  level: string;
  reason: string;
  notes: string | null;
}

export interface IIngredientImage {
  image: string;
}

interface IUser {
  userNo: number;
  email: string;
}

interface IRiskIngredientCount {
  total: number;
  '1단계': number;
  '2단계': number;
}

export type RiskLevel = 'high' | 'middle' | 'low';

export interface IAnalysisResult {
  riskLevel: RiskLevel;
  user: IUser;
  analysisImage: string;
  riskIngredientCount: IRiskIngredientCount;
  ingredientAnalysis: IIngredientInfo[];
}

export interface IngredientDictionaryResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    ingredients: IIngredientInfo[];
    count: number;
    page: number;
    page_size: number;
    maxPage: number;
  };
}
export interface IngredientDictionaryParams {
  page?: number;
  sort: 'name' | 'level';
  order?: 'asc' | 'desc';
}
