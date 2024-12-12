import { cookies } from 'next/headers';
import { baseURL } from './../instance/publicInstance';
import { SearchParams, SearchResponse } from '<prefix>/shared/types/searchType';

export const getSearchServer = async (
  keyword: string,
): Promise<SearchResponse> => {
  try {
    const response = await fetch(`${baseURL}/search?keyword=${keyword}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookies().get('accessToken')?.value}`,
      },
    });

    if (!response.ok) {
      throw new Error(`검색 실패: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('검색 요청 실패:', error);
    throw error;
  }
};
