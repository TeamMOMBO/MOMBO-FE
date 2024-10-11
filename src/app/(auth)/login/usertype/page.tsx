import BackTopBar from '<prefix>/components/common/bar/backTopBar';
import LargeButton from '<prefix>/components/common/button/largeButton';
import { USER_TYPE } from '<prefix>/shared/constants/user';
import Link from 'next/link';

export default function NickNamePage() {

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
              disabled={false}
            >
              <span
              >
                {tab}
              </span>
              <span
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
          >
            다음
          </LargeButton>
        </Link>
      </div>
    </>
  );
}
