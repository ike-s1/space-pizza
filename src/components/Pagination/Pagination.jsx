import React from 'react';
import style from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';


const Pagination = ({setCurrentPage, currentPage}) => {
 
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
        renderOnZeroPageCount={null}
      />
        </div>
    );
};

export default Pagination;