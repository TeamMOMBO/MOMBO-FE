import { createContext, ReactNode, useContext } from 'react';
import Step from './step';

export const FunnelContext = createContext<{ step?: string }>({});

interface FunnelProps {
  step: string;
  children: ReactNode;
}

function Funnel({ step, children }: FunnelProps) {
  return (
    <FunnelContext.Provider value={{ step }}>{children}</FunnelContext.Provider>
  );
}

export default Object.assign(Funnel, { Step });
