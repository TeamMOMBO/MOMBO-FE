import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ChipButtonProps = {
  isSelected: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ChipButton({
  isSelected,
  type = 'button',
  children,

  ...props
}: ChipButtonProps) {
  const buttonClasses = twMerge(
    'px-12 py-6 rounded-8',
    isSelected
      ? 'text-white bg-neutral-800'
      : 'fill-neutral-900 bg-neutral-200',
  );

  return (
    <button type={type} className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
