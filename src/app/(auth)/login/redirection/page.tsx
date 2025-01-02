'use client';

import MainSkeleton from '<prefix>/components/common/skeleton/mainSkeleton';
import useLoginRedirect from '<prefix>/hooks/useLoginRedirect';

export default function KakaoRedirectionPage() {
  useLoginRedirect();

  return <MainSkeleton />;
}
