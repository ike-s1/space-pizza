import  { useEffect, useRef} from "react";
import  Sort from "../components/Sort";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { useAppDispatch } from "../redux/store";
import { selectFilter} from "../redux/slices/filter/selectors";
import { setCurrentPage} from "../redux/slices/filter/slice";
import { selectPizzaData } from "../redux/slices/pizzas/selectors";
import { fetchPizzas } from "../redux/slices/pizzas/asyncActions";
import { Categories, Pagination, PizzaBlock, Skeleton } from "../components";


const Home:FC = () => {
  const dispatch = useAppDispatch();



  const { activeCategory, sort, currentPage, searchValue} = useSelector(selectFilter);
  const {status, items:pizzas} = useSelector(selectPizzaData);

  const getPizzas =  async () => {
    dispatch(
      fetchPizzas({
      activeCategory,
      sort,
      currentPage,
      searchValue
    }));
  };


  useEffect(() => {
      getPizzas();
  }, [sort, activeCategory, searchValue, currentPage]);



  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort  selected={sort}/>
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">

        {
          status === 'error' 
          ? (<div className="content__error-info"> Something gone wrong! Cannot took pizzas</div>)
          : (status === 'loading'
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((pizza:any) => <PizzaBlock key={pizza.id} {...pizza} />))
        }
      
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;
