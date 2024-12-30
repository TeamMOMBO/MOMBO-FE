'use client';

interface SkeletonListProps {
  count: number;
}

export default function SkeletonList({ count }: SkeletonListProps) {
  return (
    <>
      {/* TabMenu 영역과 동일한 여백 유지 */}
      <div className='pb-20 pl-16 pt-13'>
        <div className='h-[40px] w-[200px] bg-neutral-200 rounded-6 animate-pulse' />
      </div>

      {/* VirtualList 영역과 동일한 구조 */}
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
                    {/* 성분 이름 */}
                    <div className='w-[200px] h-[24px] bg-neutral-200 rounded-6 animate-pulse' />
                    {/* 등급 표시 */}
                    <div className='w-[48px] h-[20px] bg-neutral-200 rounded-6 animate-pulse' />
                  </div>
                  {/* 화살표 아이콘 */}
                  <div className='w-24 h-24 bg-neutral-200 rounded-full animate-pulse' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
