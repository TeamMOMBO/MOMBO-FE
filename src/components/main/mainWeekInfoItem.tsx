import { IWeekInfo } from '<prefix>/shared/types/main';

import BabyIcon from '/public/svgs/icon-baby.svg';
import MomIcon from '/public/svgs/icon-mom.svg';

type PregnancyCardProps = {
  weekInfoItem: IWeekInfo;
};

export default function MainWeekInfoItem({ weekInfoItem }: PregnancyCardProps) {
  const { pregnancyDate, description, type } = weekInfoItem;

  return (
    <div className='flex h-102 w-328 shrink-0 cursor-pointer gap-12 rounded-12 border border-solid border-neutral-300 bg-white p-16'>
      {type === '엄마' && <MomIcon className='h-70 w-70 shrink-0' />}
      {type === '아기' && <BabyIcon className='h-70 w-70 shrink-0' />}
      <div className='flex flex-col gap-4'>
        <span className='text-body-04 text-neutral-900'>
          {pregnancyDate}주 차 {type}는
        </span>
        <p className='text-overflow text-body-10 text-neutral-600'>
          {description}
        </p>
      </div>
    </div>
  );
}
