import ContentContainer from '<prefix>/components/content/contentContainer';
import { getContentServer } from '<prefix>/shared/apis/serverApi/content/content.server.api';

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Suspense } from 'react';

export default async function ContentPage() {
  const queryClient = new QueryClient();
  const initialData = await getContentServer({
    page: 1,
    category: 'all',
  });

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['content'],
    queryFn: ({ pageParam = 1 }) =>
      getContentServer({ page: pageParam, category: 'all' }),
    initialPageParam: 1,
    initialData: {
      pages: [initialData], // 첫 페이지 데이터
      pageParams: [1], // 첫 페이지 파라미터
    },
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>콘텐츠 불러오는 중...</div>}>
          <ContentContainer />
        </Suspense>
      </HydrationBoundary>
    </>
  );
}
