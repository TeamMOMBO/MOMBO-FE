'use client';
import { Virtuoso } from 'react-virtuoso';
import FaqInfoItem from '<prefix>/components/faq/faqInfoItem';
import { useSearchParams } from 'next/navigation';
import SearchBar from '<prefix>/components/common/bar/searchbar/searchbar';
import Link from 'next/link';
import LeftArrowIcon from '/public/svgs/arrow/icon-left2.svg';
import { useSearchDetailsInfiniteQuery } from '<prefix>/state/queries/search';
export default function SearchContentsDetails() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const { detailsData, totalCount, fetchNextPage, hasNextPage, isLoading } =
    useSearchDetailsInfiniteQuery({ keyword, category: 'content' });

  if (isLoading) return <div>로딩중...</div>;

  return (
    <>
      <div className='flex items-center gap-13 pt-9'>
        <Link href={'/main'}>
          <LeftArrowIcon
            className={`h-24 w-24 cursor-pointer items-center justify-center stroke-neutral-600`}
          />
        </Link>
        <SearchBar defaultKeyword={keyword} isResultSearch={true} />
      </div>
      <div className='px-16 py-19'>
        <div className='flex flex-col gap-20'>
          <p className='text-body-01 text-neutral-900'>
            콘텐츠{' '}
            <span className='text-body-04 text-primary'>{totalCount}</span>
          </p>
          <Virtuoso
            style={{
              height: 'calc(100dvh - 144px)', //100dvh - 헤더높이
              scrollBehavior: 'smooth',
              msOverflowStyle: 'none', // IE, Edge
              scrollbarWidth: 'none', // Firefox
            }}
            data={detailsData}
            endReached={() => hasNextPage && fetchNextPage()}
            itemContent={(index, faqInfoItem) => (
              <FaqInfoItem key={index} faqInfoItem={faqInfoItem} />
            )}
          />
        </div>
      </div>
    </>
  );
}
