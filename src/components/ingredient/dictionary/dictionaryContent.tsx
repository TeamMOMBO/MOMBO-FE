'use client';

import IngredientItem from '../ingredientItem';
import { useIngredientDictionaryQuery } from '<prefix>/state/queries/ingredient';
import VirtualList from '<prefix>/components/common/virtualList/virtualList';
import useTab from '<prefix>/hooks/useTab';
import SkeletonList from '<prefix>/components/common/skeleton/skeletonList';
import TabMenu from '<prefix>/components/common/tabMenu/tabMenu';
import {
  DICTIONARY_TYPE,
  ORDER_LABELS,
} from '<prefix>/shared/constants/ingredient';
import ChipButton from '<prefix>/components/common/button/chipButton';
import { useState } from 'react';

export default function DictionaryContent() {
  const { currentItem: sortItem, changeItem: changeSortItem } = useTab(
    0,
    DICTIONARY_TYPE,
  );
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const sortType = sortItem?.value || 'level';

  const { data, fetchNextPage, hasNextPage, isLoading } =
    useIngredientDictionaryQuery(sortType as 'name' | 'level', order);

  const toggleOrder = () => {
    setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const ingredientDictionaryData =
    data?.pages.flatMap((page) => page.results.ingredients) ?? [];

  if (isLoading) return <SkeletonList count={10} />;

  return (
    <>
      <div className='pb-20 pl-16 pt-13'>
        <div className='flex items-center gap-16'>
          <TabMenu
            tabs={DICTIONARY_TYPE}
            currentItem={sortItem}
            onChangeTab={changeSortItem}
          />
          <ChipButton onClick={toggleOrder} isSelected={true}>
            {ORDER_LABELS[order]}
          </ChipButton>
        </div>
      </div>
      <div className='px-16'>
        <VirtualList
          data={ingredientDictionaryData}
          onEndReached={() => hasNextPage && fetchNextPage()}
          renderItem={(index, ingredientItem) => (
            <div className='mb-12'>
              <IngredientItem key={index} ingredientItem={ingredientItem} />
            </div>
          )}
          isNavBar={true}
        />
      </div>
    </>
  );
}
