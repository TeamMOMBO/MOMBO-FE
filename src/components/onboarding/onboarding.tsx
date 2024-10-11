'use client';

import useFunnel from '<prefix>/hooks/funnel/useFunnel';
import { FunnelData } from '<prefix>/shared/types/auth';
import { useState } from 'react';
import Funnel from '../funnel/funnel';
import NickName from './onboardingItems/nickName';
import UserType from './onboardingItems/userType';
import Weeks from './onboardingItems/weeks';

const initailFunnelData: FunnelData = {
  nickname: '',
  userType: '',
  weeks: 0,
};

const steps = ['닉네임', '회원유형', '주차'];

export default function Onboarding() {
  const { step, onNextStep, onPrevStep } = useFunnel({ steps });
  const [funnelData, setFunnelData] = useState(initailFunnelData);

  const onNext = (value: Partial<FunnelData>) => {
    if (funnelData) {
      setFunnelData((prevData) => ({
        ...prevData,
        ...value,
      }));
    }
    onNextStep();
  };

  const onSubmit = (value: Partial<FunnelData>) => {
    const onboardData = {
      ...funnelData,
      ...value,
    };
    console.log(onboardData);
  };

  return (
    <Funnel step={step}>
      <Funnel.Step name='닉네임'>
        <NickName onNext={onNext} initialValue={funnelData.nickname} />
      </Funnel.Step>
      <Funnel.Step name='회원유형'>
        <UserType
          onNext={onNext}
          onPrev={onPrevStep}
          initialValue={funnelData.userType}
        />
      </Funnel.Step>
      <Funnel.Step name='주차'>
        <Weeks
          onPrev={onPrevStep}
          onSubmit={onSubmit}
          initialValue={funnelData.weeks}
        />
      </Funnel.Step>
    </Funnel>
  );
}
