export interface FAQResponse {
  id: number;
  question: string;
  real_question: string;
  answer: string;
  views: number;
  image: string;
}
export interface WeekResponse {
  id: number;
  step: string;
  week: number;
  fetus: string;
  maternity: string;
  summary: string;
}
