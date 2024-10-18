'use client';

import { useRouter } from 'next/navigation';
import TopBar from '<prefix>/components/common/bar/topBar';

export default function MainPage() {
  const router = useRouter();
  const onClose = () => {
    // router.push('/main');
  };
  return (
    <>
      <TopBar title='성분 분석 결과' onClose={onClose} />
    </>
  );
}
