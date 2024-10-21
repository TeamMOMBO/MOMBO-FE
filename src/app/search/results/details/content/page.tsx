'use client';

import FaqInfoItem from '<prefix>/components/faq/faqInfoItem';

const faqInfoItems = [
  { question: '출산 후 호박 달인 물은 언제 먹어야 하나요?', views: 1365 },
  { question: '출산 후 호박 달인 물은 언제 먹어야 하나요?', views: 1365 },
  { question: '출산 후 호박 달인 물은 언제 먹어야 하나요?', views: 1365 },
  { question: '출산 후 호박 달인 물은 언제 먹어야 하나요?', views: 1365 },
  { question: '출산 후 호박 달인 물은 언제 먹어야 하나요?', views: 1365 },
  { question: '출산 후 호박 달인 물은 언제 먹어야 하나요?', views: 1365 },
  { question: '출산 후 호박 달인 물은 언제 먹어야 하나요?', views: 1365 },
  { question: '출산 후 호박 달인 물은 언제 먹어야 하나요?', views: 1365 },
  { question: '출산 후 호박 달인 물은 언제 먹어야 하나요?', views: 1365 },
  { question: '출산 후 호박 달인 물은 언제 먹어야 하나요?', views: 1365 },
];

export default function SearchContentsDetails() {
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
        {/* <button className='h-44 w-358 rounded-8 bg-neutral-200 text-center text-body-08 text-neutral-900'>
          콘텐츠 더보기
        </button> */}
      </div>
    </div>
  );
}
