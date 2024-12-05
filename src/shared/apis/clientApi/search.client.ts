import { SearchParams, SearchResponse } from '../../types/searchType';
import clientAuthInstance from '../instance/clientAuthInstance';

export const getSearch = async (
  params: SearchParams,
): Promise<SearchResponse> => {
  const response = await clientAuthInstance.get('/search', { params });
  return response.data;
};
