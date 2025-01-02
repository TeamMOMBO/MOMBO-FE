import { useCallback, useEffect, useState } from 'react';

// 터치 스크린 여부 확인
const isTouchScreen =
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: none) and (pointer: coarse)').matches;

interface UseCarouselProps {
  maxIndex: number; // 전체 슬라이드 수
  resetFirstIndex: boolean;
  slideWidth: number; // 슬라이드 너비
  autoTransitionInterval?: number; // 자동 전환 간격 (밀리초)

  stopPropagation?: boolean; // 이벤트 전파 중지 여부
}

export default function useCarousel({
  maxIndex,
  resetFirstIndex,
  slideWidth,
  stopPropagation = false,
}: UseCarouselProps) {
  const [transX, setTransX] = useState(0); // 현재 슬라이드 이동 거리
  const [animate, setAnimate] = useState(false); // 애니메이션 상태
  const [currentIndex, setCurrentIndex] = useState<number>(1); // 현재 슬라이드 인덱스

  // 드래그 종료 핸들러
  const handleDragEnd = (deltaX: number) => {
    setCurrentIndex((prev) => {
      let newIndex = prev;

      if (deltaX < -100) {
        // 오른쪽으로 슬라이드
        if (prev < maxIndex) {
          newIndex = prev + 1;
        } else if (resetFirstIndex) {
          newIndex = 1; // 마지막 인덱스에서 첫 번째 인덱스로 돌아감 (무한 반복)
        }
      } else if (deltaX > 100) {
        // 왼쪽으로 슬라이드
        if (prev > 1) {
          newIndex = prev - 1;
        } else if (resetFirstIndex && prev === 1) {
          newIndex = maxIndex; // 첫 번째 인덱스에서 마지막 인덱스로 이동 (무한 반복)
        }
      }

      return newIndex;
    });
    setTransX(0); // 드래그 종료 후 transX 초기화
  };

  // 터치 시작 핸들러
  const handleTouchStart = useCallback(
    (touchEvent: React.TouchEvent<HTMLDivElement>) => {
      if (stopPropagation) touchEvent.stopPropagation(); // 이벤트 전파 중지

      const initialX = touchEvent.touches[0].pageX; // 초기 터치 위치

      // 터치 이동 핸들러
      const touchMoveHandler = (moveEvent: TouchEvent) => {
        if (moveEvent.cancelable) moveEvent.preventDefault();
        const deltaX = moveEvent.touches[0].pageX - initialX;
        setTransX(Math.min(Math.max(deltaX, -slideWidth), slideWidth));
      };

      // 터치 종료 핸들러
      const touchEndHandler = (endEvent: TouchEvent) => {
        const deltaX = endEvent.changedTouches[0].pageX - initialX;
        handleDragEnd(deltaX);
        document.removeEventListener('touchmove', touchMoveHandler);
        document.removeEventListener('touchend', touchEndHandler);
      };

      document.addEventListener('touchmove', touchMoveHandler, {
        passive: false,
      });
      document.addEventListener('touchend', touchEndHandler, { once: true });
    },
    [maxIndex, stopPropagation, slideWidth],
  );

  // 마우스 다운 핸들러
  const handleMouseDown = useCallback(
    (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
      if (stopPropagation) clickEvent.stopPropagation(); // 이벤트 전파 중지

      const initialX = clickEvent.pageX; // 초기 클릭 위치

      // 마우스 이동 핸들러
      const mouseMoveHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.pageX - initialX;
        setTransX(Math.min(Math.max(deltaX, -slideWidth), slideWidth));
      };

      // 마우스 업 핸들러
      const mouseUpHandler = (endEvent: MouseEvent) => {
        const deltaX = endEvent.pageX - initialX;

        handleDragEnd(deltaX);
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler, { once: true });
    },
    [maxIndex, stopPropagation, slideWidth],
  );

  const handleTransitionEnd = () => {
    setAnimate(false);

    if (currentIndex === 0) {
      setCurrentIndex(maxIndex - 1);
    } else if (currentIndex === maxIndex) {
      setCurrentIndex(1);
    }
  };

  //현재 표시되는 인덱스 값
  const displayedIndex =
    currentIndex === 0
      ? maxIndex
      : currentIndex === maxIndex
        ? 0
        : currentIndex - 1;

  // 인덱스 업데이트
  const updateIndex = (updater: (prevIndex: number) => number) => {
    setCurrentIndex((prev) => updater(prev));
    setAnimate(true);
  };

  // 터치 스크린 여부에 따른 이벤트 핸들러 설정
  const eventHandlers = isTouchScreen
    ? { onTouchStart: handleTouchStart }
    : { onMouseDown: handleMouseDown };

  return {
    currentIndex,
    setCurrentIndex,
    transX,
    animate,
    updateIndex,
    displayedIndex,
    ...eventHandlers,
    onTransitionEnd: handleTransitionEnd,
  };
}
