import FAQListSkeleton from './faqListSkeleton';
import WeekInfoListSkeleton from './weekInfoListSkeleton';

export default function AllListSkeleton() {
  return (
    <div className='flex flex-col gap-20'>
      {/* FAQ 리스트 스켈레톤 */}
      <div className='h-27 w-120 animate-pulse rounded-8 bg-neutral-200' />
      <FAQListSkeleton count={3} />
      {/* 주차별 정보 스켈레톤 */}
      <div className='h-27 w-120 animate-pulse rounded-8 bg-neutral-200' />
      <WeekInfoListSkeleton count={3} />
    </div>
  );
}
