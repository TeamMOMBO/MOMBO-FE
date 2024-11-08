'use client';
import { useRouter } from 'next/navigation';
import Tooltip from '<prefix>/components/common/tooltip';
import TopBar from '<prefix>/components/common/bar/topBar';
import ImagePreviewModal from '<prefix>/components/ingredient/ImagePreviewModal';
import ResultBar from '/public/svgs/icon-result-bar.svg';
import ArrowIcon from '/public/svgs/arrow/icon-gauge.svg';
import { getArrowStyles } from '<prefix>/shared/utils/getArrowType';
import { useIngredientAnalysisStore } from '<prefix>/state/store/IngredientAnalysisStore';
import { RiskLevel } from '<prefix>/shared/types/ingredient';
import { convertRiskLevel } from '<prefix>/shared/utils/convertRiskLevel';
import IngredientItem from '<prefix>/components/ingredient/ingredientItem';

export default function IngredientResultPage() {
  const router = useRouter();
  const analysisResult = useIngredientAnalysisStore(
    (state) => state.analysisResult,
  );

  const { riskLevel, analysisImage, riskIngredientCount, ingredientAnalysis } =
    analysisResult || {};

  const { positionClass, colorClass } = getArrowStyles(riskLevel as RiskLevel);
  const totalRisk = riskIngredientCount?.total || 0;

  const onClose = () => {
    // router.push('/main');
  };

  const description = '제품의 성분이 정확하게\n스캔되었는지 꼭 확인해주세요';

  return (
    <>
      <TopBar title='성분 분석 결과' />
      <div className='flex flex-col gap-30 px-16'>
        <div className='flex flex-col items-center gap-8 pt-25'>
          <div className='relative mt-44 h-fit w-fit'>
            <ResultBar className='absolute -top-37 left-1/2 shrink-0 -translate-x-1/2' />
            <div className='relative z-20 flex h-109 w-210 flex-col items-center justify-center rounded-t-full border-gray-500 bg-white shadow-[0_-2px_12px_#7B7B7B1A]'>
              <p className='mb-2 mt-22 text-head-01 text-neutral-900'>
                {convertRiskLevel(riskLevel as RiskLevel)}
              </p>
              {totalRisk > 0 ? (
                <span className='text-body-10 text-neutral-600'>
                  임산부 위험 성분 {totalRisk}건
                </span>
              ) : (
                <span className='text-body-10 text-neutral-600'>
                  임산부 위험 성분 미검출
                </span>
              )}
            </div>
            <div
              className={`absolute flex items-center justify-center ${positionClass}`}
            >
              <ArrowIcon width={20} height={20} className={colorClass} />
            </div>
          </div>
          <p className='mb-10 text-center text-body-10 text-semantic-red'>
            본 서비스는 임부금기 의약품(2024.06.25. 고시 기준) 성분에 대한
            정보를 제공합니다. 이는 의학적 진단의 대체가 아니며, 복용 전 반드시
            전문가와 상담하시기 바랍니다.
          </p>

          <div className='flex w-full flex-col gap-8 rounded-12 border border-solid border-neutral-300 bg-white p-16'>
            <div className='flex items-center gap-4'>
              <h2 className='text-body-04 text-neutral-900'>스캔 성분 확인</h2>
              <Tooltip description={description} />
            </div>
            <ImagePreviewModal imgSrc={analysisImage!} />
          </div>
        </div>
        {ingredientAnalysis && ingredientAnalysis.length > 0 && (
          <div className='flex flex-col gap-20'>
            <h2 className='sr-only'>위험 성분 리스트</h2>
            <p className='text-body-01'>
              <span className='text-body-01 text-semantic-red'>
                {totalRisk}건
              </span>
              의 위험 성분이 검출되었어요
            </p>
            <ul className='flex w-full flex-col gap-12'>
              {ingredientAnalysis?.map((ingrediientItem, index) => (
                <IngredientItem key={index} ingredientItem={ingrediientItem} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
