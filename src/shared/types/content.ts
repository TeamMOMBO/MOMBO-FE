export interface FAQResponse {
  id: number;
  question: string;
  real_question: string;
  answer: string;
  views: number;
  image: string;
}
export interface WeekInfoResponse {
  id: number;
  step: string;
  week: number;
  fetus: string;
  maternity: string;
  summary: string;
}

export interface ContentParams {
  category: 'all' | 'faq' | 'info';
  page?: number;
}
export interface ContentDetailParams {
  category: 'faq' | 'info';
  postNo: number;
}

export interface ContentAllResponse {
  faqs: FAQResponse[];
  weekinformations: WeekInfoResponse[];
}

export interface ContentFAQResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    faqs: FAQResponse[];
    count: number;
    page: number;
    page_size: number;
    maxPage: number;
  };
}

export interface ContentWeekInfoResponse {
  weekinformations: WeekInfoResponse[];
}

export interface ContentDetailResponse {
  result: FAQResponse | WeekInfoResponse;
}
