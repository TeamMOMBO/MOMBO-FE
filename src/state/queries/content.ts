import { getContent } from '<prefix>/shared/apis/content';
import { THREE_MIN_STALE_TIME } from '<prefix>/shared/constants/queryOptions';
import { ContentParams } from '<prefix>/shared/types/content';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useContentInfiniteQuery = (params: ContentParams) => {
  return useInfiniteQuery({
    queryKey: ['content', params],
    queryFn: ({ pageParam = 1 }) => getContent({ ...params, page: pageParam }),
    getNextPageParam: (lastPage) => {
      if (
        params.category === 'faq' &&
        lastPage &&
        'results' in lastPage &&
        lastPage.results.page < lastPage.results.maxPage
      ) {
        return lastPage.results.page + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
    refetchOnMount: false,
    staleTime: THREE_MIN_STALE_TIME,
  });
};
