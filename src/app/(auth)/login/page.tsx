import Link from 'next/link';
import LogoIcon from '/public/svgs/icon-logo.svg';

import KakaoButton from '<prefix>/components/common/button/kakaoButton';
export default function LoginPage() {
  return (
    <div className='flex h-full w-full basis-full flex-col px-16 pb-40'>
      <div className='basis-full'>
        <LogoIcon
          width='150'
          height='28'
          className='relative left-1/2 top-253 -translate-x-1/2 fill-primary'
        />
      </div>
      <Link
        href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}`}
      >
        <KakaoButton />
      </Link>
    </div>
  );
}
