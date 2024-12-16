'use client';
import { useRouter } from 'next/navigation';
import RightArrowIcon from '/public/svgs/arrow/icon-right.svg';

interface myPageDetailsButtonProps {
  children: React.ReactNode;
  navigateTo?: string;
}

export default function MyPageDetailsButton({
  children,
  navigateTo,
}: myPageDetailsButtonProps) {
  const router = useRouter();

  const handleNavigation = () => {
    if (navigateTo) {
      router.push(navigateTo);
    }
  };

  return (
    <button
      onClick={handleNavigation}
      className='flex w-390 items-center justify-between p-16'
    >
      <span className='text-body-04'>{children}</span>
      <RightArrowIcon
        className={`h-24 w-24 cursor-pointer items-center justify-center stroke-neutral-600`}
      />
    </button>
  );
}
