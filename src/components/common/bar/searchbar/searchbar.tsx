'use client';

import SearchIcon from '/public/svgs/light/icon-search.svg';
import Cross from '/public/svgs/filled/icon-cross.svg';
import { useRouter, useSearchParams } from 'next/navigation';
import useInput from '<prefix>/hooks/useInput';
import { useKeyDown } from '<prefix>/hooks/useKeyDown';
import { useEffect } from 'react';

interface SearchBarProps {
  isResultSearch?: boolean;
}

export default function SearchBar({ isResultSearch = false }: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, changeHandler, reset] = useInput('');

  const keyword = searchParams.get('keyword');

  // useEffect(() => {
  //   setSearch(keyword || '');
  // }, [keyword]);

  const handleSubmit = () => {
    if (!search || keyword === search) return;
    router.push(`/search/results?keyword=${search}`);
  };

  useKeyDown('Enter', handleSubmit, [handleSubmit]);

  return (
    <div className={`relative h-40 ${isResultSearch ? 'w-334' : 'w-312'}`}>
      <div className='absolute inset-y-0 left-13 flex items-center'>
        <SearchIcon className='h-18 w-18 stroke-neutral-600' />
      </div>
      <input
        className='h-full w-full rounded-8 bg-neutral-200 pl-40 text-body-05 text-neutral-900 placeholder-neutral-600 focus:outline-none focus:ring-0'
        placeholder='임신 고민, 유해 성분 등'
        type='text'
        value={search}
        onChange={changeHandler}
      />
      {isResultSearch && (
        <button
          className='absolute inset-y-0 right-8 flex items-center'
          type='button'
          onClick={reset}
        >
          <div className='grid h-20 w-20 place-items-center rounded-full bg-neutral-600'>
            <Cross className='h-12 w-12 text-white' />
          </div>
        </button>
      )}
    </div>
  );
}
