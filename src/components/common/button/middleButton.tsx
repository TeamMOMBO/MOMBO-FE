import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'outline' | 'fill';
type ButtonColor = 'primary' | 'primary-dark' | 'secondary';

// 유효한 조합만 허용하는 타입
// ex) variant:outline, buttonColor:'primary' 조합 사용시x
// variant: fills, buttonColor: 'primary' O
type ButtonProps<V extends ButtonVariant> = V extends 'fill'
  ? {
      variant: V;
      buttonColor: ButtonColor;
    } & ButtonHTMLAttributes<HTMLButtonElement>
  : V extends 'outline'
    ? {
        variant: V;
        buttonColor?: never;
      } & ButtonHTMLAttributes<HTMLButtonElement>
    : never;

const getVariant = (
  variant: ButtonVariant,
  color: ButtonColor,
  disabled?: boolean,
) => {
  if (disabled) {
    return 'bg-neutral-400 text-white';
  }
  if (variant === 'outline') {
    return 'border-2 border-primary text-primary bg-white';
  }
  if (variant === 'fill') {
    switch (color) {
      case 'primary':
        return 'bg-primary text-white';
      case 'primary-dark':
        return 'bg-primary-dark text-white';
      default:
        return 'bg-primary text-white';
    }
  }
  return '';
};

export default function MiddleButton<V extends ButtonVariant>({
  children,
  variant,
  type = 'button',
  className,
  buttonColor,
  disabled,
  ...props
}: ButtonProps<V>) {
  const buttonClasses = twMerge(
    'w-130 h-40 rounded-8 font-semibold',
    getVariant(variant, buttonColor as ButtonColor, disabled),
    className,
  );
  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      <p>{children}</p>
    </button>
  );
}
