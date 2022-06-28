import style from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { FC } from 'react';
import { AnyAction } from '@reduxjs/toolkit';



type PaginationProps = {
  setCurrentPage: (page: number) => AnyAction;
  currentPage:number;
}
const Pagination:FC<PaginationProps>= ({setCurrentPage, currentPage}) => {
    const dispatch = useDispatch();

    return (
        <div >
        <ReactPaginate
        className={style.pagination}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e)=> dispatch(setCurrentPage(e.selected + 1))}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        previousLabel="<"
      />
        </div>
    );
};

export default Pagination;