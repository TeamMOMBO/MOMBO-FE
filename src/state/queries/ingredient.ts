import { getIngredientDictionary } from '<prefix>/shared/apis/clientApi/ingredient/getIngredientDictionaryClient';
import { useInfiniteQuery } from '@tanstack/react-query';
import { IngredientDictionaryResponse } from '<prefix>/shared/types/ingredient';
import { THREE_MIN_STALE_TIME } from '<prefix>/shared/constants/queryOptions';

export const useIngredientDictionaryQuery = (sort: 'name' | 'level') => {
  return useInfiniteQuery<IngredientDictionaryResponse>({
    queryKey: ['ingredient-dictionary', sort],
    queryFn: ({ pageParam = 1 }) =>
      getIngredientDictionary({ page: pageParam as number, sort }),
    getNextPageParam: (lastPage) =>
      lastPage.next ? lastPage.results.page + 1 : undefined,
    initialPageParam: 1,
    refetchOnMount: false,
    staleTime: THREE_MIN_STALE_TIME,
  });
};
