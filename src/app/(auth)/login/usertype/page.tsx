'use client';

import Link from 'next/link';
import useTab from '<prefix>/hooks/useTab';
import { USER_TYPE } from '<prefix>/shared/constants/user';
import BackTopBar from '<prefix>/components/common/bar/backTopBar';
import LargeButton from '<prefix>/components/common/button/largeButton';

export default function NickNamePage() {
  const { currentItem, changeItem } = useTab(-1, USER_TYPE);

  return (
    <>
      <BackTopBar />
      <div className='px-16 pt-37'>
        <div className='mb-32 space-y-6'>
          <h2 className='text-head-01 text-neutral-900'>어떤 회원이신가요?</h2>
          <p className='text-body-06 text-neutral-600'>
            회원 타입에 맞는 정보를 추천받을 수 있어요.
          </p>
        </div>
        <div className='flex flex-col gap-12'>
          {USER_TYPE.map(({ tab, description }, index) => (
            <LargeButton
              key={index}
              variant='fill'
              buttonColor={'primary'}
              className={`h-80 px-16 pb-14 pt-16 ${
                currentItem?.tab === tab ? 'bg-primary' : 'bg-neutral-200'
              }`}
              onClick={() => changeItem(index)}
              disabled={false}
            >
              <span
                className={`mb-2 block text-left text-body-01 ${
                  currentItem?.tab === tab ? 'text-white' : 'text-neutral-900'
                } `}
              >
                {tab}
              </span>
              <span
                className={`block text-left text-body-10 ${
                  currentItem?.tab === tab ? 'text-white' : 'text-neutral-600'
                }`}
              >
                {description}
              </span>
            </LargeButton>
          ))}
        </div>
        <Link href='/login/weeks'>
          <LargeButton
            variant='fill'
            buttonColor='primary'
            className='absolute bottom-40'
            disabled={!currentItem}
          >
            다음
          </LargeButton>
        </Link>
      </div>
    </>
  );
}
