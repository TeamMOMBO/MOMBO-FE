interface SearchResultHeaderProps {
  category: string;
  count: number;
}
export default function SearchResultHeader({
  category,
  count,
}: SearchResultHeaderProps) {
  return (
    <p className='text-body-01 text-neutral-900'>
      {category} <span className='text-body-04 text-primary'>{count}</span>
    </p>
  );
}
