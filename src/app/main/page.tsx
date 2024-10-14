'use client';

import { IMainInfo, IWeekInfo } from '<prefix>/shared/types/main';
import MainInfoItem from '<prefix>/components/main/mainInfoItem';
import WeekInfoItem from '<prefix>/components/main/weekInfoItem';
import ProgressBar from '<prefix>/components/main/progressBar';
import MainTopBar from '<prefix>/components/common/bar/mainTopBar';
import DragCarousel from '<prefix>/components/common/carousel/dragCarousel';
import InfiniteCarousel from '<prefix>/components/common/carousel/infiniteCarousel';

export default function MainPage() {
  // 더미데이터
  const nickName = '맘보';
  const week = 13;
  const totalWeek = 40;
  const weekInfoItems = [
    {
      imageSrc: '/',
      weeks: 13,
      description:
        '투명하게 보이던 피부에 점차 살이 오르고, 심장박동이 힘차 얼굴에 붉은 기운이 감돌아요.',
    },
    {
      imageSrc: '/',
      weeks: 13,
      description:
        '호르몬 분비량이 안정적으로 변화하며 불안하던 감정이 차츰 가라앉게 됩니다.',
    },
    {
      imageSrc: '/',
      weeks: 13,
      description:
        '호르몬 분비량이 안정적으로 변화하며 불안하던 감정이 차츰 가라앉게 됩니다.',
    },
  ];
  const infoItems = [
    { description: '맘을 위한 정보,\n맘보를 소개합니다!' },
    { description: '맘보대상' },
    { description: '맘보1등' },
  ];

  return (
    <>
      <MainTopBar />
      <div className='flex h-full w-full flex-col gap-30'>
        <div className='flex flex-col gap-2 px-16 pb-20 pt-12'>
          <span className='text-head-01 text-neutral-900'>
            {nickName}님, 안녕하세요!
          </span>
          <span className='mb-20 text-body-06 text-neutral-600'>
            임신 {week}주 차
          </span>
          <ProgressBar currentNum={week} totalNum={totalWeek} />
        </div>
        <div className='pl-16'>
          <DragCarousel
            items={weekInfoItems}
            slideWidth={328}
            gap={8}
            renderItem={(weeksItem: IWeekInfo) => (
              <WeekInfoItem weekInfoItem={weeksItem} />
            )}
          />
        </div>
        <InfiniteCarousel
          items={infoItems}
          autoTransitionInterval={5000}
            renderItem={(infoItem: IMainInfo) => (
              <MainInfoItem mainInfoItem={infoItem} />
          )}
        />
      </div>
    </>
  );
}
