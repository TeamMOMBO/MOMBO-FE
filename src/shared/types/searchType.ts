export interface SearchParams {
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
  Ingredients: IngredientResponse[];
  hasMore: boolean;
  nextPage: number;
  total: number;
}
