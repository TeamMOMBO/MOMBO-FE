import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  enableMessage?: string;
}

const Input = ({
  type = 'text',
  errorMessage,
  enableMessage,
  value,
  maxLength,
  className,
  ...props
}: InputProps) => {
  const inputClasses = twMerge(
    'h-56 w-358 rounded-xl bg-neutral-200 p-16 text-body-05 text-neutral-900 placeholder-neutral-400 outline-none',
    className,
  );

  return (
    <div className='flex flex-col gap-8'>
      <input type={type} value={value} className={inputClasses} {...props} />
      {(errorMessage || enableMessage) && (
        <div className='flex w-full justify-between'>
          {errorMessage && (
            <p className='text-caption-02 text-semantic-red'>{errorMessage}</p>
          )}
          {enableMessage && (
            <p className='text-caption-02 text-semantic-blue'>
              {enableMessage}
            </p>
          )}
          {maxLength && (
            <span className='text-caption-03 text-neutral-600'>{`${(value as string).length}/${maxLength}`}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
