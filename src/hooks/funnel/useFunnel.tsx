import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState, useEffect } from 'react';

interface UseFunnelProps {
  steps: string[];
}

export default function useFunnel({ steps }: UseFunnelProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [stepLevel, setStepLevel] = useState(0);

  useEffect(() => {
    // 브라우저 히스토리 쌓기(SearchParams)
    router.push(`${pathname}?step=${steps[stepLevel]}`);
  }, [stepLevel, steps, router, pathname]);

  useEffect(() => {
    // 브라우저의 앞으로가기, 뒤로가기를 눌렀을 때 searchParams 의 변경에 따라 step도 이동
    const step = searchParams.get('step');
    if (step) {
      const index = steps.findIndex((s) => s === step);
      if (index! == -1) {
        setStepLevel(index);
      }
    }
  }, [searchParams, steps]);

  const onNextStep = useCallback(() => {
    setStepLevel((prev) => {
      if (prev >= steps.length - 1) {
        return prev;
      }
      return prev + 1;
    });
  }, [steps]);

  const onPrevStep = useCallback(() => {
    setStepLevel((prev) => {
      if (prev <= 0) {
        return 0;
      }
      return prev - 1;
    });
  }, []);

  return {
    step: steps[stepLevel],
    onNextStep,
    onPrevStep,
  };
}
