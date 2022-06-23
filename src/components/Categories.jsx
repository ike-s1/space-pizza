import React from "react";
import { useDispatch , useSelector} from "react-redux";
import { setCategory } from "../redux/slices/filterSlice";
import { setCurrentPage } from '../redux/slices/filterSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(state => state.filter.activeCategory)
  const categories = ['All','Meat','Vegetarian','Grill','Spicy','Closed',]

  const onCategoryChange = (index) => {
    dispatch(setCategory(index));
    dispatch(setCurrentPage(1));
  }
  return (
    <div className="categories">
      <ul>
        {
          categories.map((value, index) => {
            return <li key={index} className={activeCategory === index? "active" : ''} 
            onClick={() => onCategoryChange(index)}>{value}</li>
          })
        }
      </ul>
    </div>
  );
};

export default Categories;
