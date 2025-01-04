export interface IJoinReq {
  email?: string;
  nickname: string;
  userType: string;
  pregnancyWeek: number;
}

export interface UserProfile {
  id: number;
  email: string;
  nickname: string;
  userType: string;
  pregnancyDate: string;
  pregnancyWeek: number | null;
}

interface IngredientResult {
  name: string;
  level: number;
  notes: string;
}
export interface UserAnalysisResult {
  id: number;
  user_id: number;
  image: string;
  elapsed_time: number | null;
  created_at: string;
}

export interface ProfileResponse {
  profile: UserProfile;
  user_analysis_results: UserAnalysisResult[];
}

export const AUTH_COOKIE_KEYS = {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
} as const;

export interface RefreshResponse {
  access: string;
}

export interface ProfileEditRequest {
  nickname: string;
  userType: string;
  pregnancyDate?: string; // date-time
  pregnancyWeek: string | null;
}
