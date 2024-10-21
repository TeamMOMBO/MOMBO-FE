export interface IIngredientInfo {
  id: number;
  name: string;
  level: string;
  reason: string;
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

interface IngredientAnalysis {
  id: number;
  name: string;
  level: string;
  reason: string;
}

export interface IAnalysisResult {
  riskLevel: string;
  user: IUser;
  analysisImage: string;
  riskIngredientCount: IRiskIngredientCount;
  ingredientAnalysis: IngredientAnalysis[];
}
