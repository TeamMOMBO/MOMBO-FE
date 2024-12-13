'use client';
import { Virtuoso } from 'react-virtuoso';

interface VirtualListProps<T> {
  data: T[];
  renderItem: (index: number, item: T) => React.ReactNode;
  onEndReached?: () => void;
}

export default function VirtualList<T>({
  data,
  renderItem,
  onEndReached,
}: VirtualListProps<T>) {
  return (
    <Virtuoso
      style={{
        height: 'calc(100dvh - 144px)', //100dvh - 헤더높이
        scrollBehavior: 'smooth',
        msOverflowStyle: 'none', // IE, Edge 스코롤 숨기기
        scrollbarWidth: 'none', // Firefox 스크롤 숨기기
      }}
      data={data} // 데이터
      endReached={onEndReached} // 끝 감지 후 다음 데이터 페칭 여부
      itemContent={renderItem} // 데이터 렌더링
    />
  );
}
