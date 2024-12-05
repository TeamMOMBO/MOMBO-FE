import { getSearch } from '<prefix>/shared/apis/clientApi/search.client';
import { SearchParams } from '<prefix>/shared/types/searchType';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useSearchQuery = (params: Omit<SearchParams, 'page'>) => {
  return useInfiniteQuery({
    queryKey: ['search', params],
    queryFn: ({ pageParam = 1 }) =>
      getSearch({
        ...params,
        page: pageParam,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.nextPage : undefined,
  });
};
