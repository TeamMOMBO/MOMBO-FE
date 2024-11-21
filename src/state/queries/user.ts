import { useQuery } from '@tanstack/react-query';

import { ProfileResponse } from '<prefix>/shared/types/auth';
import { useClientAuthInstance } from '<prefix>/shared/intercepte/useClientAuthInstance';
import { getUserProfile } from '<prefix>/shared/apis/auth';

export function useUserProfileQuery() {
  const clientAuthInstance = useClientAuthInstance();
  const {
    data: userProfile,
    isLoading,
    error,
  } = useQuery<ProfileResponse>({
    queryKey: ['userProfile'],
    queryFn: () => getUserProfile(clientAuthInstance),
    staleTime: 300000, // 5분
  });

  return {
    userProfile,
    isLoading,
    error: error as Error,
  };
}
