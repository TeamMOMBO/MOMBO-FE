'use client';

import useLoginRedirect from '<prefix>/hooks/useLoginRedirect';

export default function KakaoRedirectionPage() {
  useLoginRedirect();

  return <p className='text-3xl font-bold'>로그인 중...</p>;
}
