import { useState } from 'react';

interface Tab {
  tab: string;
}

interface UseTabsReturn {
  currentItem: Tab | null;
  changeItem: (index: number) => void;
}

// tab 버튼 사용시 선택한 버튼 표시 시 사용
export default function useTab(
  initialTab: number = 0,
  allTabs: Tab[] = [] // 전체 탭 목록 배열
): UseTabsReturn {
    // allTabs가 유효한 배열이 아닌 경우 기본값을 반환하여 안전하게 처리
  if (!Array.isArray(allTabs) || allTabs.length === 0) {
    return {
      currentItem: null,
      changeItem: () => {},
    };
  }

   // 유효한 초기 인덱스가 아니면 0으로 설정
  const [currentIndex, setCurrentIndex] = useState<number>(
    initialTab >= 0 && initialTab < allTabs.length ? initialTab : 0
  );

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
}
// 사용 예시
// const tabs = [
//     { tab: 'Tab 1' },
//     { tab: 'Tab 2' },
//     { tab: 'Tab 3' },
//   ];
  
//   const TabComponent = () => {
//     const { currentItem, changeItem } = useTab(0, tabs);
  
//     return (
//       <div>
//         <div>
//           {tabs.map((tab, index) => (
//             <button key={index} onClick={() => changeItem(index)}>
//               {tab.tab}
//             </button>
//           ))}
//         </div>
//         <div>
//           <h2>Selected Tab</h2>
//           <p>{currentItem ? currentItem.tab : 'No tab selected'}</p>
//         </div>
//       </div>
//     );
//   };
  
//   export default TabComponent;