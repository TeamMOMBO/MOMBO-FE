'use client';

import IngredientItem from '<prefix>/components/ingredient/ingredientItem';
import { useRouter, useSearchParams } from 'next/navigation';

import { useSearchDetailsInfiniteQuery } from '<prefix>/state/queries/search';
import VirtualList from '<prefix>/components/common/virtualList/virtualList';
import SearchResultHeader from '<prefix>/components/search/header/searchResultHeader';

export default function SearchDictionaryDetails() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const { data, fetchNextPage, hasNextPage, isLoading } =
    useSearchDetailsInfiniteQuery({ keyword, category: 'ingredient' });
  const detailsData =
    data?.pages.flatMap((page) => page.results.ingredients) ?? [];
  const totalCount = data?.pages[0]?.count ?? 0;
  if (isLoading) return <div>로딩중...</div>;

  return (
    <>
      <div className='px-16 py-19'>
        <div className='flex flex-col gap-20'>
          <SearchResultHeader category='성분사전' count={totalCount} />
          <VirtualList
            data={detailsData}
            onEndReached={() => hasNextPage && fetchNextPage()}
            renderItem={(index, item) => (
              <div className='mb-12'>
                <IngredientItem key={index} ingredientItem={item} />
              </div>
            )}
          />
        </div>
      </div>
    </>
  );
}
