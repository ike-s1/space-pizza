import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    setCategory(state, action) {
      state.activeCategory = action.payload;
    },
    setSelected(state,action) {
      state.sort = action.payload
    },
    setCurrentPage(state,action) {
      state.currentPage = action.payload
    },
    setFilters (state,action) {
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
      state.activeCategory = Number(action.payload.activeCategory);
    }

  },
});

export const { setCategory, setSelected, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
