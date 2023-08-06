import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';

export const Pagination = ({ onChangePage }) => {
    return (
        <div className={styles.root}>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={(obj) => onChangePage(obj.selected + 1)}
                pageRangeDisplayed={3}
                pageCount={42}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};
