import Link from 'next/link';
import SearchBar from '<prefix>/components/common/bar/searchbar/searchbar';
import SearchResults from '<prefix>/components/search/searchResults';
import { getSearchServer } from '<prefix>/shared/apis/serverApi/search.server.api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Suspense } from 'react';
import LeftArrowIcon from '/public/svgs/arrow/icon-left2.svg';

export default async function SearchResultPage({
  searchParams,
}: {
  searchParams: {
    keyword?: string;
  };
}) {
  const queryClient = new QueryClient();

  if (searchParams.keyword) {
    const initialData = await getSearchServer(searchParams.keyword);
    await queryClient.prefetchQuery({
      queryKey: ['preview-search', searchParams.keyword],
      queryFn: () => Promise.resolve(initialData),
    });
  }

  return (
    <>
      <div className='flex items-center gap-13 p-16 pt-9'>
        <Link href={'/main'}>
          <LeftArrowIcon
            className={`h-24 w-24 cursor-pointer items-center justify-center stroke-neutral-600`}
          />
        </Link>

        <SearchBar
          defaultKeyword={searchParams.keyword}
          isResultSearch={true}
        />
      </div>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>검색결과 불러오는중...</div>}>
          <SearchResults keyword={searchParams.keyword!} />
        </Suspense>
      </HydrationBoundary>
    </>
  );
}
