'use client';

import IngredientItem from '../ingredientItem';
import { useIngredientDictionaryQuery } from '<prefix>/state/queries/ingredient';
import VirtualList from '<prefix>/components/common/virtualList/virtualList';
import useTab from '<prefix>/hooks/useTab';
import SkeletonList from '<prefix>/components/common/skeleton/skeletonList';
import TabMenu from '<prefix>/components/common/tabMenu/tabMenu';
import { DICTIONARY_TYPE } from '<prefix>/shared/constants/ingredient';

export default function DictionaryContent() {
  const { currentItem, changeItem } = useTab(0, DICTIONARY_TYPE);
  const sortType = currentItem?.value || 'name';
  const { data, fetchNextPage, hasNextPage, isLoading } =
    useIngredientDictionaryQuery(sortType);

  const ingredientDictionaryData =
    data?.pages.flatMap((page) => page.results.ingredients) ?? [];

  if (isLoading) return <SkeletonList count={10} />;
  return (
    <>
      <TabMenu
        tabs={DICTIONARY_TYPE}
        currentItem={currentItem}
        onChangeTab={changeItem}
        containerClassName='pb-20 pl-16 pt-13'
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
          isNavBar={true}
        />
      </div>
    </>
  );
}
