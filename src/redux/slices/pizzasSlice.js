import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPizzas  = createAsyncThunk(
    'pizzas/fetchPizzas',
    async ({currentPage,activeCategory,sort,searchValue}) => {
        const {data} = await axios
        .get(
          `https://62b187b7c7e53744afbb1e34.mockapi.io/items?page=${currentPage}&limit=4&${
            activeCategory ? `category=${activeCategory}` : ""
          }&sortBy=${sort.sortProperty}&order=${sort.order}&search=${searchValue}`
        );
        return data;
    }

)


const initialState = {
  items: [],
  status: 'loading',
};

 const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItems(state, action) {
        state.items = action.payload; 
    },
  },
  extraReducers: {
    [fetchPizzas.fulfilled]: (state, action) => {
       state.status = 'success';
       state.items = action.payload
    },
    [fetchPizzas.pending]: (state, ) => {
        state.items = [];
        state.status = 'loading';
    },
     [fetchPizzas.rejected]: (state) => {
        state.status = 'error';
        state.items = [];
    }
  },
});

export const {setItems, setStatus} = pizzasSlice.actions;

export default pizzasSlice.reducer;

