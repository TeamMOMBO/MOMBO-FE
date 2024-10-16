import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { IJoinReq } from '<prefix>/shared/types/auth';
import { createUserInfo } from '<prefix>/shared/apis/auth';

export const useJoinMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: IJoinReq) => createUserInfo(data),
    onSuccess: () => {
      router.push('/main');
    },
    onError: (error: unknown) => {},
  });
};
