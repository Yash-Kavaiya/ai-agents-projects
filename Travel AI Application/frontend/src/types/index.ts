// Travel preference types
export type TravelType = 'Leisure' | 'Business' | 'Adventure' | 'Cultural';
export type Season = 'Summer' | 'Winter' | 'Spring' | 'Fall';
export type BudgetRange = '$500-$1000' | '$1000-$2000' | '$2000-$5000' | 'Luxury';
export type Interest = 'History' | 'Food' | 'Nature' | 'Art' | 'Shopping' | 'Nightlife';

// Input form data
export interface TripFormData {
  travel_type: TravelType;
  interests: Interest[];
  season: Season;
  duration: number;
  budget: BudgetRange;
}

// API response types
export interface ApiResponse<T> {
  status: 'success' | 'error';
  data?: T;
  message?: string;
}

export interface TripPlanOutput {
  city_selection: string;
  city_research: string;
  itinerary: string;
  budget: string;
}

// Loading states
export enum LoadingState {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}