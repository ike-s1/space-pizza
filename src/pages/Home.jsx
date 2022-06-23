import React, { useEffect, useRef, useState } from "react";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort, { sortList } from "../components/Sort";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage, setFilters } from "../redux/slices/filterSlice";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { fetchPizzas} from "../redux/slices/pizzasSlice";

const Home = ({ searchValue }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSeacth = useRef(false);
  const isMounted = useRef(false);

  const { activeCategory, sort, currentPage } = useSelector(
    (state) => state.filter
  );
  const {status, items:pizzas} = useSelector(
    (state) => state.pizzas
  );

  const getPizzas =  async () => {
    dispatch(fetchPizzas({activeCategory, sort, currentPage, searchValue}));
  };


 //if URL  contains search parameters, then save it to the redux
  useEffect(() => {
    getPizzas()
  }, [sort, activeCategory, searchValue, currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSeacth.current) {
      getPizzas();
    }

    isSeacth.current = false;
  }, [sort, activeCategory, searchValue, currentPage]);
  
//if there was a first render and changes were made
  useEffect(() => {
    if(isMounted.current) {
      const queryString = qs.stringify({
        sort,
        activeCategory,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [sort, activeCategory, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">

        {
          status === 'error' 
          ? (<div className="content__error-info"> Something gone wrong! Cannot took pizzas</div>)
          : (status === 'loading'
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />))
        }
      
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;
