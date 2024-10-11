import React, { useContext } from 'react';

import { FunnelContext } from './funnel';

interface StepProps {
  name: string;
  children: React.ReactNode;
}

export default function Step({ name, children }: StepProps) {
  const context = useContext(FunnelContext);
  if (context?.step === name) {
    return <>{children}</>;
  }
  return null;
}
