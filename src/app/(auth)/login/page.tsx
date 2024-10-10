import LargeButton from '<prefix>/components/common/button/largeButton';
import LogoIcon from '/public/svgs/icon-logo.svg';
export default function LoginPage() {
  return (
    <>
      <LogoIcon width='150' height='28' className='absolute top-253 left-1/2 -translate-x-1/2 fill-primary' />
      <LargeButton
        variant='fill'
        buttonColor='primary'
        className='absolute bottom-40'
      >
        카카오톡으로 시작하기
      </LargeButton>
    </>
  );
}
