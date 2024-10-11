import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import CheckIcon from '/public/svgs/filled/icon-check.svg';

type CheckButtonProps = {
  isSelected: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function CheckButton({
  isSelected,
  type = 'button',
  ...props
}: CheckButtonProps) {
  const buttonClasses = twMerge(
    'h-24 w-24',
    isSelected ? 'fill-primary' : 'fill-neutral-400',
  );

  return (
    <button type={type} {...props}>
      <CheckIcon className={buttonClasses} />
    </button>
  );
}
