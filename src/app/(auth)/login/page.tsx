import LogoIcon from '/public/svgs/icon-logo.svg';

import KakaoButton from '<prefix>/components/common/button/kakaoButton';
export default function LoginPage() {
  return (
    <>
      <LogoIcon
        width='150'
        height='28'
        className='absolute left-1/2 top-253 -translate-x-1/2 fill-primary'
      />
      <KakaoButton className='absolute bottom-40' />
    </>
  );
}
