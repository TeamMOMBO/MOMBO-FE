import MainTopBar from '<prefix>/components/common/bar/mainTopBar';
import DictionaryContent from '<prefix>/components/ingredient/dictionary/dictionaryContent';
import { getIngredientDictionaryServer } from '<prefix>/shared/apis/serverApi/ingredient/getIngredientDictionaryServer';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Suspense } from 'react';

export default async function IngredientDictionaryPage() {
  const queryClient = new QueryClient();
  const initialData = await getIngredientDictionaryServer({
    page: 1,
    sort: 'name',
  });

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['ingredient-dictionary'],
    queryFn: ({ pageParam = 1 }) =>
      getIngredientDictionaryServer({ page: pageParam, sort: 'name' }),
    initialPageParam: 1,
    initialData: {
      pages: [initialData], // 첫 페이지 데이터
      pageParams: [1], // 첫 페이지 파라미터
    },
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>성분사전 불러오는중...</div>}>
          <MainTopBar>성분사전</MainTopBar>
          <DictionaryContent />
        </Suspense>
      </HydrationBoundary>
    </>
  );
}
