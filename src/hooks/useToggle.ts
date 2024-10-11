import { useCallback, useState } from 'react';

// 모달 표시 및 숨기기, 사이드 메뉴 열기/닫기와 같이 반대 작업에 어떤 작업을 수행하려는 경우에 사용
export function useToggle(
  initialState: boolean = false,
): [boolean, () => void] {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = useCallback((): void => setState((state) => !state), []);
  return [state, toggle];
}

// function SideBarCompoent() {
//
//     const [isSideBarOpen, setIsSideBarOpen] = useToggle();
//     return (
//         <button onClick={sideBarStateChange}>{isSideBarOpen ? 'open' : 'Click to Open'}</button>
//     );
// }
