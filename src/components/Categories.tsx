import { FC, memo } from "react";
import { useDispatch , useSelector} from "react-redux";
import { selectActiveCategory } from "../redux/slices/filter/selectors";
import { setCategory, setCurrentPage } from "../redux/slices/filter/slice";

const categories = ['All','Meat','Vegetarian','Grill','Spicy','Closed'];

const Categories:FC = memo(
  () => {
    const dispatch = useDispatch();
    const activeCategory = useSelector(selectActiveCategory);

    const onCategoryChange = (index:number) => {
      dispatch(setCategory(index));
      dispatch(setCurrentPage(1));
    };
  
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
  }
)

export default Categories;
