import { CartItemTypes } from "../redux/slices/cart/types"

export const  calcTotalPrice = (items:CartItemTypes[]) => {
   return items.reduce((totalPrice, currentValue) => {
        return totalPrice + (currentValue.price * currentValue.count)
},0)
}