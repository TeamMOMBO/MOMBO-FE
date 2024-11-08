'use client';

import FaqInfoItem from '<prefix>/components/faq/faqInfoItem';
import IngredientItem from '<prefix>/components/ingredient/ingredientItem';
import { IIngredientInfo } from '<prefix>/shared/types/ingredient';

const faqInfoItems = [
  { question: '출산 후 호박 달인 물은 언제 먹어야 하나요?', views: 1365 },
  { question: '출산 후 호박 달인 물은 언제 먹어야 하나요?', views: 1365 },
  { question: '출산 후 호박 달인 물은 언제 먹어야 하나요?', views: 1365 },
];

// const ingrediientItems: IIngredientInfo[] = [
//   {
//     id: 1,
//     name: '아세트아미노펜(USP)',
//     level: '1',
//     reason:
//       '아세트아미노펜(USP)은 이러이러한 성분이고 이러이러해서 안좋습니다. 이러이러한 이유가 어쩌구 저쩌구 어쩌구 저쩌구',
//   },
//   {
//     id: 2,
//     name: '디펜히드라민염산염(USP)',
//     level: '2',
//     reason:
//       '디펜히드라민염산염(USP)은 이러이러한 성분이고 이러이러해서 안좋습니다. 이러이러한 이유가 어쩌구 저쩌구 어쩌구 저쩌구',
//   },
//   {
//     id: 3,
//     name: '디펜히드라민염산염(USP)',
//     level: '1',
//     reason:
//       '디펜히드라민염산염(USP)은 이러이러한 성분이고 이러이러해서 안좋습니다. 이러이러한 이유가 어쩌구 저쩌구 어쩌구 저쩌구',
//   },
// ];

export default function SearchResultPage({
  searchParams,
}: {
  searchParams: {
    keyword?: string;
  };
}) {
  console.log(searchParams.keyword);
  return (
    <div className='px-16 py-19'>
      <div className='flex flex-col gap-20'>
        <p className='text-body-01 text-neutral-900'>
          콘텐츠 <span className='text-body-04 text-primary'>12</span>
        </p>
        <ul className='flex flex-col gap-16'>
          {faqInfoItems.map((faqInfoItem, index) => (
            <FaqInfoItem key={index} faqInfoItem={faqInfoItem} />
          ))}
        </ul>
        <button className='h-44 w-358 rounded-8 bg-neutral-200 text-center text-body-08 text-neutral-900'>
          콘텐츠 더보기
        </button>
      </div>
      <div className='space-y-20 py-30'>
        <p className='text-body-01 text-neutral-900'>
          성분사전 <span className='text-body-04 text-primary'>4</span>
        </p>
        {/* <ul className='flex w-full flex-col gap-12'>
          {ingrediientItems.map((ingrediientItem, index) => (
            <IngredientItem key={index} ingredientItem={ingrediientItem} />
          ))}
        </ul> */}
        <button className='h-44 w-358 rounded-8 bg-neutral-200 text-center text-body-08 text-neutral-900'>
          콘텐츠 더보기
        </button>
      </div>
    </div>
  );
}
