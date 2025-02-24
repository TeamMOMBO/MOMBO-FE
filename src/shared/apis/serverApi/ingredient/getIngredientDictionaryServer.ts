import { cookies } from 'next/headers';
import { baseURL } from '../../instance/publicInstance';
import {
  IngredientDictionaryParams,
  IngredientDictionaryResponse,
} from '<prefix>/shared/types/ingredient';

export const getIngredientDictionaryServer = async ({
  page = 1,
  sort = 'name',
  order = 'asc',
}: IngredientDictionaryParams): Promise<IngredientDictionaryResponse> => {
  try {
    const response = await fetch(
      `${baseURL}/ingredient/dictionary/?page=${page}&sort=${sort}&order=${order}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies().get('accessToken')?.value}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`성분분석 실패: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('성분분석 데이터 불러오기 실패:', error);
    throw error;
  }
};
