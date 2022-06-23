import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
        addProduct(state,action) {
           const findProduct = state.items.find( item =>  item.id == action.payload.id);

            if(findProduct) {
                findProduct.count++;      
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                });
            }
            state.totalPrice = state.items.reduce((totalPrice, currentValue) => {
                return totalPrice + (currentValue.price * currentValue.count)
        },0)
        },
        minusItem(state,action) {
            const findProduct = state.items.find( item =>  item.id == action.payload);
        
            if(findProduct) {
                findProduct.count > 1 && findProduct.count--
            }  

            state.totalPrice = state.items.reduce((totalPrice, currentValue) => {
                return totalPrice + (currentValue.price * currentValue.count)
        },0)
        },
        removeProduct(state,action) {
            state.items = state.items.filter(item => item.id !== action.payload);
            state.totalPrice = state.items.reduce((totalPrice, currentValue) => {
                return totalPrice + (currentValue.price * currentValue.count)
        },0)
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
        }
  },
});

export const { addProduct, removeProduct, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
