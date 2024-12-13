import {
  SearchDetailsParams,
  SearchDetailsResponse,
  SearchResponse,
} from '../../types/searchType';
import clientAuthInstance from '../instance/clientAuthInstance';

export const getSearch = async (keyword: string): Promise<SearchResponse> => {
  const response = await clientAuthInstance.get(`/search?keyword=${keyword}`);
  return response.data;
};

export const getSearchDetails = async ({
  keyword,
  category,
  page,
}: SearchDetailsParams): Promise<SearchDetailsResponse> => {
  const response = await clientAuthInstance.get(
    `/search/details?keyword=${keyword}&category=${category}&page=${page}`,
  );
  return response.data;
};
