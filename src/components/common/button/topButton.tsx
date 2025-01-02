'use client';

import Image from 'next/image';

interface TopButtonProps {
  onClick: () => void;
  show: boolean;
  isNavBar?: boolean;
}

export default function TopButton({ onClick, show, isNavBar }: TopButtonProps) {
  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className={`fixed right-20 z-50 flex h-48 w-48 cursor-pointer items-center justify-center rounded-full border-none bg-primary shadow-md transition-all hover:bg-primary-dark ${
        isNavBar ? 'bottom-110' : 'bottom-20'
      }`}
    >
      <Image
        src='/svgs/arrow/icon-top.svg'
        alt='맨 위로 이동'
        width={24}
        height={24}
      />
    </button>
  );
}
