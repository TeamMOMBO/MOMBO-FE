'use client';

import SearchBar from '<prefix>/components/common/bar/searchbar/searchbar';
import { useRouter } from 'next/navigation';

export default function SearchPage() {
  const router = useRouter();
  return (
    <div className='flex items-center gap-14 px-16 py-9'>
      <SearchBar />
      <button type='button' onClick={() => router.back()}>
        취소
      </button>
    </div>
  );
}
