'use client';

import useInput from '<prefix>/hooks/useInput';
import { useToggle } from '<prefix>/hooks/useToggle';
import Input from '<prefix>/components/common/input';
import { FunnelData } from '<prefix>/shared/types/auth';
import BackTopBar from '<prefix>/components/common/bar/backTopBar';
import LargeButton from '<prefix>/components/common/button/largeButton';
import CheckButton from '<prefix>/components/common/button/checkButton';
import { useKeyDown } from '<prefix>/hooks/useKeyDown';

interface WeeksProps {
  onSubmit: (data: Partial<FunnelData>) => void;
  onPrev: () => void;
  initialValue: number;
}

export default function Weeks({ onPrev, onSubmit, initialValue }: WeeksProps) {
  const [isSelected, toggleButton] = useToggle();

  const [weeks, handleInputChange] = useInput<number | undefined>(
    initialValue || undefined,
  );

  useKeyDown(
    'Enter',
    () => {
      if (isSelected || weeks) {
        onSubmit({ weeks: isSelected ? 0 : weeks });
      }
    },
    [weeks, isSelected],
  );

  return (
    <>
      <BackTopBar onPrev={onPrev} />
      <div className='px-16 pt-37'>
        <div className='mb-32 space-y-6'>
          <h2 className='text-head-01 text-neutral-900'>
            임신한 지 얼마나 되셨나요?
          </h2>
          <p className='text-body-06 text-neutral-600'>
            임신 주 차별 유용한 정보를 알려드려요.
          </p>
        </div>
        <div className='mb-16 flex items-center gap-12'>
          <Input
            type='number'
            placeholder='ex) 12'
            onChange={handleInputChange}
            className='w-120 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
            value={weeks}
          />
          <span className='text-body-05 text-neutral-900'>주 차</span>
        </div>
        <div className='flex items-center gap-8'>
          <CheckButton isSelected={isSelected} onClick={toggleButton} />
          <span className='text-body-10 text-neutral-600'>
            몇 주차인지 잘 모르거나 이미 출산했어요
          </span>
        </div>
        <LargeButton
          variant='fill'
          buttonColor='primary'
          className='absolute bottom-40'
          onClick={() => onSubmit({ weeks: isSelected ? 0 : weeks })}
          disabled={!!weeks === false && isSelected === false}
        >
          맘보 시작하기
        </LargeButton>
      </div>
    </>
  );
}
