'use client';

import IngredientItem from '../ingredientItem';
import DictionaryHeader from './dictionaryHeader';
import { useIngredientDictionaryQuery } from '<prefix>/state/queries/ingredient';
import VirtualList from '<prefix>/components/common/virtualList/virtualList';
import useTab from '<prefix>/hooks/useTab';

export const DICTIONARY_TYPE = [
  { tab: '이름순', value: 'name' as const },
  { tab: '등급', value: 'level' as const },
];

export default function DictionaryContent() {
  const { currentItem, changeItem } = useTab(0, DICTIONARY_TYPE);
  const sortType = currentItem?.value || 'name';
  const { data, fetchNextPage, hasNextPage, isLoading } =
    useIngredientDictionaryQuery(sortType);

  const ingredientDictionaryData =
    data?.pages.flatMap((page) => page.results.ingredients) ?? [];

  if (isLoading) return <div>로딩중</div>;
  return (
    <>
      <DictionaryHeader
        tabs={DICTIONARY_TYPE}
        currentItem={currentItem}
        onChangeTab={changeItem}
      />
      <div className='px-16'>
        <VirtualList
          data={ingredientDictionaryData}
          onEndReached={() => hasNextPage && fetchNextPage()}
          renderItem={(index, ingredientItem) => (
            <div className='mb-12'>
              <IngredientItem key={index} ingredientItem={ingredientItem} />
            </div>
          )}
        />
      </div>
    </>
  );
}
