'use client';
import { Virtuoso, VirtuosoHandle } from 'react-virtuoso';
import { useState, useRef } from 'react';
import TopButton from '../button/topButton';

interface VirtualListProps<T> {
  data: T[];
  renderItem: (index: number, item: T) => React.ReactNode;
  onEndReached?: () => void;
  isNavBar?: boolean;
}

export default function VirtualList<T>({
  data,
  renderItem,
  onEndReached,
  isNavBar,
}: VirtualListProps<T>) {
  const [showTopButton, setShowTopButton] = useState(false);
  const virtuosoRef = useRef<VirtuosoHandle>(null);

  const handleScroll = (element: HTMLElement | Window | null) => {
    if (element && 'scrollTop' in element) {
      setShowTopButton((element as HTMLElement).scrollTop > 1000);
    }
  };

  const scrollToTop = () => {
    virtuosoRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='relative h-[calc(100dvh-144px)]'>
      <Virtuoso
        ref={virtuosoRef}
        style={{
          height: '100%',
          scrollBehavior: 'smooth',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          overflowX: 'hidden',
          overflowY: 'auto',
        }}
        className={`[&::-webkit-scrollbar]:hidden`}
        data={data}
        endReached={onEndReached}
        itemContent={renderItem}
        scrollerRef={handleScroll}
      />
      <TopButton
        onClick={scrollToTop}
        show={showTopButton}
        isNavBar={isNavBar}
      />
    </div>
  );
}
