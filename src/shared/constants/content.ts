export const CONTENT_TYPE = [
  { tab: '전체', value: 'all' as const },
  { tab: 'Q&A', value: 'faq' as const },
  { tab: '주차별 정보', value: 'info' as const },
];

export const CATEGORY_MAP: Record<string, 'all' | 'faq' | 'info'> = {
  전체: 'all',
  'Q&A': 'faq',
  '주차별 정보': 'info',
};
