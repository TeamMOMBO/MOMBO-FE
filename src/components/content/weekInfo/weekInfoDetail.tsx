'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import BackTopBar from '../../common/bar/backTopBar';
import { WeekInfoResponse } from '<prefix>/shared/types/content';
import LargeButton from '<prefix>/components/common/button/largeButton';
import AnimatedNavBar from '<prefix>/components/common/bar/navbar/animatedNavBar';

type Props = {
  weekInfoData: WeekInfoResponse;
};

export default function WeekInfoDetail({ weekInfoData }: Props) {
  console.log(weekInfoData);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [title, summary] = (([t, ...s]) => [t, s.join('.')])(
    weekInfoData.summary.split('.'),
  );

  return (
    <>
      <div
        ref={containerRef}
        className='flex basis-full flex-col overflow-y-scroll'
      >
        <div>
          <BackTopBar transparent />
        </div>
        <div className='flex basis-full flex-col gap-20 px-16 pb-28'>
          <div className='flex basis-full flex-col gap-20'>
            {/* 제목 섹션 */}
            <div className='flex flex-col gap-8'>
              <div className='flex items-center gap-8'>
                <span className='rounded-6 bg-primary-light px-6 py-2 text-body-08 text-primary'>
                  {weekInfoData.step}
                </span>
                <span className='text-nuetral-900 text-body-04'>
                  {weekInfoData.week}주차
                </span>
              </div>
              <h2 className='text-head-01 text-neutral-900'>{title}</h2>
            </div>
            {/* 본문 섹션 */}
            <div className='flex basis-full flex-col gap-20'>
              {/* 요약 */}
              <p className='flex flex-col gap-4 bg-neutral-200 px-20 py-16'>
                <span className='text-body-04 leading-[160%] text-neutral-900'>
                  💡 요약
                </span>
                <span className='text-body-06 leading-[160%] text-neutral-700'>
                  {summary}
                </span>
              </p>
              <p className='flex flex-col gap-4 leading-[160%] text-neutral-700'>
                <span className='text-body-04 leading-[160%] text-neutral-900'>
                  태아
                </span>
                <span>{weekInfoData.fetus}</span>
              </p>
              <p className='flex flex-col gap-4 leading-[160%] text-neutral-700'>
                <span className='text-body-04 leading-[160%] text-neutral-900'>
                  임신부
                </span>
                <span>{weekInfoData.maternity}</span>
              </p>
              <p className='leading-[160%] text-neutral-700'></p>
            </div>
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
    </>
  );
}
