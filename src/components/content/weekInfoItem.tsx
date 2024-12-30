import Image from 'next/image';
import React from 'react';
import EyeIcon from '/public/svgs/light/icon-eye.svg';
import { formatNumberWithCommas } from '<prefix>/shared/utils/format';
import Link from 'next/link';
import { WeekInfoResponse } from '<prefix>/shared/types/content';

type FaqItemProps = {
  weekInfoItem: WeekInfoResponse;
};

export default function WeekInfoItem({ weekInfoItem }: FaqItemProps) {
  const { id, week, summary, maternity, fetus } = weekInfoItem;
  return (
    <Link className='flex h-81 w-full gap-12' href={`/weekInfo/${id}`}>
      <div className='flex flex-col gap-4'>
        <p className='text-overflow shrink-0 text-body-04 text-neutral-900'>
          <span className='text-primary'>{week}주차 </span>
          {maternity}
        </p>
        <span className='text-overflow-1 text-body-10 text-neutral-600'>
          {summary}
        </span>
      </div>
    </Link>
  );
}
