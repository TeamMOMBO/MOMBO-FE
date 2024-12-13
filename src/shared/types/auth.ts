export interface IJoinReq {
  email?: string;
  nickname: string;
  userType: string;
  pregnancyDate: number;
}

export interface UserProfile {
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
  data: UserProfile;
}

export const AUTH_COOKIE_KEYS = {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
} as const;

export interface RefreshResponse {
  access: string;
}
