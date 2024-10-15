import { useEffect, useRef, useState } from 'react';

export interface UseCarouselSizeProps {
  initWidth?: number; // 초기 너비
  initHeight?: number; // 초기 높이
  aspectRatio?: number; // 가로 세로 비율
}

export default function useCarouselSize(
  { aspectRatio = 1, initWidth = 0, initHeight = 0 }: UseCarouselSizeProps = {
    aspectRatio: 1,
    initWidth: 0,
    initHeight: 0,
  },
) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [{ width, height }, setCarouselSize] = useState({
    width: initWidth,
    height: initHeight,
  });

  // 캐러셀 크기 업데이트
  const updateCarouselSize = () => {
    if (!carouselRef.current) return;
    const { width: carouselWidth } =
      carouselRef.current.getBoundingClientRect();
    setCarouselSize({
      width: carouselWidth,
      height: carouselWidth * aspectRatio,
    });
  };

  useEffect(() => {
    updateCarouselSize(); // 초기 설정
    window.addEventListener('resize', updateCarouselSize); // 리사이즈 이벤트 추가

    return () => {
      window.removeEventListener('resize', updateCarouselSize); // 이벤트 정리
    };
  }, [aspectRatio]); // aspectRatio가 변경될 때마다 리렌더링

  return {
    ref: carouselRef,
    width, // 현재 너비 반환
    height, // 현재 높이 반환
  };
}
