'use client';

import Image from 'next/image';
import { FAQResponse } from '<prefix>/shared/types/content';
import { formatNumberWithCommas } from '<prefix>/shared/utils/format';
import EyeIcon from '/public/svgs/light/icon-eye.svg';
import LargeButton from '<prefix>/components/common/button/largeButton';
import { useRouter } from 'next/navigation';
import BackTopBar from '../../common/bar/backTopBar';
import AnimatedNavBar from '<prefix>/components/common/bar/navbar/animatedNavBar';
import { useRef } from 'react';

type Props = {
  faqData: FAQResponse;
};

export default function FAQDetail({ faqData }: Props) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className='flex basis-full flex-col overflow-y-scroll'
    >
      <div className='relative h-[240px] w-full shrink-0'>
        <div className='absolute top-0 z-10 w-full'>
          <BackTopBar transparent />
        </div>
        <Image
          src={faqData.image}
          alt='Q&A 이미지'
          fill
          className='unset relative'
        />
      </div>
      <div className='flex basis-full flex-col gap-30 px-16 pb-28 pt-24'>
        <div className='flex basis-full flex-col gap-20'>
          {/* 제목 섹션 */}
          <div>
            <h2 className='mb-4 text-head-02 text-neutral-900'>
              {faqData.question}
            </h2>
            <div className='flex gap-4'>
              <EyeIcon width={20} height={20} className='stroke-neutral-600' />
              <span className='text-body-10 text-neutral-600'>
                {formatNumberWithCommas(faqData.views)}명이 읽었어요
              </span>
            </div>
          </div>
          {/* 본문 섹션 */}
          <p className='leading-[160%] text-neutral-700'>
            {faqData.real_question}
          </p>
          <p className='leading-[160%] text-neutral-700'>{faqData.answer}</p>
        </div>
        <LargeButton
          variant='fill'
          buttonColor='gray'
          className=''
          onClick={() => {
            router.push('/content');
          }}
          disabled={false}
        >
          목록보기
        </LargeButton>
      </div>
      <AnimatedNavBar containerRef={containerRef} />
    </div>
  );
}
