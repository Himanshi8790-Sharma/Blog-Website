import React from 'react';

function Pagination({ onPageChange, currentPage, totalBlogs, pageSize }) {
  const totalPages = Math.ceil(totalBlogs / pageSize);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
      <li
        className={pageNumber === currentPage ? 'activePagination' : ''}
        key={pageNumber}
      >
        <a href="#" onClick={(e) => { e.preventDefault(); onPageChange(pageNumber); }}>
          {pageNumber}
        </a>
      </li>
    ));
  };

  return (
    <ul className='pagination flex-wrap gap-4 mx-[150px]'>
      <li>
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
      </li>
      <div className='flex gap-1'>
        {renderPaginationLinks()}
      </div>
      <li>
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
