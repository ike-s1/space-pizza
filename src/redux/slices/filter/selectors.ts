import { RootState } from "../../store";

export const selectActiveCategory = (state:RootState) => state.filter.activeCategory;
export const  selectFilter = (state:RootState) => state.filter;