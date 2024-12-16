import { useState } from 'react';

interface Tab {
  tab: string;
}

export default function useTab<T extends Tab>(
  initialTab: number = -1,
  allTabs: T[] = [],
) {
  // allTabs가 유효한 배열이 아닌 경우 기본값을 반환
  if (!Array.isArray(allTabs) || allTabs.length === 0) {
    return {
      currentItem: null,
      changeItem: () => {},
    };
  }

  // 유효한 초기 인덱스가 아니면 -1로 설정
  const [currentIndex, setCurrentIndex] = useState<number>(
    initialTab >= 0 && initialTab < allTabs.length ? initialTab : -1,
  );

  return {
    currentItem: currentIndex >= 0 ? allTabs[currentIndex] : null,
    changeItem: setCurrentIndex,
  };
}
