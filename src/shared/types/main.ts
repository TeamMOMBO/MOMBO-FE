import { UserProfile } from './auth';
import { FAQResponse, WeekResponse } from './contents';

export interface IPregnancyInfo {
  pregnancyDate: number;
  description: string;
  type: string | null;
}

export interface IMainInfo {
  description: string;
}

export interface MainResponse {
  user: UserProfile;
  faqs: FAQResponse[];
  weekInformation: WeekResponse;
}
