'use client';

interface SkeletonListProps {
  count: number;
}

export default function SkeletonList({ count }: SkeletonListProps) {
  return (
    <>
      {/* TabMenu 영역*/}
      <div className='pb-20 pl-16 pt-13'>
        <div className='h-[40px] w-[200px] animate-pulse rounded-6 bg-neutral-200' />
      </div>

      {/* VirtualList 영역*/}
      <div className='px-16'>
        <div
          style={{
            height: 'calc(100dvh - 144px)',
            overflow: 'hidden',
          }}
        >
          <div className='space-y-12'>
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={index}
                className='w-full rounded-12 border border-solid border-neutral-300 bg-white p-16'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-6'>
                    <div className='h-[24px] w-[200px] animate-pulse rounded-6 bg-neutral-200' />
                    <div className='h-[20px] w-[48px] animate-pulse rounded-6 bg-neutral-200' />
                  </div>
                  <div className='h-24 w-24 animate-pulse rounded-full bg-neutral-200' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
