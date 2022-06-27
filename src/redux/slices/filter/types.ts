export type SortType = {
  name: string;
  sortProperty: 'rating' | 'title' | 'price';
  order: 'desc' | 'asc';
}

export interface  FilterSliceState {
  searchValue: string;
  activeCategory: number;
  currentPage: number;
  sort: SortType;
}