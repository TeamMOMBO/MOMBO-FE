import dynamic from 'next/dynamic';

const Onboarding = dynamic(
  () => import('../../../components/onboarding/onboarding'),
  { ssr: false },
);

export default function OnboardingPage() {
  return <Onboarding />;
}
