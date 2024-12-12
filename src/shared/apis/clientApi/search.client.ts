import { SearchResponse } from '../../types/searchType';
import clientAuthInstance from '../instance/clientAuthInstance';

export const getSearch = async (keyword: string): Promise<SearchResponse> => {
  const response = await clientAuthInstance.get(`/search?keyword=${keyword}`);
  return response.data;
};
