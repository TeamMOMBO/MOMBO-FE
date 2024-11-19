export interface IJoinReq {
  email?: string;
  nickname: string;
  userType: string;
  pregnancyDate: number;
}

interface UserProfile {
  id: number;
  email: string;
  nickname: string;
  userType: string;
  pregnancyDate: string;
  pregnancyWeek: number;
}

interface UserAnalysis {
  id: number;
  user_id: number;
  image: string;
  elapsed_time: number;
  created_at: string;
  IngredientResult: IngredientResult[];
}

interface IngredientResult {
  name: string;
  level: number;
  notes: string;
}

export interface ProfileResponse {
  profile: UserProfile;
  userAnalysisResult: UserAnalysis[];
}
