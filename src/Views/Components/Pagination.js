import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { productList } from "../../Utils/CustomList"
import { useDispatch } from "react-redux"
import { setProductViaPagination } from '../../Database/Action/DashboardAction';

const Pagination = ({ itemPerPage }) => {
    const dispatch = useDispatch();
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = productList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(productList.length / itemPerPage);

    const handlePageChange = (event) => {
        const newOffset = (event.selected * itemPerPage) % productList.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    useEffect(() => {
        dispatch(setProductViaPagination(currentItems));
    }, [itemPerPage, itemOffset])
    return (
        <div className='pagination'>
            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName="pagination"
                activeClassName="active"
            />
        </div>
    )
}

export default Pagination