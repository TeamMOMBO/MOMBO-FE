'use client';

import useFunnel from '<prefix>/hooks/funnel/useFunnel';
import { useJoinMutation } from '<prefix>/state/mutations/auth';
import { useState } from 'react';
import Funnel from '../funnel/funnel';
import NickName from './onboardingItems/nickName';
import { getCookie } from 'cookies-next';

import UserType from './onboardingItems/userType';
import PregnancyDate from './onboardingItems/pregnancyDate';
import { IJoinReq } from '<prefix>/shared/types/auth';

const initailFunnelData: IJoinReq = {
  nickname: '',
  userType: '',
  pregnancyWeek: 0,
};

const steps = ['닉네임', '회원유형', '주차'];

export default function Onboarding() {
  const { mutate: join } = useJoinMutation();
  const { step, onNextStep, onPrevStep } = useFunnel({ steps });
  const [funnelData, setFunnelData] = useState(initailFunnelData);
  const onNext = (value: Partial<IJoinReq>) => {
    if (funnelData) {
      setFunnelData((prevData) => ({
        ...prevData,
        ...value,
      }));
    }
    onNextStep();
  };

  const onSubmit = (value: Partial<IJoinReq>) => {
    const email = getCookie('email') as string | undefined;
    const onboardData = {
      email,
      ...funnelData,
      ...value, // pregnancyDate
    };
    join(onboardData);
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
        <PregnancyDate
          onPrev={onPrevStep}
          onSubmit={onSubmit}
          initialValue={funnelData.pregnancyWeek}
        />
      </Funnel.Step>
    </Funnel>
  );
}
