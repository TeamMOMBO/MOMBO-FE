import Link from 'next/link';
import { IIngredientInfo } from '<prefix>/shared/types/ingredient';

type IngredientItemProps = {
    ingrediientItem: IIngredientInfo;
};

export default function IngredientItem({
  ingrediientItem,
}: IngredientItemProps) {
  const { id, name, level, notes } = ingrediientItem;

  const levelStyles: { [key: number]: string } = {
    1: 'bg-[#EE5E56]',
    2: 'bg-[#FFF07D]',
  };

  return (
    <li className='h-auto w-full rounded-12 border border-solid border-neutral-300 bg-white'>
      <Link
        href={`/indredient/detail/${id}`} // 임시 url 설정
        className='flex w-full flex-col gap-8 p-16'
      >
        <div className='flex gap-8'>
          <div className={`h-24 w-24 rounded-full ${levelStyles[level]}`}></div>
          <h3 className='text-body-04 text-neutral-900'>{name}</h3>
        </div>
        <p className='text-overflow text-body-10 text-neutral-600'>{notes}</p>
      </Link>
    </li>
  );
}
