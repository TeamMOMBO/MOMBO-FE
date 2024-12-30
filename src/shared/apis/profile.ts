import { cookies } from 'next/headers';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getUserProfile = async () => {
  const response = await fetch(`${baseURL}/user/profile/`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cookies().get('accessToken')?.value}`,
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('Unauthorized: 토큰이 유효하지 않습니다');
    }
    throw new Error('유저 프로필 페칭 실패');
  }

  return response.json();
};
