import useCarousel from '<prefix>/hooks/useCarousel';
import useCarouselSize from '<prefix>/hooks/useCarouselSize';
import { Fragment } from 'react';

type DragCarouselProps<T> = {
  items: T[];
  gap?: number;
  slideWidth?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
};

export default function DragCarousel<T>({
  items,
  gap = 8,
  slideWidth = 328,
  renderItem,
}: DragCarouselProps<T>) {
  const { ref, width } = useCarouselSize();

  const { currentIndex, transX, onTouchStart, onMouseDown } = useCarousel({
    maxIndex: items.length - 1,
    resetFirstIndex: false,
    slideWidth,
  });

  const maxTranslateX =
    slideWidth * items.length -
    width +
    (currentIndex < items.length - 1 ? 0 : gap * (items.length - 1));

  return (
    <div ref={ref} className='relative w-full overflow-hidden'>
      <div
        className={`flex gap-${gap ? gap : 0}`}
        style={{
          transform: `translateX(${-Math.min(currentIndex * (slideWidth + gap), maxTranslateX) + transX}px)`,
          transition: `transform ${transX ? 0 : 300}ms ease-in-out 0s`,
        }}
        onTouchStart={onTouchStart}
        onMouseDown={onMouseDown}
      >
        {items.map((item, index) => (
          <Fragment key={index}> {renderItem(item, index)}</Fragment>
        ))}
      </div>
    </div>
  );
}
