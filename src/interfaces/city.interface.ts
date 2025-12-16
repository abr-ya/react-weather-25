export interface ICityItem {
  id: string;
  name: string;
  country: string;
  state?: string;
  lat: number;
  lon: number;
}

export interface HistoryItem extends ICityItem {
  query: string;
  state?: string;
  searchedAt: number;
}
