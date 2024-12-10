'use client';
import FaqInfoItem from '<prefix>/components/faq/faqInfoItem';
import IngredientItem from '<prefix>/components/ingredient/ingredientItem';
import { useSearchPreviewQuery } from '<prefix>/state/queries/search';

import { useRouter } from 'next/navigation';
import React from 'react';

interface SearchResultsProps {
  keyword: string;
}

export default function SearchResults({ keyword }: SearchResultsProps) {
  const { searchPreviewData, searchPreviewLoading } = useSearchPreviewQuery({
    keyword,
    category: 'all',
  });

  const router = useRouter();
  const contentItems = searchPreviewData?.faqs;
  const dictionaryItems = searchPreviewData?.ingredients;

  if (searchPreviewLoading) return <div>검색중...</div>;

  return (
    <div className='px-16 py-19'>
      <div className='flex flex-col gap-20'>
        <p className='text-body-01 text-neutral-900'>
          콘텐츠{' '}
          <span className='text-body-04 text-primary'>
            {contentItems?.length}
          </span>
        </p>
        <ul className='flex flex-col gap-16'>
          {contentItems?.map((faqInfoItem, index) => (
            <FaqInfoItem key={index} faqInfoItem={faqInfoItem} />
          ))}
        </ul>
        <button
          className='h-44 w-358 rounded-8 bg-neutral-200 text-center text-body-08 text-neutral-900'
          onClick={() =>
            router.push(`/search/results/details/content?keyword=${keyword}`)
          }
        >
          콘텐츠 더보기
        </button>
      </div>
      <div className='space-y-20 py-30'>
        <p className='text-body-01 text-neutral-900'>
          성분사전{' '}
          <span className='text-body-04 text-primary'>
            {dictionaryItems?.length}
          </span>
        </p>
        <ul className='flex w-full flex-col gap-12'>
          {dictionaryItems?.map((ingrediientItem, index) => (
            <IngredientItem key={index} ingredientItem={ingrediientItem} />
          ))}
        </ul>
        <button
          className='h-44 w-358 rounded-8 bg-neutral-200 text-center text-body-08 text-neutral-900'
          onClick={() =>
            router.push(`/search/results/details/dictionary?keyword=${keyword}`)
          }
        >
          콘텐츠 더보기
        </button>
      </div>
    </div>
  );
}