'use client';

import MainTopBar from '<prefix>/components/common/bar/mainTopBar';
import ChipButton from '<prefix>/components/common/button/chipButton';
import InfiniteCarousel from '<prefix>/components/common/carousel/infiniteCarousel';
import FaqInfoItem from '<prefix>/components/faq/faqInfoItem';
import MainInfoItem from '<prefix>/components/main/mainInfoItem';
import useTab from '<prefix>/hooks/useTab';
import { FAQResponse } from '<prefix>/shared/types/contents';
import { IMainInfo } from '<prefix>/shared/types/main';

interface ContentPageProps {}

export default function ContentPage({}: ContentPageProps) {
  const CONTENT_TYPE = [
    { tab: '전체' },
    { tab: 'Q&A' },
    { tab: '주차별 정보' },
  ];
  const { currentItem, changeItem } = useTab(0, CONTENT_TYPE);

  const infoItems = [
    { description: '맘을 위한 정보,\n맘보를 소개합니다!' },
    { description: '맘보대상' },
    { description: '맘보1등' },
  ];

  const faqInfoItems: FAQResponse[] = [
    {
      id: 1,
      image: '',
      real_question: '',
      question: '출산 후 호박 달인 물은 언제 먹어야 하나요?',
      views: 1365,
      answer: '',
    },
    {
      id: 2,
      image: '',
      real_question: '',
      question: '출산 후 호박 달인 물은 언제 먹어야 하나요?',
      views: 1365,
      answer: '',
    },
    {
      id: 3,
      image: '',
      real_question: '',
      question: '출산 후 호박 달인 물은 언제 먹어야 하나요?',
      views: 1365,
      answer: '',
    },
  ];

  return (
    <>
      <MainTopBar>콘텐츠</MainTopBar>
      <div className='mt-5 flex flex-col gap-20 px-16'>
        <div>
          <h2 className='sr-only'>정보</h2>
          <InfiniteCarousel
            items={infoItems}
            autoTransitionInterval={5000}
            renderItem={(infoItem: IMainInfo) => (
              <MainInfoItem mainInfoItem={infoItem} />
            )}
          />
        </div>
        <div>
          <h2 className='sr-only'>콘텐츠 목록</h2>
          <div className='mb-20 flex gap-8'>
            {CONTENT_TYPE.map(({ tab }, index) => (
              <ChipButton
                isSelected={currentItem?.tab === tab}
                onClick={() => changeItem(index)}
              >
                {tab}
              </ChipButton>
            ))}
          </div>
          {currentItem?.tab === '전체' && (
            <ul className='flex flex-col gap-16'>
              {faqInfoItems.map((faqInfoItem, index) => (
                <FaqInfoItem key={index} faqInfoItem={faqInfoItem} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
