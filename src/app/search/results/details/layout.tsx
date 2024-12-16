'use client';
import SearchBar from '<prefix>/components/common/bar/searchbar/searchbar';
import LeftArrowIcon from '/public/svgs/arrow/icon-left2.svg';

import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

interface DetailsLayoutProps {
  children: React.ReactNode;
}

export default function DetailsLayout({ children }: DetailsLayoutProps) {
  const router = useRouter();
  return (
    <>
      <div className='flex items-center gap-13 p-16 pt-9'>
        <button type='button' onClick={() => router.back()}>
          <LeftArrowIcon
            className={`h-24 w-24 cursor-pointer items-center justify-center stroke-neutral-600`}
          />
        </button>
        <Suspense
          fallback={
            <div className='h-40 w-334 animate-pulse rounded-8 bg-neutral-200' />
          }
        >
          <SearchBar isResultSearch={true} />
        </Suspense>
      </div>
      {children}
    </>
  );
}
