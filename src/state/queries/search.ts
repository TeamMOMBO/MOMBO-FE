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

export const useSearchDetailsInfiniteQuery = (
  params: Omit<SearchParams, 'page'>,
) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['search-contents', params],
      queryFn: ({ pageParam = 1 }) => getSearch({ ...params, page: pageParam }),
      getNextPageParam: (lastPage) => {
        if (lastPage.results.page < lastPage.results.maxPage) {
          return lastPage.results.page + 1;
        }
        return undefined;
      },
      initialPageParam: 1,
    });

  const detailsData =
    data?.pages.flatMap((page) =>
      params.category === 'content'
        ? page.results.faqs
        : page.results.ingredients,
    ) ?? [];

  const totalCount = data?.pages[0]?.results.count ?? 0;

  return {
    detailsData,
    totalCount,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  };
};
