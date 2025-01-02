import { Fragment, useEffect } from 'react';
import useCarousel from '<prefix>/hooks/useCarousel';
import useCarouselSize from '<prefix>/hooks/useCarouselSize';

type InfiniteCarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  autoTransitionInterval?: number;
};

export default function InfiniteCarousel<T>({
  items,
  renderItem,
  autoTransitionInterval = 1000,
}: InfiniteCarouselProps<T>) {
  const slideList = [items.at(-1), ...items, items.at(0)].filter(
    (item): item is T => item !== undefined,
  );

  const { ref, width } = useCarouselSize();
  const slideWidth = width;
  const {
    currentIndex,
    transX,
    animate,
    updateIndex,
    onTouchStart,
    onMouseDown,
    onTransitionEnd,
  } = useCarousel({
    maxIndex: slideList.length - 1,
    resetFirstIndex: true,
    slideWidth,
  });

  const displayedIndex =
    currentIndex === 0
      ? items.length - 1
      : currentIndex === slideList.length - 1
        ? 0
        : currentIndex - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex((prevIndex: number) => (prevIndex + 1) % slideList.length);
    }, autoTransitionInterval);
    return () => clearInterval(interval);
  }, [autoTransitionInterval, slideList.length, updateIndex]);

  return (
    <div ref={ref} className='relative w-full overflow-hidden'>
      <div
        className='flex w-full'
        style={{
          transform: `translateX(${-currentIndex * slideWidth + transX}px)`,
          transition: `transform ${animate ? 300 : 0}ms ease-in-out 0s`,
        }}
        onTouchStart={onTouchStart}
        onMouseDown={onMouseDown}
        onTransitionEnd={onTransitionEnd}
      >
        {slideList.map((item, index) => (
          <Fragment key={index}>{renderItem(item, index)}</Fragment>
        ))}
      </div>
      <div className='absolute bottom-8 right-16 z-10 flex h-22 w-39 items-center justify-center gap-1 rounded-full bg-black bg-opacity-30 px-8 py-2'>
        <span className='basis-full text-center text-caption-03 text-neutral-200'>
          {displayedIndex + 1}
        </span>
        <span className='basis-full text-center text-caption-03 text-neutral-200'>
          /
        </span>
        <span className='basis-full text-center text-caption-03 text-neutral-200'>
          {items.length}
        </span>
      </div>
    </div>
  );
}
