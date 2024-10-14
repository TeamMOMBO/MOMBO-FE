'use client';

import MainTopBar from '<prefix>/components/common/bar/mainTopBar';

export default function MainPage() {
  // 더미데이터
  const nickName = '맘보';
  const weeks = 13;
  const weekInfoItems = [
    {
      imageSrc: '/',
      weeks: 13,
      description:
        '투명하게 보이던 피부에 점차 살이 오르고, 심장박동이 힘차 얼굴에 붉은 기운이 감돌아요.',
    },
    {
      imageSrc: '/',
      weeks: 13,
      description:
        '호르몬 분비량이 안정적으로 변화하며 불안하던 감정이 차츰 가라앉게 됩니다.',
    },
    {
      imageSrc: '/',
      weeks: 13,
      description:
        '호르몬 분비량이 안정적으로 변화하며 불안하던 감정이 차츰 가라앉게 됩니다.',
    },
  ];
  const infoItems = [
    { description: '맘을 위한 정보,\n맘보를 소개합니다!' },
    { description: '맘보대상' },
    { description: '맘보1등' },
  ];

  return (
    <>
      <MainTopBar />
    </>
  );
}
