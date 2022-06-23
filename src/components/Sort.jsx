import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelected } from "../redux/slices/filterSlice";




export const sortList = [
  { name:'popularity(Desc)',sortProperty: 'rating',order: 'desc'},
  { name:'popularity(ASC)',sortProperty: 'rating',order: 'asc'},
  { name:'price(Desc)', sortProperty: 'price', order: 'desc' },
  { name:'price(ASC)', sortProperty: 'price', order: 'asc' },
  { name:'alphabet(Desc)', sortProperty: 'title', order: 'desc'},
  { name:'alphabet(ASC)', sortProperty: 'title', order: 'asc'}
];


const Sort = () => {
  const [open, setOpen] = useState(false);
  const selected = useSelector(state => state.filter.sort);
  const dispatch = useDispatch();
  const sortRef = useRef();

  const handleClickOutside =  (event) => {
      if(!event.path.includes(sortRef.current))  {
        setOpen(false);
      }
  }
  
  useEffect(() => {
    document.body.addEventListener('click',handleClickOutside);

    return (() => {
      document.body.removeEventListener('click',handleClickOutside)
    })
  },[])

  const onSelected = (value) => {
    dispatch(setSelected(value));
    setOpen(false);
  }

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <svg 
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort by:</b>
        <span  onClick={() => setOpen(!open)} >{selected.name}</span>
      </div>
      {
        open && 
        <div className="sort__popup">
        <ul>
          {
            sortList.map( value => {
              return <li
                key={value.name}
                className={selected.name === value.name ? 'active' : ''}
                onClick={() =>  onSelected(value)}
                >{value.name}</li>
            })
          }
        </ul>
      </div>
      }
    </div>
  );
};

export default Sort;
