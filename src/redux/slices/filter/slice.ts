import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, SortType } from "./types";




const initialState: FilterSliceState = {
  searchValue: '',
  activeCategory: 0,
  currentPage: 1,
  sort: {
    name: "popularity(Desc)",
    sortProperty: "rating",
    order: "desc",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action:PayloadAction<number>) {
      state.activeCategory = action.payload;
    },
    setSearchValue(state,action:PayloadAction<string>) {
      state.searchValue = action.payload
    },
    setSelected(state,action:PayloadAction<SortType>) {
      state.sort = action.payload
    },
    setCurrentPage(state,action:PayloadAction<number>) {
      state.currentPage = action.payload
    },
    setFilters (state,action:PayloadAction<FilterSliceState>) {
      state.currentPage = action.payload.currentPage;
      state.sort = action.payload.sort;
      state.activeCategory = action.payload.activeCategory;
    }

  },
});


export const { setCategory, setSelected, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
