'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { UserAnalysisResult } from '<prefix>/shared/types/auth';
import LeftIcon from '/public/svgs/arrow/icon-left2.svg';
import RightIcon from '/public/svgs/arrow/icon-right.svg';
import useImageAnalyzer from '<prefix>/hooks/useImageAnalyzer';
import IngredientLoading from '<prefix>/components/ingredient/ingredientLoading';
import { useRouter } from 'next/navigation';

interface ResultItems {
  resultItem: UserAnalysisResult[];
}

export default function UseringredientResultList({ resultItem }: ResultItems) {
  const { fileInputRef, handleImageClick, handleSelectImage, isPending } =
    useImageAnalyzer();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleResultClick = (id: number) => {
    router.push(`/ingredient/result?id=${id}`);
  };

  if (isPending) {
    return <IngredientLoading />;
  }

  return (
    <div className='my-20 h-142 w-full rounded-12 bg-neutral-200 p-16'>
      <h3 className='mb-10 text-body-04 text-neutral-800'>최근 분석 기록</h3>
      {resultItem.length === 0 ? (
        <div className='flex h-[calc(100%-2.5rem)] flex-col items-center justify-center gap-12'>
          <p className='text-center text-body-06 text-neutral-500'>
            아직 분석 기록이 없어요.
          </p>
          <button
            onClick={handleImageClick}
            className='w-326 rounded-lg bg-white py-8 text-body-04 text-primary outline outline-1'
          >
            분석할 이미지 등록하기
          </button>
          <input
            type='file'
            accept='image/jpg, image/png, image/jpeg, image/bmp, image/tif, image/heic'
            hidden
            ref={fileInputRef}
            onChange={handleSelectImage}
            className='hidden'
          />
        </div>
      ) : (
        <div className='relative'>
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
                  <div
                    key={item.id}
                    onClick={() => handleResultClick(item.id)}
                    className='flex-none cursor-pointer'
                  >
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
