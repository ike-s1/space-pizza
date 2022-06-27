import { SortType } from "../filter/types";

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}


export type FetchPizzasArgs = {
  currentPage: number;
  activeCategory: number;
  sort: SortType;
  searchValue: string;
};



export type PizzaBlockTypes = {
  id: string;
  title: string;
  price: number;
  count: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};


export interface PizzasSliceState {
  items: PizzaBlockTypes[];
  status: Status;
}

