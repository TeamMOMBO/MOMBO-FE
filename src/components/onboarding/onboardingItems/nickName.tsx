'use client';

import LargeButton from '<prefix>/components/common/button/largeButton';
import Input from '<prefix>/components/common/input';
import useInput from '<prefix>/hooks/useInput';
import { useKeyDown } from '<prefix>/hooks/useKeyDown';
import { IJoinReq } from '<prefix>/shared/types/auth';
import {
  maxLenRegExp,
  specialCharRegExp,
  whiteSpaceRegExp,
} from '<prefix>/shared/utils/regex';

interface NickNameProps {
  onNext: (value: Partial<IJoinReq>) => void;
  initialValue: string;
}

export default function NickName({ onNext, initialValue }: NickNameProps) {
  const validator = (value: string) => {
    return (
      maxLenRegExp(8).test(value) &&
      !whiteSpaceRegExp.test(value) &&
      !specialCharRegExp.test(value)
    );
  };
  const [nickname, handleInputChange] = useInput<string>(
    initialValue,
    validator,
  );

  useKeyDown(
    'Enter',
    () => {
      if (nickname) {
        onNext({ nickname });
      }
    },
    [nickname],
  );

  return (
    <div className='px-16'>
      <div className='mb-32 space-y-6 pt-145'>
        <h2 className='text-head-01 text-neutral-900'>
          맘보에 오신 것을 환영해요! <br /> 사용하실 닉네임을 알려주세요.
        </h2>
        <p className='text-body-06 text-neutral-600'>
          닉네임은 언제든지 변경할 수 있어요.
        </p>
      </div>
      <Input
        value={nickname}
        maxLength={8}
        placeholder='닉네임을 입력해주세요.'
        onChange={handleInputChange}
      />
      <LargeButton
        variant='fill'
        buttonColor='primary'
        className='absolute bottom-40'
        disabled={!!nickname === false}
        onClick={() => onNext({ nickname })}
      >
        다음
      </LargeButton>
    </div>
  );
}
