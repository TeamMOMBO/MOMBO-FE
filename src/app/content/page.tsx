import MainTopBar from '<prefix>/components/common/bar/mainTopBar';
import NavBar from '<prefix>/components/common/bar/navbar/navBar';
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
      <MainTopBar>콘텐츠</MainTopBar>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ContentContainer />
      </HydrationBoundary>
      <NavBar />
    </>
  );
}
