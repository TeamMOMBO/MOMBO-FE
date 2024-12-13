import { UserProfile } from './auth';
import { FAQResponse, WeekResponse } from './contents';

export interface IWeekInfo {
  pregnancyDate: number;
  description: string;
  type: '엄마' | '아기';
}

export interface IMainInfo {
  description: string;
}

export interface MainResponse {
  user: UserProfile;
  faqs: FAQResponse[];
  weekInformation: WeekResponse;
}
