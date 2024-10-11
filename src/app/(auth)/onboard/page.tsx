'use client';

import { useState } from 'react';
import { FunnelData } from '<prefix>/shared/types/auth';
import useFunnel from '<prefix>/hooks/funnel/useFunnel';
import Weeks from '<prefix>/components/onboard/weeks';
import Funnel from '<prefix>/components/funnel/funnel';
import NickName from '<prefix>/components/onboard/nickName';
import UserType from '<prefix>/components/onboard/userType';

const initailFunnelData: FunnelData = {
  nickname: '',
  userType: '',
  weeks: 0,
};

const steps = ['닉네임', '회원유형', '주차'];

export default function OnboardingPage() {
  const { step, onNextStep, onPrevStep } = useFunnel({ steps });
  const [funnelData, setFunnelData] = useState<FunnelData>(initailFunnelData);

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
        <NickName onNext={onNext} />
      </Funnel.Step>
      <Funnel.Step name='회원유형'>
        <UserType onNext={onNext} onPrev={onPrevStep} />
      </Funnel.Step>
      <Funnel.Step name='주차'>
        <Weeks onPrev={onPrevStep} onSubmit={onSubmit} />
      </Funnel.Step>
    </Funnel>
  );
}
