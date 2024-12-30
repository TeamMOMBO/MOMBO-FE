import Image from 'next/image';
import React from 'react';
import EyeIcon from '/public/svgs/light/icon-eye.svg';
import { formatNumberWithCommas } from '<prefix>/shared/utils/format';
import Link from 'next/link';
import { FAQResponse } from '<prefix>/shared/types/content';

type FaqItemProps = {
  faqItem: FAQResponse;
};

export default function FaqItem({ faqItem }: FaqItemProps) {
  const { id, question, image, views } = faqItem;
  return (
    <Link className='flex h-81 w-full gap-12' href={`/faq/${id}`}>
      {image && (
        <Image
          src={image as string}
          alt=''
          width={81}
          height={81}
          className='h-81 w-81 shrink-0 rounded-12'
        />
      )}
      <div className='flexflex-col gap-4'>
        <p className='text-overflow text-body-04 text-neutral-900'>
          {question}
        </p>
        <div className='flex gap-4'>
          <EyeIcon width={20} height={20} className='stroke-neutral-600' />
          <span className='text-body-10 text-neutral-600'>
            {formatNumberWithCommas(views)}명이 읽었어요
          </span>
        </div>
      </div>
    </Link>
  );
}
