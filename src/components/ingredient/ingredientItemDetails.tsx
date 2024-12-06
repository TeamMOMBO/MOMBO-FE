import { motion } from 'framer-motion';

type IngredientItemDetailsProps = {
  effectType: string;
  reason: string;
};

export default function IngredientItemDetails({
  effectType,
  reason,
}: IngredientItemDetailsProps) {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex items-start gap-8'>
        <span className='shrink-0 rounded-full bg-neutral-200 px-4 py-2 text-caption-02 text-neutral-600'>
          약효분류
        </span>
        <span className='flex-1 text-body-10 text-neutral-600'>
          {effectType}
        </span>
      </div>
      <div className='flex items-start gap-8'>
        <span className='shrink-0 rounded-full bg-neutral-200 px-4 py-2 text-caption-02 text-neutral-600'>
          허가사항
        </span>
        <span className='flex-1 text-body-10 text-neutral-600'>
          {!reason || reason === 'nan' ? '확인불가' : reason}
        </span>
      </div>
    </div>
  );
}
