import React from 'react';
import Image from 'next/image';
import { UserAnalysisResult } from '<prefix>/shared/types/auth';

interface ResultItems {
  resultItem: UserAnalysisResult[];
}

export default function UseringredientResultList({ resultItem }: ResultItems) {
  return (
    <div className='my-20 h-142 w-358 rounded-12 bg-neutral-200 p-16'>
      <h3 className='mb-10 text-body-04 text-neutral-800'>최근 분석 기록</h3>
      <div className='grid grid-cols-4 gap-12'>
        {resultItem &&
          resultItem.map((item) => (
            <Image
              key={item.id}
              src={item.image}
              alt={`성분 분석 이미지 ${item.id}`}
              width={72}
              height={72}
              className='h-72 w-72 rounded-8'
              priority
            />
          ))}
      </div>
    </div>
  );
}
