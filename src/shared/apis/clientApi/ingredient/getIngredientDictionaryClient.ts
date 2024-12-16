import {
  IngredientDictionaryParams,
  IngredientDictionaryResponse,
} from '<prefix>/shared/types/ingredient';
import clientAuthInstance from '../../instance/clientAuthInstance';

export const getIngredientDictionary = async ({
  page = 1,
  sort = 'name',
}: IngredientDictionaryParams): Promise<IngredientDictionaryResponse> => {
  const response = await clientAuthInstance.get(
    `/ingredient/dictionary/?page=${page}&sort=${sort}`,
  );
  return response.data;
};
