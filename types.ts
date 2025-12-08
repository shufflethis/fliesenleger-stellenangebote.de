export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  salaryRange: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Projektbasis';
  postedDate: string;
  description: string;
  isFeatured?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SectionType {
  HOME = 'home',
  JOBS = 'jobs',
  EMPLOYERS = 'employers',
  ADVICE = 'advice',
  IMPRESSUM = 'impressum'
}