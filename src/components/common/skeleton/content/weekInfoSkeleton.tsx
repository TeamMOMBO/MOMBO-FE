import BackTopBar from '../../bar/backTopBar';
import EyeIcon from '/public/svgs/light/icon-eye.svg';

export default function WeekInfoSkeleton() {
  return (
    <div className='flex basis-full flex-col overflow-y-scroll'>
      <div>
        <BackTopBar transparent />
      </div>
      <div className='flex basis-full flex-col gap-20 px-16 pb-28'>
        {/* 제목 섹션 */}
        <div className='flex flex-col gap-8'>
          <div className='h-24 w-90 animate-pulse rounded-6 bg-neutral-200' />
          <div className='h-34 w-full animate-pulse rounded-6 bg-neutral-200' />
        </div>
        {/* 본문 섹션 */}
        <div className='flex basis-full flex-col gap-20'>
          {/* 요약 */}
          <div className='flex flex-col gap-4 bg-neutral-200 px-20 py-16'>
            <div>
              <div className='mb-4 h-26 w-40 animate-pulse rounded-6 bg-neutral-100' />
            </div>
            <div>
              <div className='mb-4 h-16 w-full animate-pulse rounded-6 bg-neutral-100' />
              <div className='h-16 w-200 animate-pulse rounded-6 bg-neutral-100' />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='h-26 w-40 animate-pulse rounded-6 bg-neutral-200' />
            <div>
              <div className='mb-4 h-16 w-full animate-pulse rounded-6 bg-neutral-200' />
              <div className='mb-4 h-16 w-full animate-pulse rounded-6 bg-neutral-200' />
              <div className='mb-4 h-16 w-full animate-pulse rounded-6 bg-neutral-200' />
              <div className='h-16 w-200 animate-pulse rounded-6 bg-neutral-200' />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='mb-4 h-26 w-40 animate-pulse rounded-6 bg-neutral-200' />
            <div>
              <div className='mb-4 h-16 w-full animate-pulse rounded-6 bg-neutral-200' />
              <div className='mb-4 h-16 w-full animate-pulse rounded-6 bg-neutral-200' />
              <div className='mb-4 h-16 w-full animate-pulse rounded-6 bg-neutral-200' />
              <div className='h-16 w-200 animate-pulse rounded-6 bg-neutral-200' />
            </div>
          </div>
        </div>
        <div className='h-56 w-full animate-pulse rounded-12 bg-neutral-200' />
      </div>
    </div>
  );
}
