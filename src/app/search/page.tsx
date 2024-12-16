'use client';

import SearchBar from '<prefix>/components/common/bar/searchbar/searchbar';
import LoadingSpinner from '<prefix>/components/common/loading/loadingSpinner';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

export default function SearchPage() {
  const router = useRouter();
  return (
    <div className='flex items-center gap-14 px-16 py-9'>
      <Suspense fallback={<LoadingSpinner />}>
        <SearchBar />
      </Suspense>
      <button type='button' onClick={() => router.back()}>
        취소
      </button>
    </div>
  );
}
