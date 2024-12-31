'use client';

import useInput from '<prefix>/hooks/useInput';
import { useToggle } from '<prefix>/hooks/useToggle';
import Input from '<prefix>/components/common/input';
import { IJoinReq } from '<prefix>/shared/types/auth';
import BackTopBar from '<prefix>/components/common/bar/backTopBar';
import LargeButton from '<prefix>/components/common/button/largeButton';
import CheckButton from '<prefix>/components/common/button/checkButton';
import { useKeyDown } from '<prefix>/hooks/useKeyDown';
import { pregnancyWeekValidator } from '<prefix>/shared/utils/validator';

interface PregnancyDateProps {
  onSubmit: (data: Partial<IJoinReq>) => void;
  onPrev: () => void;
  initialValue: number;
}

export default function PregnancyDate({
  onPrev,
  onSubmit,
  initialValue,
}: PregnancyDateProps) {
  const [isSelected, toggleButton] = useToggle();

  const [pregnancyDate, handleDateInputChange, resetDate] = useInput<string>(
    '',
    pregnancyWeekValidator,
  );

  useKeyDown(
    'Enter',
    () => {
      if (isSelected || pregnancyDate) {
        onSubmit({
          pregnancyDate: isSelected ? 0 : parseInt(pregnancyDate as string),
        });
      }
    },
    [pregnancyDate, isSelected],
  );

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleDateInputChange(e);
    if (e.target.value !== '' && isSelected) {
      toggleButton();
    }
  };

  const handleCheckBtnClick = () => {
    if (!isSelected) {
      resetDate('');
    }
    toggleButton();
  };

  return (
    <>
      <BackTopBar onPrev={onPrev} />
      <div className='flex basis-full flex-col px-16 pb-40 pt-37'>
        <div className='basis-full'>
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
              type='text'
              placeholder='ex) 12'
              onChange={handleDateChange}
              className='w-120 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
              value={pregnancyDate}
            />
            <span className='text-body-05 text-neutral-900'>주 차</span>
          </div>
          <div className='flex items-center gap-8'>
            <CheckButton
              isSelected={isSelected}
              onClick={handleCheckBtnClick}
            />
            <span className='text-body-10 text-neutral-600'>
              몇 주차인지 잘 모르거나 이미 출산했어요
            </span>
          </div>
        </div>
        <LargeButton
          variant='fill'
          buttonColor='primary'
          onClick={() =>
            onSubmit({
              pregnancyDate: isSelected ? 0 : parseInt(pregnancyDate as string),
            })
          }
          disabled={!!pregnancyDate === false && isSelected === false}
        >
          맘보 시작하기
        </LargeButton>
      </div>
    </>
  );
}
