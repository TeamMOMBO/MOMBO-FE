import { getSearch } from '<prefix>/shared/apis/clientApi/search.client';
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
    });

  return { searchPreviewData, searchPreviewLoading };
};
