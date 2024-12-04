import { useQuery } from '@tanstack/react-query';

import { ProfileResponse } from '<prefix>/shared/types/auth';

import { getUserProfile } from '<prefix>/shared/apis/auth';
import { useClientAuthInstance } from '<prefix>/shared/apis/instance/useClientAuthInstance';

export function useUserProfileQuery() {
  const clientAuthInstance = useClientAuthInstance();
  const { data: userProfile } = useQuery<ProfileResponse>({
    queryKey: ['userProfile'],
    queryFn: () => getUserProfile(clientAuthInstance),
    staleTime: 300000, //5분
  });

  return {
    userProfile,
  };
}
