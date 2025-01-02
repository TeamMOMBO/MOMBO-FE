import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '../store/authStore';
import { IJoinReq } from '<prefix>/shared/types/auth';
import {
  createUserInfo,
  editUserProfile,
  postLogoutUser,
  removeWithdrawUser,
} from '<prefix>/shared/apis/auth';
import { deleteCookie } from 'cookies-next';
import { setCookie } from 'cookies-next/client';

export const useJoinMutation = () => {
  const router = useRouter();
  const setUserInfo = useAuthStore((state) => state.setUserInfo);

  return useMutation({
    mutationFn: (data: IJoinReq) => createUserInfo(data),
    onSuccess: (data) => {
      setUserInfo(data.user);
      setCookie('accessToken', data.token.access);
      setCookie('refreshToken', data.token.refresh);
      router.push('/main');
    },
    onError: (error: unknown) => {},
  });
};

export const useLogoutMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: postLogoutUser,
    onSuccess: () => {
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      router.push('/login');
    },
    onError: (error) => {
      console.error('로그인 실패:', error);
    },
  });
};

export const useWithdrawalMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: removeWithdrawUser,
    onSuccess: () => {
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      router.push('/login');
    },
    onError: (error: unknown) => {
      console.error('회원탈퇴 실패:', error);
    },
  });
};

export const useProfileEditMutation = () => {
  const router = useRouter();
  const setUserInfo = useAuthStore((state) => state.setUserInfo);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FormData) => editUserProfile(data),

    onSuccess: () => {
      alert('계정 정보 수정이 완료되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['userProfile'] });
      router.push('/my');
    },
    onError: (error: unknown) => {
      console.error('계정 정보 수정 실패:', error);
    },
  });
};
