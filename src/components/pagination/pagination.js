import React from 'react';
import '../../Theme/bootstrap.css';

const pagination = (props) => {
    
    // Key variables
    const productsPerPage = props.productsPerPage;
    const currentPage = props.currentPage;
    const productsLength = props.productsLength;
    
    // Extracting page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(productsLength / productsPerPage); i++) {
        pageNumbers.push(i);
    };

    // Mapping page numbers
    const displayedPageNumbers = <ul className="pagination">
        {pageNumbers.map(n =>
            <li
                style={{ cursor: "pointer" }}
                key={n}
                id={n}
                className={n == currentPage ? "page-item hoverable active" : "page-item hoverable"}
                onClick={() => props.currentPageHandler(n)}>
                <span className="page-link">{n}</span>
            </li>
        )}
    </ul>

    return (
        <div>
            {displayedPageNumbers}
        </div>
    );
};

export default pagination;