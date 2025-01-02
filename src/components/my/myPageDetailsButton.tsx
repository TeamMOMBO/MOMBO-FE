'use client';
import { useRouter } from 'next/navigation';
import RightArrowIcon from '/public/svgs/arrow/icon-right.svg';

interface MyPageDetailsButtonProps {
  children: React.ReactNode;
  navigateTo?: string;
  onClick?: () => void;
}

export default function MyPageDetailsButton({
  children,
  navigateTo,
  onClick,
}: MyPageDetailsButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (navigateTo) {
      router.push(navigateTo);
    }
  };

  return (
    <button
      onClick={handleClick}
      className='flex w-full items-center justify-between p-16'
    >
      <span className='text-body-04'>{children}</span>
      <RightArrowIcon className='h-24 w-24 cursor-pointer items-center justify-center stroke-neutral-600' />
    </button>
  );
}
