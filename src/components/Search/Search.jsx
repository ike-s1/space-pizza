import React, { useCallback, useContext, useRef, useState } from "react";
import style from "./Search.module.scss";
import search from "../../assets/img/search.svg";
import close from "../../assets/img/close.svg";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

const Search = () => {
  const inputRef = useRef();
  const [value, setValue] = useState();
  const {setSearchValue } = useContext(SearchContext);

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    []
  );

  const onChangeinput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={style.search}>
      <img className={style.iconSearch} src={search} alt="search" />
      {value && (
        <img
          className={style.iconClose}
          src={close}
          alt="close"
          onClick={onClickClear}
        />
      )}
      <input
        ref={inputRef}
        className={style.input}
        type="text"
        placeholder="pizza search"
        value={value}
        onChange={onChangeinput}
      />
    </div>
  );
};

export default Search;
