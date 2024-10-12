import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function useLoginRedirect() {
  const router = useRouter();
  useEffect(() => {
    /* 기존 회원 */
    //?accessToken={refresh.access_token}&refreshToken={refresh}
    /* 신규 회원 */
    //?email={email}
    /* 회원 여부 검증 */
    //?isMember={boolean}

    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');
    const refreshToken = urlParams.get('refreshToken');
    const email = urlParams.get('email');
    const isMember = urlParams.get('isMember') === 'true';

    if (accessToken) {
      // 기존 회원 처리: 액세스 토큰과 리프레시 토큰 저장
      localStorage.setItem('accessToken', accessToken);
      if (refreshToken) {
        localStorage.setItem('refreshToken', refreshToken);
      }
      router.push('/main');
    } else if (!isMember && email) {
      // 신규 회원 처리: 이메일 저장 후 온보딩 페이지로 리다이렉트
      localStorage.setItem('email', email);
      router.push('/onboarding');
    } else {
      router.push('/login');
    }
  }, [router]);
}
