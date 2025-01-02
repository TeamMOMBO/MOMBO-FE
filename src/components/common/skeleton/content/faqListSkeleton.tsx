export default function FAQListSkeleton({ count }: { count: number }) {
  return (
    <div className='flex flex-col gap-16'>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className='flex h-[81px] w-full gap-12'>
          <div className='h-[81px] w-[81px] shrink-0 animate-pulse rounded-12 bg-neutral-200' />
          <div className='flex flex-1 flex-col gap-4'>
            <div className='h-48 w-full animate-pulse rounded-4 bg-neutral-200' />
            <div className='flex items-center gap-4'>
              <div className='h-[20px] w-[20px] animate-pulse rounded-full bg-neutral-200' />
              <div className='h-[17px] w-[100px] animate-pulse rounded-4 bg-neutral-200' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
