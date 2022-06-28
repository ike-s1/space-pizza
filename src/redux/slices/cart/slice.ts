import { getCartFromLS } from './../../../utils/getCartFromLS';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcTotalPrice } from '../../../utils/CalsTotalPrice';
import { CartItemTypes, CartSliceState } from './types';
import { toast } from 'react-toastify';



const {items, totalPrice} =  getCartFromLS();

const initialState:CartSliceState = {
    totalPrice,
    items: items
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
        addProduct(state,action:PayloadAction<CartItemTypes> ) {
           const findProduct = state.items.find( (item) =>  item.id === action.payload.id);
            if(findProduct) {
                findProduct.count++;
                toast.info(
                    `increasted ${findProduct.title} pizza cart quantity`,
                    {
                      position: "bottom-left",
                    }
                  );
    
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                });
                toast.success(
                    ` added ${action.payload.title} pizza to cart `,
                    {
                      position: "bottom-left",
                    }
                  );
     
                  
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
            state.totalPrice = calcTotalPrice(state.items);
        },
        minusItem(state,action:PayloadAction<string>) {
            const findProduct = state.items.find( (item) =>  item.id === action.payload);
        
            if(findProduct) {
                findProduct.count--;
                toast.info(
                    `decreasted ${findProduct.title} pizza cart quantity`,
                    {
                      position: "bottom-left",
                    }
                  );
                
            }  

            state.totalPrice = calcTotalPrice(state.items);
        },
        removeProduct(state,action:PayloadAction<CartItemTypes>) {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.totalPrice = calcTotalPrice(state.items);
            toast.error(
                `${action.payload.title} pizza  removed from cart`,
                {
                  position: "bottom-left",
                }
              );
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
            toast.info(
                `Cart cleared`,
                {
                  position: "bottom-left",
                }
              );
        }
  },
});

export const { addProduct, removeProduct, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
