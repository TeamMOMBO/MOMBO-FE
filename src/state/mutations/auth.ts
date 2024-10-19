import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '../store/authStore';
import { IJoinReq } from '<prefix>/shared/types/auth';
import { createUserInfo } from '<prefix>/shared/apis/auth';

export const useJoinMutation = () => {
  const router = useRouter();
  const setUserInfo = useAuthStore((state) => state.setUserInfo);

  return useMutation({
    mutationFn: (data: IJoinReq) => createUserInfo(data),
    onSuccess: (data) => {
      setUserInfo(data.user);
      router.push('/main');
    },
    onError: (error: unknown) => {},
  });
};
