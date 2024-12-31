'use client';

import FaqItem from '<prefix>/components/content/faq/faqItem';
import { useSearchDetailsInfiniteQuery } from '<prefix>/state/queries/search';
import VirtualList from '<prefix>/components/common/virtualList/virtualList';
import SearchResultHeader from '<prefix>/components/search/header/searchResultHeader';
import LoadingSpinner from '<prefix>/components/common/loading/loadingSpinner';

interface searchParmasProps {
  params: {
    keyword: string;
  };
}

export default function SearchContentsDetails({ params }: searchParmasProps) {
  const { keyword } = params;

  const { data, fetchNextPage, hasNextPage, isLoading } =
    useSearchDetailsInfiniteQuery({
      keyword: decodeURIComponent(keyword),
      category: 'content',
    });

  const detailsData = data?.pages.flatMap((page) => page.results.faqs) ?? [];
  const totalCount = data?.pages[0]?.count ?? 0;

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className='px-16 py-19'>
      <div className='flex flex-col gap-20'>
        <SearchResultHeader category='콘텐츠' count={totalCount} />
        <VirtualList
          data={detailsData}
          onEndReached={() => hasNextPage && fetchNextPage()}
          renderItem={(index, item) => (
            <div className='mb-12'>
              <FaqItem key={index} faqItem={item} />
            </div>
          )}
        />
      </div>
    </div>
  );
}
