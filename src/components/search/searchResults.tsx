'use client';
import FaqItem from '<prefix>/components/faq/faqItem';
import IngredientItem from '<prefix>/components/ingredient/ingredientItem';
import { useSearchPreviewQuery } from '<prefix>/state/queries/search';
import { useRouter } from 'next/navigation';
import React from 'react';
import LoadingSpinner from '../common/loading/loadingSpinner';

interface SearchResultsProps {
  keyword: string;
}

export default function SearchResults({ keyword }: SearchResultsProps) {
  const { searchPreviewData, searchPreviewLoading } =
    useSearchPreviewQuery(keyword);

  const router = useRouter();
  const contentItems = searchPreviewData?.faqs;
  const dictionaryItems = searchPreviewData?.ingredients;

  if (searchPreviewLoading) return <LoadingSpinner />;

  return (
    <>
      {!contentItems?.length && !dictionaryItems?.length ? (
        <div className='flex h-[calc(100vh-144px)] items-center justify-center'>
          <p className='text-body-03'>'{keyword}'에 대한 검색 결과가 없어요</p>
        </div>
      ) : (
        <div className='px-16 py-19'>
          {contentItems && contentItems?.length > 0 && (
            <div className='flex flex-col gap-20'>
              <p className='text-body-01 text-neutral-900'>
                콘텐츠{' '}
                <span className='text-body-04 text-primary'>
                  {searchPreviewData?.faqsCount}
                </span>
              </p>
              <ul className='flex flex-col gap-16'>
                {contentItems.map((faqItem, index) => (
                  <FaqItem key={index} faqItem={faqItem} />
                ))}
              </ul>
              <button
                className='h-44 w-358 rounded-8 bg-neutral-200 text-center text-body-08 text-neutral-900'
                onClick={() =>
                  router.push(`/search/results/details/${keyword}/content`)
                }
              >
                콘텐츠 더보기
              </button>
            </div>
          )}

          {dictionaryItems && dictionaryItems?.length > 0 && (
            <div
              className={`space-y-20 ${contentItems?.length ? 'py-30' : ''}`}
            >
              <p className='text-body-01 text-neutral-900'>
                성분사전{' '}
                <span className='text-body-04 text-primary'>
                  {searchPreviewData?.ingredientsCount}
                </span>
              </p>
              <ul className='flex w-full flex-col gap-12'>
                {dictionaryItems.map((ingredientItem, index) => (
                  <IngredientItem key={index} ingredientItem={ingredientItem} />
                ))}
              </ul>
              <button
                className='h-44 w-358 rounded-8 bg-neutral-200 text-center text-body-08 text-neutral-900'
                onClick={() =>
                  router.push(
                    `/search/results/details/${encodeURIComponent(keyword)}/dictionary`,
                  )
                }
              >
                성분사전 더보기
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
