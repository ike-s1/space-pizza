import { ChangeEvent, useCallback, useRef, useState } from "react";
import style from "./Search.module.scss";
import search from "../../assets/img/search.svg";
import close from "../../assets/img/close.svg";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { FC } from "react";
import { setSearchValue } from "../../redux/slices/filter/slice";

const Search:FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>();

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue(" ");
    inputRef.current?.focus();
  };
  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 500),
    []
  );

  const onChangeinput = (e:ChangeEvent<HTMLInputElement> ) => {
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
