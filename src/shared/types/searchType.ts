import { IIngredientInfo } from './ingredient';

export interface SearchParams {
  keyword: string;
}

export interface SearchDetailParams {
  keyword: string;
  category: 'all' | 'content' | 'ingredient';
  page: number;
}

export interface FAQResponse {
  id: number;
  question: string;
  real_question: string;
  answer: string;
  views: number;
}

export interface IngredientResponse {
  id: number;
  ingredientKr: string;
  ingredientDescription: string;
}

export interface SearchResponse {
  faqs: FAQResponse[];
  ingredients: IIngredientInfo[];
  faqsCount: number;
  ingredientsCount: number;
}
