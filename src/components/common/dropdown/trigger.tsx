import { motion } from 'framer-motion';
import ArrowBottomIcon from '/public/svgs/arrow/icon-bottom.svg';
import { Fragment } from 'react';

interface DropDownTriggerProps {
  children: React.ReactNode;
  onClick: () => void;
  isOpen: boolean;
}

export default function DropDownTrigger({
  children,
  onClick,
  isOpen,
}: DropDownTriggerProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onClick();
        }
      }}
      className='flex w-full items-center rounded-12 bg-gray-100 p-16'
    >
      <div className='basis-full text-left'>{children}</div>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowBottomIcon className={`h-24 w-24 stroke-neutral-600`} />
      </motion.div>
    </button>
  );
}
