import AllListSkeleton from './allListSkeleton';

export default function ContentSkeleton() {
  return (
    <div className='mt-5 flex basis-full flex-col gap-20 px-16'>
      {/* InfiniteCarousel 스켈레톤 */}
      <div className='relative w-full'>
        <div className='h-100 w-full animate-pulse bg-neutral-200' />
        {/* 페이지네이션 인디케이터 */}
        <div className='absolute bottom-8 right-16 z-10 flex h-[22px] w-[39px] items-center justify-center gap-1 rounded-full bg-black bg-opacity-30 px-8 py-2'>
          <div className='h-[14px] w-[30px] animate-pulse rounded bg-neutral-200' />
        </div>
      </div>
      {/* 메뉴 스켈레톤 */}
      <div className='flex gap-8'>
        {[51, 55, 97].map((width, index) => (
          <div
            key={index}
            className={`h-31 w-${width} animate-pulse rounded-8 bg-neutral-${index === 0 ? '800' : '200'}`}
          />
        ))}
      </div>
      <AllListSkeleton />
    </div>
  );
}
