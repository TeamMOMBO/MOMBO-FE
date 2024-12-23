import { setCookie } from 'cookies-next';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function useLoginRedirect() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');
    const refreshToken = urlParams.get('refreshToken');
    const email = urlParams.get('email');
    const isMember = urlParams.get('isMember') === 'true';

    if (accessToken) {
      // 기존 회원 처리: 액세스 토큰과 리프레시 토큰 저장
      setCookie('accessToken', accessToken);
      if (refreshToken) {
        setCookie('refreshToken', refreshToken);
      }
      router.push('/main');
    } else if (!isMember && email) {
      // 신규 회원 처리: 이메일 저장 후 온보딩 페이지로 리다이렉트
      setCookie('email', email);

      router.push('/onboarding');
    } else {
      router.push('/login');
    }
  }, [router]);
}
