'use client';

import { useRouter } from 'next/navigation';
import { IIngredientInfo } from '<prefix>/shared/types/ingredient';
import Tooltip from '<prefix>/components/common/tooltip';
import TopBar from '<prefix>/components/common/bar/topBar';
import ImagePreviewModal from '<prefix>/components/ingredient/ImagePreviewModal';
import IngredientItem from '<prefix>/components/ingredient/ingredientItem';

export default function MainPage() {
  const router = useRouter();
  const onClose = () => {
    // router.push('/main');
  };
  const ingredientImage = '/images/image-ingredient.png';
  const description = '제품의 성분이 정확하게\n스캔되었는지 꼭 확인해주세요';
  const ingrediientItems: IIngredientInfo[] = [
    {
      id: 1,
      name: '아세트아미노펜(USP)',
      level: 1,
      notes:
        '아세트아미노펜(USP)은 이러이러한 성분이고 이러이러해서 안좋습니다. 이러이러한 이유가 어쩌구 저쩌구 어쩌구 저쩌구',
    },
    {
      id: 2,
      name: '디펜히드라민염산염(USP)',
      level: 2,
      notes:
        '디펜히드라민염산염(USP)은 이러이러한 성분이고 이러이러해서 안좋습니다. 이러이러한 이유가 어쩌구 저쩌구 어쩌구 저쩌구',
    },
  ];
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
        {ingrediientItems.length > 0 && (
          <div className='flex flex-col gap-20'>
            <h2 className='sr-only'>위험 성분 리스트</h2>
            <p className='text-body-01'>
              <span className='text-body-01 text-semantic-red'>
                {ingrediientItems.length}건
              </span>
              의 위험 성분이 검출되었어요
            </p>
            <ul className='flex w-full flex-col gap-12'>
              {ingrediientItems.map((ingrediientItem, index) => (
                <IngredientItem key={index} ingrediientItem={ingrediientItem} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
