import { useState, useCallback, ChangeEvent } from 'react';

type UseInputProps<T> = [
  value: T, // 현재 입력값
  changeHandler: (e: ChangeEvent<HTMLInputElement> | T) => void, // 두 가지 타입 처리
  reset: (newValue?: T) => void, // 입력값 리셋
];

export default function useInput<T>(
  initialValue: T, // 초기값
  validate: (value: T) => boolean = () => true, // 기본값은 항상 true를 반환
): UseInputProps<T> {
  const [value, setValue] = useState<T>(initialValue);

  const changeHandler = (e: ChangeEvent<HTMLInputElement> | T) => {
    // e가 ChangeEvent 타입인지 확인
    const newValue =
      (e as ChangeEvent<HTMLInputElement>).target?.value !== undefined
        ? (e as ChangeEvent<HTMLInputElement>).target.value
        : e;

    // validate 함수 검사 후 상태 업데이트
    if (validate(newValue as T)) {
      setValue(newValue as T);
    }
  };

  const reset = useCallback(
    (newValue?: T) => {
      setValue(newValue !== undefined ? newValue : initialValue);
    },
    [initialValue],
  );

  return [value, changeHandler, reset];
}
