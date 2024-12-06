import { useQuery } from '@tanstack/react-query';

import { ProfileResponse } from '<prefix>/shared/types/auth';

import { getUserProfile } from '<prefix>/shared/apis/auth';

export function useUserProfileQuery() {
  const { data: userProfile } = useQuery<ProfileResponse>({
    queryKey: ['userProfile'],
    queryFn: () => getUserProfile(),
    staleTime: 300000, //5분
  });

  return {
    userProfile,
  };
}
