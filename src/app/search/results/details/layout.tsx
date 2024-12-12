'use client';
import SearchBar from '<prefix>/components/common/bar/searchbar/searchbar';
import LeftArrowIcon from '/public/svgs/arrow/icon-left2.svg';

import { useRouter, useSearchParams } from 'next/navigation';

interface DetailsLayoutProps {
  children: React.ReactNode;
}

export default function DetailsLayout({ children }: DetailsLayoutProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const keyword = searchParams.get('keyword') || '';

  return (
    <>
      <div className='flex items-center gap-13 p-16 pt-9'>
        <button type='button' onClick={() => router.back()}>
          <LeftArrowIcon
            className={`h-24 w-24 cursor-pointer items-center justify-center stroke-neutral-600`}
          />
        </button>
        <SearchBar defaultKeyword={keyword} isResultSearch={true} />
      </div>
      {children}
    </>
  );
}
