import { FAQResponse } from './content';
import { IIngredientInfo } from './ingredient';

export interface SearchParams {
  keyword: string;
}

export interface SearchDetailsParams {
  keyword: string;
  category: 'content' | 'ingredient';
  page?: number;
}

export interface SearchResponse {
  faqs: FAQResponse[];
  ingredients: IIngredientInfo[];
  faqsCount: number;
  ingredientsCount: number;
}

export interface SearchDetailsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    faqs: FAQResponse[];
    ingredients: IIngredientInfo[];
    count: number;
    page: number;
    page_size: number;
    maxPage: number;
  };
}
