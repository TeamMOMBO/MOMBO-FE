import { useQuery } from '@tanstack/react-query';

import { getMainInfo } from '<prefix>/shared/apis/main';
import { MainResponse } from '<prefix>/shared/types/main';

export function useMainInfoQuery() {
  const { data: mainInfo, isLoading: mainInfoLoading } = useQuery<MainResponse>(
    {
      queryKey: ['mainInfo'],
      queryFn: getMainInfo,
      staleTime: 300000,
    },
  );

  return {
    mainInfo,
    mainInfoLoading,
  };
}
