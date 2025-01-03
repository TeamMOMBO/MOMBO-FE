'use client';

import { IMainInfo, IWeekInfo } from '<prefix>/shared/types/main';
import FaqItem from '<prefix>/components/content/faq/faqItem';
import MainInfoItem from '<prefix>/components/main/mainInfoItem';
import ProgressBar from '<prefix>/components/main/progressBar';
import InfiniteCarousel from '<prefix>/components/common/carousel/infiniteCarousel';
import { useNotificationPermission } from '<prefix>/hooks/notification/useNotificationPermission';
import { useForegroundNotification } from '<prefix>/hooks/notification/useForegroundNotification';
import { useEffect } from 'react';
import { useMainInfoQuery } from '<prefix>/state/queries/main';
import MainSkeleton from '<prefix>/components/common/skeleton/mainSkeleton';
import MainWeekInfoItem from '<prefix>/components/main/mainWeekInfoItem';
import DragCarousel from '<prefix>/components/common/carousel/dragCarousel';

export default function MainPage() {
  const { mainInfo, mainInfoLoading } = useMainInfoQuery();
  const { requestPermission } = useNotificationPermission();
  useForegroundNotification();

  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

  if (mainInfoLoading && !mainInfo) {
    return <MainSkeleton />;
  }

  const nickname = mainInfo?.user?.nickname || '익명';
  const pregnancyWeek = mainInfo?.user?.pregnancyWeek || 0;
  const weekInfo = mainInfo?.weekInformation || {
    week: 0,
    fetus: '',
    maternity: '',
  };
  const faqs = mainInfo?.faqs || [];

  const totalWeek = 40;

  const weekInfoItems: IWeekInfo[] = [
    {
      type: '아기',
      pregnancyDate: weekInfo.week,
      description: weekInfo.fetus,
    },
    {
      type: '엄마',
      pregnancyDate: weekInfo.week,
      description: weekInfo.maternity,
    },
  ];

  const infoItems = [{ description: '맘을 위한 정보,\n맘보를 소개합니다!' }];
  return (
    <>
      {mainInfo && (
        <div className='flex w-full flex-col gap-30'>
          <div className='flex flex-col gap-2 px-16 pt-12'>
            <h2 className='sr-only'>유저 정보</h2>
            <span className='text-head-01 text-neutral-900'>
              {nickname}님, 안녕하세요!
            </span>
            <>
              <span className='text-body-06 text-neutral-600'>
                임신 {pregnancyWeek || '??'}주 차
              </span>
              {(pregnancyWeek ?? 0) !== 0 && (
                <div className='mt-20'>
                  <ProgressBar
                    currentNum={pregnancyWeek ?? 0}
                    totalNum={totalWeek}
                  />
                </div>
              )}
            </>
          </div>
          <div className='pl-16'>
            <h2 className='sr-only'>주차별 정보</h2>
            <DragCarousel
              items={weekInfoItems}
              slideWidth={328}
              gap={8}
              renderItem={(weekInfoItem: IWeekInfo) => (
                <MainWeekInfoItem weekInfoItem={weekInfoItem} />
              )}
            />
          </div>
          <div>
            <h2 className='sr-only'>메인 정보 배너</h2>
            <InfiniteCarousel
              items={infoItems}
              autoTransitionInterval={5000}
              renderItem={(infoItem: IMainInfo) => (
                <MainInfoItem mainInfoItem={infoItem} />
              )}
            />
          </div>
          <div className='px-16'>
            <h2 className='mb-12 text-body-01 text-neutral-900'>
              자주하는 질문을 모아봤어요
            </h2>
            <ul className='flex flex-col gap-16'>
              {faqs.length > 0 ? (
                faqs.map((faqItem, index) => (
                  <FaqItem key={index} faqItem={faqItem} />
                ))
              ) : (
                <li>자주 묻는 질문이 없습니다.</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
