'use client';

import { useRouter } from 'next/navigation';
import TopBar from '<prefix>/components/common/bar/topBar';
import Tooltip from '<prefix>/components/common/tooltip';
import ImagePreviewModal from '<prefix>/components/ingredient/ImagePreviewModal';

export default function MainPage() {
  const router = useRouter();
  const onClose = () => {
    // router.push('/main');
  };
  const ingredientImage = '/images/image-ingredient.png';

  const description = '제품의 성분이 정확하게\n스캔되었는지 꼭 확인해주세요';
  return (
    <>
      <TopBar title='성분 분석 결과' onClose={onClose} />
      <div className='flex flex-col gap-30 px-16'>
        {/* <div className='flex flex-col items-center gap-8 pt-25'>
          <p className='text-center text-body-10 text-semantic-red'>
            꼭 의사나 약사에게 진단 받으세요
            <br />
            어쩌구 주의문구 어쩌구 주의문구 어쩌구 주의문구
          </p>
        </div> */}
        <div className='flex flex-col gap-8 rounded-12 border border-solid border-neutral-300 bg-white p-16'>
          <div className='flex items-center gap-4'>
            <h2 className='text-body-04 text-neutral-900'>스캔 성분 확인</h2>
            <Tooltip description={description} />
          </div>
          <ImagePreviewModal imgSrc={ingredientImage} />
        </div>
      </div>
    </>
  );
}
