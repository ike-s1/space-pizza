import { getCartFromLS } from './../../../utils/getCartFromLS';
import { RootState } from '../../store';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcTotalPrice } from '../../../utils/CalsTotalPrice';
import { CartItemTypes, CartSliceState } from './types';



const {items, totalPrice} =  getCartFromLS();

const initialState:CartSliceState = {
    totalPrice,
    items,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
        addProduct(state,action:PayloadAction<CartItemTypes> ) {
           const findProduct = state.items.find( item =>  item.id === action.payload.id);

            if(findProduct) {
                findProduct.count++;      
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                });
            }
            state.totalPrice = calcTotalPrice(state.items);
        },
        minusItem(state,action:PayloadAction<string>) {
            const findProduct = state.items.find( item =>  item.id === action.payload);
        
            if(findProduct) {
                findProduct.count--
            }  

            state.totalPrice =  state.totalPrice = calcTotalPrice(state.items);
        },
        removeProduct(state,action:PayloadAction<string>) {
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
