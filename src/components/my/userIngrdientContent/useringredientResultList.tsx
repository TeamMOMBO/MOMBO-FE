import React, { useRef } from 'react';
import Image from 'next/image';
import { UserAnalysisResult } from '<prefix>/shared/types/auth';
import LeftIcon from '/public/svgs/arrow/icon-left2.svg';
import RightIcon from '/public/svgs/arrow/icon-right.svg';

interface ResultItems {
  resultItem: UserAnalysisResult[];
}

export default function UseringredientResultList({ resultItem }: ResultItems) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 300; // 스크롤할 픽셀 양
    const newScrollPosition =
      scrollContainerRef.current.scrollLeft +
      (direction === 'left' ? -scrollAmount : scrollAmount);

    scrollContainerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    });
  };

  const showNavigation = resultItem.length > 4;

  return (
    <div className='my-20 h-142 w-full rounded-12 bg-neutral-200 p-16'>
      <h3 className='mb-10 text-body-04 text-neutral-800'>최근 분석 기록</h3>
      {resultItem.length === 0 ? (
        <div className='flex h-[calc(100%-2.5rem)] items-center justify-center'>
          <p className='text-center text-body-05 text-neutral-500'>
            아직 성분 분석 기록이 없습니다
          </p>
        </div>
      ) : (
        <div className='relative'>
          {showNavigation && (
            <>
              <button
                onClick={() => handleScroll('left')}
                className='absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-gray-100 p-2 shadow-lg'
              >
                <LeftIcon className='h-24 w-24 stroke-neutral-600' />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className='absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg'
              >
                <RightIcon className='h-24 w-24 stroke-neutral-600' />
              </button>
            </>
          )}
          <div
            ref={scrollContainerRef}
            className='hide-scrollbar flex overflow-x-auto'
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className='flex gap-12'>
              {resultItem &&
                resultItem.map((item) => (
                  <div key={item.id} className='flex-none'>
                    <Image
                      src={item.image}
                      alt={`성분 분석 이미지 ${item.id}`}
                      width={72}
                      height={72}
                      className='h-72 w-72 rounded-8'
                      priority
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
