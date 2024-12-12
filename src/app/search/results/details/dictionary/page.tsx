'use client';

import Link from 'next/link';
import LeftArrowIcon from '/public/svgs/arrow/icon-left2.svg';
import SearchBar from '<prefix>/components/common/bar/searchbar/searchbar';
import IngredientItem from '<prefix>/components/ingredient/ingredientItem';
import { useSearchParams } from 'next/navigation';

import { Virtuoso } from 'react-virtuoso';
import { useSearchDetailsInfiniteQuery } from '<prefix>/state/queries/search';

export default function SearchDictionaryDetails() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const { detailsData, totalCount, fetchNextPage, hasNextPage, isLoading } =
    useSearchDetailsInfiniteQuery({ keyword, category: 'ingredient' });

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
        <div className='mb-20 flex flex-col'>
          <p className='text-body-01 text-neutral-900'>
            성분사전{' '}
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
            itemContent={(index, ingredientItem) => (
              <div className=''>
                <IngredientItem key={index} ingredientItem={ingredientItem} />
              </div>
            )}
          />
        </div>
      </div>
    </>
  );
}
