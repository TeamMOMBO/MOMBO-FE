import { cookies } from 'next/headers';
import { baseURL } from '../../instance/publicInstance';
import {
  ContentParams,
  ContentAllResponse,
  ContentFAQResponse,
  ContentWeekInfoResponse,
} from '<prefix>/shared/types/content';

export const getContentServer = async ({
  category,
  page,
}: ContentParams): Promise<
  ContentAllResponse | ContentFAQResponse | ContentWeekInfoResponse
> => {
  try {
    const response = await fetch(
      `${baseURL}/content/?category=${category}&page=${page}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies().get('accessToken')?.value}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`콘텐츠 불러오기 실패: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('콘텐츠 불러오기 실패:', error);
    throw error;
  }
};
