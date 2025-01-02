import BackTopBar from '../../bar/backTopBar';
import EyeIcon from '/public/svgs/light/icon-eye.svg';

export default function FAQSkeleton() {
  return (
    <div className='flex basis-full flex-col'>
      {/* 이미지 스켈레톤톤 */}
      <div className='relative h-[240px] w-full shrink-0 animate-pulse bg-neutral-200'>
        <div className='absolute top-0 z-10 w-full'>
          <BackTopBar transparent />
        </div>
      </div>
      <div className='flex basis-full flex-col gap-30 px-16 pb-28 pt-24'>
        <div className='flex basis-full flex-col gap-20'>
          {/* 제목 섹션 */}
          <div>
            <div className='mb-4 h-30 w-full animate-pulse rounded-6 bg-neutral-200' />
            <div className='flex gap-4'>
              <EyeIcon width={20} height={20} className='stroke-neutral-600' />
              <div className='h-20 w-90 animate-pulse rounded-6 bg-neutral-200' />
            </div>
          </div>
          {/* 본문 섹션 */}
          <div>
            <div className='mb-4 h-16 w-full animate-pulse rounded-6 bg-neutral-200' />
            <div className='mb-4 h-16 w-full animate-pulse rounded-6 bg-neutral-200' />
            <div className='mb-4 h-16 w-full animate-pulse rounded-6 bg-neutral-200' />
            <div className='mb-4 h-16 w-200 animate-pulse rounded-6 bg-neutral-200' />
          </div>
          <div>
            <div className='mb-4 h-16 w-full animate-pulse rounded-6 bg-neutral-200' />
            <div className='mb-4 h-16 w-full animate-pulse rounded-6 bg-neutral-200' />
            <div className='mb-4 h-16 w-full animate-pulse rounded-6 bg-neutral-200' />
            <div className='mb-4 h-16 w-200 animate-pulse rounded-6 bg-neutral-200' />
          </div>
        </div>
        <div className='h-56 w-full animate-pulse rounded-12 bg-neutral-200' />
      </div>
    </div>
  );
}
