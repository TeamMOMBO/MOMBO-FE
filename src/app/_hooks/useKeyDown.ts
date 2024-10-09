import { useEffect } from 'react';


//키보드 이벤트 이용시 사용 (폼 제출, esc키로 모달 닫기 등)
export function useKeyDown(
  key: KeyboardEvent['key'], // 입력할 키보드 이벤트
  fn: () => void, //  입력한 키보드 이벤트가 실행할 함수,
  deps: any[] = [], //deps: 의존성 인자 기본값 []
) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === key) {
        fn();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, deps);
}

//사용 예시
//컴포넌트 내부에서 훅 호출해서 사용 
//  useKeyDown('Enter', handleSubmit, [handleSubmit]);
