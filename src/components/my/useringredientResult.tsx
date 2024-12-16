import React from 'react';
import Image from 'next/image';

type ImagePreviewModalProps = {
  imgSrc: string;
};

export default function UseringredientResult({
  imgSrc,
}: ImagePreviewModalProps) {
  return (
    <div className='mb-20 h-142 w-358 rounded-12 bg-neutral-200 p-16'>
      <h3 className='mb-10 text-body-04 text-neutral-800'>최근 분석 기록</h3>
      <div className='grid grid-cols-4 gap-12'>
        <Image
          src={imgSrc}
          alt='성분 분석 이미지'
          className='h-72 w-72 rounded-8 bg-black'
          priority
        />
      </div>
    </div>
  );
}
