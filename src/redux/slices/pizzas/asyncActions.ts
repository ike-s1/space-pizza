import  axios  from 'axios';


import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchPizzasArgs, PizzaBlockTypes } from "./types";

export const fetchPizzas = createAsyncThunk(
    "pizzas/fetchPizzas",
    async ({
      currentPage,
      activeCategory,
      sort,
      searchValue,
    }: FetchPizzasArgs) => {
      const { data } = await axios.get<PizzaBlockTypes[]>(
        `https://62b187b7c7e53744afbb1e34.mockapi.io/items?page=${currentPage}&limit=4&${
          activeCategory ? `category=${activeCategory}` : ""
        }&sortBy=${sort.sortProperty}&order=${sort.order}&search=${searchValue}`
      );
      return data as PizzaBlockTypes[];
    }
  );
  