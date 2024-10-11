import { twMerge } from 'tailwind-merge';
import KakaoIcon from '/public/svgs/icon-kakao.svg';

interface ButtonProps {
  className: string;
}

export default function KakaoButton({ className }: ButtonProps) {
  const buttonClasses = twMerge(
    'h-56 w-358 rounded-12 text-body-05 bg-primary-kakao',
    className,
  );
  return (
    <button type='button' className={buttonClasses}>
      <div className='flex items-center justify-center gap-8'>
        <KakaoIcon />
        <span>카카오톡으로 시작하기</span>
      </div>
    </button>
  );
}
