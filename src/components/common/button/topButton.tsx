'use client';

import Image from 'next/image';

interface TopButtonProps {
  onClick: () => void;
  show: boolean;
}

export default function TopButton({ onClick, show }: TopButtonProps) {
  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-62 right-20 w-48 h-48 bg-primary rounded-full border-none shadow-md flex items-center justify-center cursor-pointer z-50 transition-all hover:bg-primary-dark"
    >
      <Image
        src="/svgs/arrow/icon-top.svg"
        alt="맨 위로 이동"
        width={24}
        height={24}
      />
    </button>
  );
}
