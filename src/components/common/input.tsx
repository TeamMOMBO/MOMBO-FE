import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  enableMessage?: string;
}

const Input = ({ errorMessage, enableMessage, ...props }: InputProps) => {
  return (
    <div className='flex flex-col gap-8'>
      <input
        className='h-56 w-358 rounded-xl bg-neutral-200 p-16 text-body-05 text-neutral-900 placeholder-neutral-400 outline-none'
        {...props}
      />
      {errorMessage && (
        <p className='text-caption-02 text-semantic-red'>{errorMessage}</p>
      )}
      {enableMessage && (
        <p className='text-caption-02 text-semantic-blue'>{enableMessage}</p>
      )}
    </div>
  );
};

export default Input;
