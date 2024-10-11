import { useState, useCallback, ChangeEvent } from 'react';

type UseInputProps<T> = [
  value: T, // 현재 입력값
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
  reset: () => void, // 입력값 리셋
];

export default function useInput<T>(
  initialValue: T, // 초기값
  validate: (value: T) => boolean = () => true, // 기본값은 항상 true를 반환
): UseInputProps<T> {
  const [value, setValue] = useState<T>(initialValue);

  const changeHandler = (e: ChangeEvent<HTMLInputElement> | any) => {
    const newValue = e.target ? e.target.value : e;

    // validate 함수가 존재하고, 새로운 값이 유효한 경우에만 상태 업데이트
    if (validate && validate(newValue)) {
      const isValid = validate(newValue);
      if (isValid) setValue(newValue);
    }
  };

  const reset = useCallback(() => {
    setValue(initialValue); // 초기값으로 리셋
  }, [initialValue, validate]);

  return [value, changeHandler, reset];
}
