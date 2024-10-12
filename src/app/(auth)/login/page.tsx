import Link from 'next/link';
import LogoIcon from '/public/svgs/icon-logo.svg';

import KakaoButton from '<prefix>/components/common/button/kakaoButton';
export default function LoginPage() {
  return (
    <div className='px-16'>
      <LogoIcon
        width='150'
        height='28'
        className='absolute left-1/2 top-253 -translate-x-1/2 fill-primary'
      />
      <Link
        href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=http://localhost:8000/user/login/kakao/callback/`}
      >
        <KakaoButton className='absolute bottom-40' />
      </Link>
    </div>
  );
}
