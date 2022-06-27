import { CartItemTypes } from "../redux/slices/cart/types";
import { calcTotalPrice } from "./CalsTotalPrice";

export const getCartFromLS = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];

    return  {
        items: items as CartItemTypes[],
        totalPrice: calcTotalPrice(items)
    }
}