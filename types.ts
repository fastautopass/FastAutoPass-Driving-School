
export interface FAQ {
  question: string;
  answer: string;
}

export interface AreaData {
  id: string;
  name: string;
  postcode?: string;
  landmarks: string[];
  roads: string[];
  testCentres: string[];
  colleges: string[];
  nearbyIds?: string[];
  searchKeywords?: string;
  communityContext?: string;
  learnerChallenges?: string;
  introParagraphs?: string[];
  prepParagraphs?: string[];
  localFAQs?: FAQ[];
  drivingFocus?: string[];
}

export interface Testimonial {
  name: string;
  area: string;
  text: string;
  rating: number;
  source?: 'Google' | 'Trustpilot';
  date?: string;
}
