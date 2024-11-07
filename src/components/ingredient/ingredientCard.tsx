import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowIcon from '/public/svgs/arrow/icon-top.svg';

interface IngredientItems {
  id: number;
  name: string;
  level?: string;
  reason: string;
  isOpen?: boolean;
}

const ingredientItems: IngredientItems[] = [
  {
    id: 1,
    name: '프로젝트테마',
    level: '1등급',
    reason: '여성 태아의 남성화 초래 가능성.',
  },
  {
    id: 2,
    name: '아바카버크',
    level: '2등급',
    reason: '신생여아 외부생식기의 남성화 가능성.',
  },
  {
    id: 3,
    name: '아세클로페나',
    level: '1등급',
    reason: '여성 태아의 남성화 초래 가능성.',
  },
  {
    id: 4,
    name: '알릴에스트레놀',
    level: '1등급',
    reason: '여성 태아의 남성화 초래 가능성.',
  },
  {
    id: 5,
    name: '아미노레불린산',
    level: '2등급',
    reason: '여성 태아의 남성화 초래 가능성.',
  },
  {
    id: 6,
    name: '아니스트로졸',
    level: '1등급',
    reason: '여성 태아의 남성화 초래 가능성.',
  },
  {
    id: 7,
    name: '젠타마이신',
    level: '2등급',
    reason: '여성 태아의 남성화 초래 가능성.',
  },
  {
    id: 8,
    name: '이소트레티노인',
    level: '1등급',
    reason: '여성 태아의 남성화 초래 가능성.',
  },
  {
    id: 9,
    name: '아세트아미노펜(USP)',
    level: '1등급',
    reason: '여성 태아의 남성화 초래 가능성.',
  },
];

const levelStyles: { [key: string]: string } = {
  '1등급': 'bg-semantic-pink text-semantic-red',
  '2등급': 'bg-semantic-yellow text-semantic-brown',
};

const IngredientCard = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (name: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <>
      {ingredientItems.map((item) => (
        <div
          key={item.name}
          className='border-netural-300 w-full space-y-12 rounded-12 border border-solid border-neutral-300 bg-white p-16'
        >
          <button
            onClick={() => toggleItem(item.name)}
            className='flex w-full items-center justify-between rounded-lg bg-white px-4 py-3'
          >
            <div className='flex items-center gap-6'>
              <span className='text-body-04 text-neutral-900'>{item.name}</span>
              {item.level && (
                <span
                  className={`rounded-6 px-6 py-2 text-caption-02 ${levelStyles[item.level]}`}
                >
                  {item.level}
                </span>
              )}
            </div>
            <motion.div
              animate={{ rotate: openItems[item.name] ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowIcon className={`h-24 w-24 stroke-neutral-600`} />
            </motion.div>
          </button>

          <AnimatePresence>
            {openItems[item.name] && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='overflow-hidden'
              >
                <div className='gap-6.5 flex flex-col'>
                  <div className='flex items-center gap-8 px-4 py-3'>
                    <span className='rounded-full bg-neutral-200 p-4 text-caption-02 text-neutral-600'>
                      약효분류
                    </span>
                    <span className='text-body-10 text-neutral-600'>
                      {item.reason}
                    </span>
                  </div>
                  <div className='flex items-center gap-8 px-4 py-3'>
                    <span className='rounded-full bg-neutral-200 p-4 text-caption-02 text-neutral-600'>
                      허가사항
                    </span>
                    <span className='text-body-10 text-neutral-600'>
                      {item.reason}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </>
  );
};

export default IngredientCard;
