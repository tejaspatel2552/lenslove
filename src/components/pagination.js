import React, { useContext } from "react";
import { FilterContext } from "../context/filterSortContext";
import styles from "../css/shop.module.css";

function Pagination() {
  const { products, currentData, setCurrentData, perPageData } =
    useContext(FilterContext);

  const totalUsers = products.length;
  //Count Total Pages With Ceil (give upper value)
  const totalPage = Math.ceil(totalUsers / perPageData);

  //Handle Page Click
  const handlePageClick = (pageNumber) => {
    setCurrentData(pageNumber);
  };
  return (
    <>
      <div className={styles.pagination}>
        <div className={styles.previous_pagination}>
          <button
            onClick={() => handlePageClick(currentData - 1)}
            disabled={currentData === 1}
          >
            <svg
              width="23"
              height="15"
              viewBox="0 0 23 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.20686 12.3512C8.59739 12.7418 8.59739 13.3749 8.20686 13.7655C7.81634 14.156 7.18317 14.156 6.79265 13.7655L0.79265 7.76546C0.402126 7.37493 0.402126 6.74177 0.79265 6.35124L6.79265 0.351243C7.18317 -0.0392818 7.81634 -0.0392818 8.20686 0.351243C8.59739 0.741767 8.59739 1.37493 8.20686 1.76546L3.91395 6.05836L21.489 6.05836C22.0473 6.05836 22.5 6.50608 22.5 7.05836C22.5 7.61065 22.0473 8.05836 21.489 8.05836L3.91398 8.05836L8.20686 12.3512Z"
                fill="#025162"
              />
            </svg>
            Prev
          </button>
        </div>
        {/* Span for Next 3 Buttons */}
        <span className={styles.pagination_btn}>
          {[...Array(totalPage)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                className={
                  pageNumber === currentData
                    ? styles.btn_pagination_activated
                    : styles.btn_pagination_number
                }
                onClick={() => handlePageClick(pageNumber)}
                disabled={currentData === pageNumber}
              >
                {pageNumber}
              </button>
            );
          })}
        </span>
        <div className={styles.next_pagination}>
          <button
            onClick={() => handlePageClick(currentData + 1)}
            disabled={currentData === totalPage}
          >
            Next
            <svg
              width="23"
              height="15"
              viewBox="0 0 23 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7931 1.76546C14.4026 1.37493 14.4026 0.741767 14.7931 0.351243C15.1837 -0.0392815 15.8168 -0.0392815 16.2074 0.351243L22.2073 6.35124C22.5979 6.74177 22.5979 7.37493 22.2073 7.76546L16.2074 13.7655C15.8168 14.156 15.1837 14.156 14.7931 13.7655C14.4026 13.3749 14.4026 12.7418 14.7931 12.3512L19.086 8.05833H1.51103C0.952653 8.05833 0.5 7.61062 0.5 7.05833C0.5 6.50605 0.952653 6.05833 1.51103 6.05833H19.086L14.7931 1.76546Z"
                fill="#025162"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Pagination;
