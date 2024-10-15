import { IWeekInfo } from '<prefix>/shared/types/main';
import Image from 'next/image';

type WeekCardProps = {
  weekInfoItem: IWeekInfo;
};

export default function WeekInfoItem({ weekInfoItem }: WeekCardProps) {
  const { imageSrc, weeks, description } = weekInfoItem;
  return (
    <div className='flex h-102 w-328 shrink-0 cursor-pointer gap-12 rounded-12 border border-solid border-neutral-300 bg-white p-16'>
      <Image
        src={imageSrc}
        alt=''
        width={70}
        height={70}
        className='h-70 w-70 shrink-0 rounded-full'
      />
      <div className='flex flex-col gap-4'>
        <span className='text-body-04 text-neutral-900'>
          {weeks}주 차 엄마는
        </span>
        <p className='text-overflow text-body-10 text-neutral-600'>
          {description}
        </p>
      </div>
    </div>
  );
}
