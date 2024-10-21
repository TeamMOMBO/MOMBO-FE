import SearchBar from '<prefix>/components/common/bar/searchbar/searchbar';
import LeftArrowIcon from '/public/svgs/arrow/icon-left2.svg';

export default function SearchResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='flex items-center gap-13 p-16 pt-9'>
        <LeftArrowIcon
          className={`h-24 w-24 items-center justify-center stroke-neutral-600`}
        />
        <SearchBar isResultSearch={true} />
      </div>
      {children}
    </>
  );
}
