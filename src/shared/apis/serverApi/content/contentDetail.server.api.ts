import { cookies } from 'next/headers';
import { baseURL } from '../../instance/publicInstance';
import {
  ContentDetailParams,
  ContentDetailResponse,
} from '<prefix>/shared/types/content';

export const getFAQServer = async ({
  category,
  postNo,
}: ContentDetailParams): Promise<ContentDetailResponse> => {
  try {
    const response = await fetch(
      `${baseURL}/content/details/?category=${category}&postNo=${postNo}`,
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
