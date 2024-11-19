import { useQuery } from '@tanstack/react-query';

import {
  axiosInstance,
  useClientAuthInstance,
  useServerAuthInstance,
} from '<prefix>/shared/apis/axiosInstance';
import { ApiResponse } from '<prefix>/shared/types/axios';
import { ProfileResponse } from '<prefix>/shared/types/auth';

export function useUserProfileQuery() {
  const authInstance = useClientAuthInstance();

  const {
    data: userProfile,
    isLoading,
    error,
  } = useQuery<ApiResponse<ProfileResponse>>({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const response =
        await authInstance.get<ApiResponse<ProfileResponse>>('/user/profile');
      return response.data;
    },
    staleTime: 300000, // 5분
  });

  return {
    userProfile,
    isLoading,
    error: error as Error,
  };
}
