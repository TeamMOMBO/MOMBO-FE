import {
  getSearch,
  getSearchDetails,
} from '<prefix>/shared/apis/clientApi/search.client';
import { FIVE_MIN_STALE_TIME } from '<prefix>/shared/constants/queryOptions';
import {
  SearchDetailsParams,
  SearchResponse,
} from '<prefix>/shared/types/searchType';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useSearchPreviewQuery = (keyword: string) => {
  const { data: searchPreviewData, isLoading: searchPreviewLoading } =
    useQuery<SearchResponse>({
      queryKey: ['preview-search', keyword],
      queryFn: () => getSearch(keyword),
      staleTime: FIVE_MIN_STALE_TIME,
      refetchOnMount: false,
    });

  return { searchPreviewData, searchPreviewLoading };
};

export const useSearchDetailsInfiniteQuery = (params: SearchDetailsParams) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['search-contents', params],
      queryFn: ({ pageParam = 1 }) =>
        getSearchDetails({ ...params, page: pageParam }),
      getNextPageParam: (lastPage) => {
        if (lastPage.results.page < lastPage.results.maxPage) {
          return lastPage.results.page + 1;
        }
        return undefined;
      },
      initialPageParam: 1,
    });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  };
};
