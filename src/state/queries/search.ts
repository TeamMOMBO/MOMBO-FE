import { getSearch } from '<prefix>/shared/apis/clientApi/search.client';
import { FIVE_MIN_STALE_TIME } from '<prefix>/shared/constants/queryOptions';
import { SearchParams, SearchResponse } from '<prefix>/shared/types/searchType';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useSearchPreviewQuery = (params: Omit<SearchParams, 'page'>) => {
  const { data: searchPreviewData, isLoading: searchPreviewLoading } =
    useQuery<SearchResponse>({
      queryKey: ['preview-search', params],
      queryFn: () =>
        getSearch({
          ...params,
          page: 1,
        }),
      staleTime: FIVE_MIN_STALE_TIME,
      refetchOnMount: false,
    });

  return { searchPreviewData, searchPreviewLoading };
};
