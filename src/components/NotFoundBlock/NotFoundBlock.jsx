import React from "react";
import style from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={style.root}>
      <h1 >
        <span>😕</span>
        <br />
        Nothing found
      </h1>
     <p className={style.desc}>  such a page does not exist on our site </p>
    </div>
  );
};

export default NotFoundBlock;
