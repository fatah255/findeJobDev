export type TJobItem = {
  badgeLetters: string;
  title: string;
  company: string;
  daysAgo: number;
  id: number;
  date: string;
  relevanceScore: number;
};

export type TJobItemExtended = TJobItem & {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  salary: string;
  location: string;
  coverImgURL: string;
  companyURL: string;
};
