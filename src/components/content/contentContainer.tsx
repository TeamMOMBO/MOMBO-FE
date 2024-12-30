'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import InfiniteCarousel from '<prefix>/components/common/carousel/infiniteCarousel';
import MainInfoItem from '<prefix>/components/main/mainInfoItem';
import useTab from '<prefix>/hooks/useTab';
import { CATEGORY_MAP, CONTENT_TYPE } from '<prefix>/shared/constants/content';
import { IMainInfo } from '<prefix>/shared/types/main';
import { useContentInfiniteQuery } from '<prefix>/state/queries/content';
import TabMenu from '../common/tabMenu/tabMenu';
import { FAQResponse, WeekInfoResponse } from '<prefix>/shared/types/content';
import ContentCategoryList from './contentCategoryList';

const infoItems = [{ description: '맘을 위한 정보,\n맘보를 소개합니다!' }];

const extractData = (pages: any[], category: string) => {
  const results = {
    faqs: [] as FAQResponse[],
    weekinformations: [] as WeekInfoResponse[],
  };

  pages.forEach((page) => {
    switch (category) {
      case 'all':
        if (page.faqs) results.faqs.push(...page.faqs);
        if (page.weekinformations)
          results.weekinformations.push(...page.weekinformations);
        break;
      case 'faq':
        if (page.results?.faqs) results.faqs.push(...page.results.faqs);
        break;
      case 'info':
        if ('weekinformations' in page)
          results.weekinformations.push(...page.weekinformations);
        break;
      default:
        break;
    }
  });

  return results;
};

export default function ContentContainer() {
  const router = useRouter();
  const { currentItem, changeItem } = useTab(0, CONTENT_TYPE);
  const selectedCategory = CATEGORY_MAP[currentItem?.tab || '전체'];
  const { data, fetchNextPage, hasNextPage, isLoading } =
    useContentInfiniteQuery({
      category: selectedCategory,
    });

  useEffect(() => {
    // 컴포넌트 마운트 시 router.refresh 호출
    // 서버 데이터 API 갱신
    router.refresh();
  }, [router]);

  if (isLoading) return <div>로딩중</div>;

  const { faqs, weekinformations } = data?.pages
    ? extractData(data.pages, selectedCategory)
    : { faqs: [], weekinformations: [] };

  return (
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
        <TabMenu
          tabs={CONTENT_TYPE}
          currentItem={currentItem}
          onChangeTab={changeItem}
          containerClassName='mb-20'
        />
        {data && (
          <ContentCategoryList
            category={selectedCategory}
            faqItems={faqs}
            weekInfoItems={weekinformations}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
          />
        )}
      </div>
    </div>
  );
}
