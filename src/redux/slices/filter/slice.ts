import { getFilterFromLS } from './../../../utils/getFilterFromLS';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, SortType } from "./types";




const initialState: FilterSliceState = {
  ...getFilterFromLS(),
  searchValue: ''
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action:PayloadAction<number>) {
      state.activeCategory = action.payload;
      localStorage.setItem('filter', JSON.stringify(state));
    },
    setSearchValue(state,action:PayloadAction<string>) {
      state.searchValue = action.payload;
      localStorage.setItem('filter', JSON.stringify(state));
    },
    setSelected(state,action:PayloadAction<SortType>) {
      state.sort = action.payload;
      localStorage.setItem('filter', JSON.stringify(state));
    },
    setCurrentPage(state,action:PayloadAction<number>) {
      state.currentPage = action.payload;
      localStorage.setItem('filter', JSON.stringify(state));
    },
    setFilters (state,action:PayloadAction<FilterSliceState>) {
      state.currentPage = action.payload.currentPage;
      state.sort = action.payload.sort;
      state.activeCategory = action.payload.activeCategory;
      localStorage.setItem('filter', JSON.stringify(state));
    }

  },
});


export const { setCategory, setSelected, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
