import clientAuthInstance from './instance/clientAuthInstance';
import {
  ContentAllResponse,
  ContentFAQResponse,
  ContentParams,
  ContentWeekInfoResponse,
} from '../types/content';

export const getContent = async ({
  category,
  page,
}: ContentParams): Promise<
  ContentAllResponse | ContentFAQResponse | ContentWeekInfoResponse
> => {
  const response = await clientAuthInstance.get(
    `/content/?category=${category}&page=${page}`,
  );
  return response.data;
};
