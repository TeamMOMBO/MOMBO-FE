'use client';
import RightArrowIcon from '/public/svgs/arrow/icon-right.svg';
import UseringredientResultList from './useringredientResultList';
import { useUserProfileQuery } from '<prefix>/state/queries/user';
import ProgressBar from '<prefix>/components/main/progressBar';
import Link from 'next/link';

const totalWeek = 40;

export default function UserIngredientResult() {
  const { userProfile } = useUserProfileQuery();

  return (
    <div className='mt-24 px-16'>
      <div className='flex flex-col gap-6'>
        <div className='flex items-center gap-2'>
          <span className='text-head-01 text-neutral-900'>
            {userProfile?.profile.nickname} 님
          </span>
          <Link href='/my/edit'>
            <RightArrowIcon
              className={`h-24 w-24 cursor-pointer items-center justify-center stroke-neutral-600`}
            />
          </Link>
        </div>
        <span className='mb-20 text-body-06 text-neutral-600'>
          임신 {userProfile?.profile.pregnancyWeek ?? 0}주 차
        </span>
        <ProgressBar
          currentNum={userProfile?.profile.pregnancyWeek ?? 0}
          totalNum={totalWeek}
        />
        <UseringredientResultList
          resultItem={userProfile?.user_analysis_results ?? []}
        />
      </div>
    </div>
  );
}
