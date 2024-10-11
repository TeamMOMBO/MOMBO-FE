import Link from 'next/link';
import LeftArrowIcon from '/public/svgs/arrow/icon-left2.svg';

interface BackTopBarProps {
  title?: string;
}

const BackTopBar = ({ title }: BackTopBarProps) => {
  return (
    <div className='relative flex h-58 w-full items-center justify-center bg-white px-16 py-9'>
      <Link
        href='/main'
        className='absolute left-3 top-1/2 flex h-40 w-40 -translate-y-1/2 items-center justify-center'
      >
        <LeftArrowIcon
          className={`h-24 w-24 items-center justify-center stroke-neutral-600`}
        />
      </Link>
      {title && (
        <h1 className='font-18 basis-full text-center font-semibold leading-[120%] text-neutral-900'>
          {title}
        </h1>
      )}
    </div>
  );
};

export default BackTopBar;
