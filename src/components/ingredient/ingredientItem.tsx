import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBottomIcon from '/public/svgs/arrow/icon-bottom.svg';
import { IIngredientInfo } from '<prefix>/shared/types/ingredient';
import IngredientItemDetails from './ingredientItemDetails';
import useTextScrollAnimation from '<prefix>/hooks/useTextScrollAnimation';

type IngredientItemProps = {
  ingredientItem: IIngredientInfo;
};

const levelStyles: { [key: string]: string } = {
  '1등급': 'bg-semantic-pink text-semantic-red',
  '2등급': 'bg-semantic-yellow text-semantic-brown',
};

const IngredientItem = ({ ingredientItem }: IngredientItemProps) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const { id, ingredientKr, level, reason, effectType } = ingredientItem;

  const {
    textRef,
    containerRef,
    shouldScroll,
    getScrollDistance,
    isHovered,
    setIsHovered,
  } = useTextScrollAnimation(ingredientKr);

  const toggleItem = (name: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div
      key={id}
      className='w-full space-y-12 rounded-12 border border-solid border-neutral-300 bg-white p-16'
    >
      <button
        onClick={() => toggleItem(ingredientKr)}
        className='flex w-full items-center justify-between rounded-lg bg-white'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='flex items-center gap-6'>
          <div
            ref={containerRef}
            className='relative max-w-[200px] overflow-hidden px-2'
          >
            <motion.span
              ref={textRef}
              className='inline-block whitespace-nowrap text-body-04 text-neutral-900'
              animate={
                shouldScroll && isHovered
                  ? {
                      x: [0, -getScrollDistance()],
                      transition: {
                        duration: Math.min(ingredientKr.length * 0.3, 6),
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'linear',
                      },
                    }
                  : {
                      x: 0,
                    }
              }
            >
              {ingredientKr}
            </motion.span>
          </div>
          {level && (
            <span
              className={`rounded-6 px-6 py-2 text-caption-02 ${levelStyles[level]}`}
            >
              {level}
            </span>
          )}
        </div>
        <motion.div
          animate={{ rotate: openItems[ingredientKr] ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowBottomIcon classname='h-24 w-24 stroke-neutral-600' />
        </motion.div>
      </button>

      <AnimatePresence>
        {openItems[ingredientKr] && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='overflow-hidden'
          >
            <IngredientItemDetails effectType={effectType} reason={reason} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IngredientItem;
