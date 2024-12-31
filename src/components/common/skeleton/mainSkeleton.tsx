export default function MainSkeleton() {
  return (
    <div className='mx-auto h-[100dvh] w-390 space-y-20 px-16 pt-20'>
      {/* 프로그레스 바 스켈레톤 */}
      <div className='space-y-8'>
        <div className='h-[22px] w-[180px] animate-pulse rounded-4 bg-neutral-200' />
        <div className='h-8 w-[358px] animate-pulse rounded-full bg-neutral-200' />
      </div>

      {/* 주차별 정보 스켈레톤 */}
      <div className='space-y-12'>
        <div className='h-[22px] w-[120px] animate-pulse rounded-4 bg-neutral-200' />
        <div className='hide-scrollbar flex gap-12 overflow-x-auto'>
          {[1, 2].map((index) => (
            <div
              key={index}
              className='flex h-[102px] w-[328px] shrink-0 gap-12 rounded-12 border border-neutral-300 bg-white p-16'
            >
              <div className='h-[70px] w-[70px] shrink-0 animate-pulse rounded-full bg-neutral-200' />
              <div className='flex flex-1 flex-col gap-4'>
                <div className='h-[22px] w-[140px] animate-pulse rounded-4 bg-neutral-200' />
                <div className='h-[36px] w-full animate-pulse rounded-4 bg-neutral-200' />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* InfiniteCarousel 스켈레톤 */}
      <div className='relative w-[358px]'>
        <div className='h-[140px] w-full animate-pulse rounded-12 bg-neutral-200' />
        {/* 페이지네이션 인디케이터 */}
        <div className='absolute bottom-8 right-16 z-10 flex h-[22px] w-[39px] items-center justify-center gap-1 rounded-full bg-black bg-opacity-30 px-8 py-2'>
          <div className='h-[14px] w-[30px] animate-pulse rounded bg-neutral-200' />
        </div>
      </div>

      {/* FAQ 리스트 스켈레톤 */}
      <div className='space-y-12'>
        <div className='h-[22px] w-[120px] animate-pulse rounded-4 bg-neutral-200' />
        <div className='space-y-12'>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className='flex h-[81px] w-[358px] gap-12'>
              <div className='h-[81px] w-[81px] shrink-0 animate-pulse rounded-12 bg-neutral-200' />
              <div className='flex flex-1 flex-col justify-between'>
                <div className='h-[44px] w-full animate-pulse rounded-4 bg-neutral-200' />
                <div className='flex items-center gap-4'>
                  <div className='h-[20px] w-[20px] animate-pulse rounded-full bg-neutral-200' />
                  <div className='h-[17px] w-[100px] animate-pulse rounded-4 bg-neutral-200' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 하단 네비게이션 */}
      <div className='fixed bottom-0 left-1/2 h-[84px] w-390 -translate-x-1/2 border-t border-neutral-200 bg-white'>
        <div className='flex h-full items-center justify-around px-16'>
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className='flex flex-col items-center space-y-2'>
              <div className='h-[24px] w-[24px] animate-pulse rounded bg-neutral-200' />
              <div className='h-[17px] w-[36px] animate-pulse rounded bg-neutral-200' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
