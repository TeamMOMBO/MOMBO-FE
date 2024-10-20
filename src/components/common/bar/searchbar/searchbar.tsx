import SearchIcon from '/public/svgs/light/icon-search.svg';
import Cross from '/public/svgs/filled/icon-cross.svg';

interface SearchBarProps {
  isResultSearch?: boolean;
}

export default function SearchBar({ isResultSearch = false }: SearchBarProps) {
  return (
    <div className={`relative h-40 ${isResultSearch ? 'w-334' : 'w-312'}`}>
      <div className='absolute inset-y-0 left-13 flex items-center'>
        <SearchIcon className='h-18 w-18 stroke-neutral-600' />
      </div>
      <input
        className='h-full w-full rounded-8 bg-neutral-200 pl-40 text-body-05 text-neutral-900 placeholder-neutral-600 focus:outline-none focus:ring-0'
        placeholder='임신 고민, 유해 성분 등'
        type='text'
      />
      {isResultSearch && (
        <button className='absolute inset-y-0 right-8 flex items-center'>
          <div className='grid h-20 w-20 place-items-center rounded-full bg-neutral-600'>
            <Cross className='h-12 w-12 text-white' />
          </div>
        </button>
      )}
    </div>
  );
}
