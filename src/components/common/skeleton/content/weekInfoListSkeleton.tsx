export default function WeekInfoListSkeleton({ count }: { count: number }) {
  return (
    <div className='flex flex-col gap-16'>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className='flex h-[81px] w-full flex-col gap-4'>
          <div className='h-48 w-full animate-pulse rounded-4 bg-neutral-200' />
          <div className='h-21 w-full animate-pulse rounded-4 bg-neutral-200' />
        </div>
      ))}
    </div>
  );
}
