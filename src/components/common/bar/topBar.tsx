'use client';

import LeftArrowIcon from '/public/svgs/arrow/icon-left2.svg';
import CrossIcon from '/public/svgs/arrow/icon-cross.svg';

interface TopbarProps {
  title?: string;
  onPrev?: () => void;
  onClose?: () => void;
}

const Topbar = ({ title, onPrev, onClose }: TopbarProps) => {
  return (
    <div className='relative flex h-58 w-full items-center justify-center bg-white px-16 py-9'>
      {onPrev && (
        <button
          onClick={onPrev}
          className='absolute left-3 top-1/2 flex h-40 w-40 -translate-y-1/2 items-center justify-center'
        >
          <LeftArrowIcon
            width={24}
            height={24}
            className={`h-24 w-24 items-center justify-center stroke-neutral-600`}
          />
        </button>
      )}
      {title && (
        <h1 className='font-18 basis-full text-center font-semibold leading-[120%] text-neutral-900'>
          {title}
        </h1>
      )}
      {onClose && (
        <button
          onClick={onClose}
          className='absolute right-3 top-1/2 flex h-40 w-40 -translate-y-1/2 items-center justify-center'
        >
          <CrossIcon
            width={24}
            height={24}
            className={`h-24 w-24 items-center justify-center stroke-neutral-600`}
          />
        </button>
      )}
    </div>
  );
};

export default Topbar;
