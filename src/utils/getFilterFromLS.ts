import { FilterSliceState } from "../redux/slices/filter/types";

export const getFilterFromLS = () => {
    const data = localStorage.getItem('filter');
    const items = data ? JSON.parse(data) : [];

    return  {
        ...items as FilterSliceState
    }
}