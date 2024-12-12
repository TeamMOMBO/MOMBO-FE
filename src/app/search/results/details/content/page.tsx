'use client';

import FaqInfoItem from '<prefix>/components/faq/faqInfoItem';
import { useSearchParams } from 'next/navigation';

import { useSearchDetailsInfiniteQuery } from '<prefix>/state/queries/search';
import VirtualList from '<prefix>/components/common/virtualList/virtualList';
import SearchResultHeader from '<prefix>/components/search/header/searchResultHeader';
export default function SearchContentsDetails() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const { data, fetchNextPage, hasNextPage, isLoading } =
    useSearchDetailsInfiniteQuery({ keyword, category: 'content' });
  const detailsData = data?.pages.flatMap((page) => page.results.faqs) ?? [];
  const totalCount = data?.pages[0]?.count ?? 0;
  if (isLoading) return <div>로딩중...</div>;

  return (
    <>
      <div className='px-16 py-19'>
        <div className='flex flex-col gap-20'>
          <SearchResultHeader category='콘텐츠' count={totalCount} />
          <VirtualList
            data={detailsData}
            onEndReached={() => hasNextPage && fetchNextPage()}
            renderItem={(index, item) => (
              <div className='mb-12'>
                <FaqInfoItem key={index} faqInfoItem={item} />
              </div>
            )}
          />
        </div>
      </div>
    </>
  );
}
