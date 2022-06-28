import { useState } from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { selectCartItemById } from "../../redux/slices/cart/selectors";
import { addProduct } from "../../redux/slices/cart/slice";
import { PizzaBlockTypes } from "../../redux/slices/pizzas/types";



const PizzaBlock:FC<PizzaBlockTypes> = ({id, title, price, imageUrl, sizes, types }) => {
  
  const typeNames = ["thin", "traditional"];
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem?.count
  const [activeType, setActiveType] = useState<number>(0);
  const [activeSize, setActiveSize] = useState<number>(0);


  const onClickAdd = () => {
    const product = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
      count: 0

    }
    dispatch(addProduct(product));
  }

  return (
    <div className="pizza-wrapper">
      <div className="pizza-block">
      <Link to={`/pizza/${id}`}>
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      </Link>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type) => (
            <li 
            key={type}
            className={activeType === type ?'active' : ''}
            onClick={() =>setActiveType(type)}
            >
              {typeNames[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li 
            key={index}
            className={activeSize === index ? 'active' : ''}
            onClick={() =>setActiveSize(index)}
            >
              {size} cm.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">from {price} $</div>
        <div 
        className="button button--outline button--add"
        onClick={onClickAdd}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
         { cartItem && <i>{  addedCount }</i>}
        </div>
      </div>
    </div>
    </div>
  );
};

export default PizzaBlock;
