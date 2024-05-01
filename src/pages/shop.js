import React, { useState, useContext } from "react";
import { FilterContext } from "../context/filterSortContext";
import styles from "../css/shop.module.css";
import NavBar1 from "../components/navbar1";
import NavBar2 from "../components/navbar2";
import Banner2 from "../components/banner2";
import Footer from "../components/footer";
import ProductCard from "../components/product_card";
import Pagination from "../components/pagination";
import Filter from "../components/filter";
import { Container, Row, Col } from "react-bootstrap";

function Shop() {
  const {
    checkedItems,
    filteredProducts,
    handleRemoveFilter,
    handleSortChange,
    searchFilteredData,
    priceRange,
    handleRemovePriceRange,
    handleRemoveTypeFilter,
    selectedCategory,
  } = useContext(FilterContext);

  // Responsive Filter Section
  const [sideNavWidth, setSideNavWidth] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav(e) {
    setIsNavOpen(!isNavOpen);
    if (sideNavWidth === 0) {
      setSideNavWidth(250);
    } else {
      setSideNavWidth(0);
    }
  }

  return (
    <>
      <NavBar1 />
      <NavBar2 />
      <Banner2 />

      <div className={styles.shop_title}>
        <h1>Shop</h1>
      </div>

      <div className={styles.shop_container}>
        <Container>
          <Row>
            <Col lg={3}>
              <div className={styles.filter_title} onClick={toggleNav}>
                <p>Filters</p>
              </div>
              <div style={{ width: sideNavWidth }} className={styles.sidenav}>
                <Filter />
              </div>
              <div className={styles.simple_filter}>
                <Filter />
              </div>
            </Col>
            <Col lg={9}>
              <div className={styles.main_container}>
                {/* Filter and Sort By */}
                <div className={styles.filter_sortby}>
                  {/* Filter */}
                  <div className={styles.filter_apply_container}>
                    {Object.entries(checkedItems).map(([key, value]) => {
                      if (value) {
                        return (
                          <div className={styles.filter_apply}>
                            <h1 key={key}>{key}</h1>
                            <svg
                              onClick={() => handleRemoveFilter(key)}
                              width="10"
                              height="10"
                              viewBox="0 0 11 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.5 1L10.5 11"
                                stroke="#025162"
                                stroke-width="0.869565"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M10.5 1L0.5 11"
                                stroke="#025162"
                                stroke-width="0.869565"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        );
                      }
                      return <div className={styles.filter_apply_null}></div>;
                    })}
                    {/* {priceRange.map((range) => (
                      <div className={styles.filter_apply}>
                        <h1>{`€${range.min} - €${range.max}`}</h1>
                        <svg
                          onClick={() => handleRemovePriceRange(range)}
                          width="10"
                          height="10"
                          viewBox="0 0 11 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.5 1L10.5 11"
                            stroke="#025162"
                            strokeWidth="0.869565"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.5 1L0.5 11"
                            stroke="#025162"
                            strokeWidth="0.869565"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    ))} */}
                    {selectedCategory && (
                      <div className={styles.filter_apply}>
                        <h1>{selectedCategory}</h1>
                        <svg
                          onClick={handleRemoveTypeFilter}
                          width="10"
                          height="10"
                          viewBox="0 0 11 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.5 1L10.5 11"
                            stroke="#025162"
                            strokeWidth="0.869565"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.5 1L0.5 11"
                            stroke="#025162"
                            strokeWidth="0.869565"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Sort By */}
                  <div className={styles.filter_sort_apply}>
                    <label>
                      <i class="fa fa-sort" aria-hidden="true"></i> Sort By
                    </label>

                    <select onChange={handleSortChange}>
                      <option value="selling_quantity" class="">
                        Best Sellers
                      </option>
                      <option value="low_price" class="">
                        Price: Low to High
                      </option>
                      <option value="high_price" class="">
                        Price: High to Low
                      </option>
                      <option value="created" class="">
                        New
                      </option>
                      <option value="discount" class="">
                        Biggest Savings
                      </option>
                      <option value="viewed" class="">
                        Most Viewed
                      </option>
                      <option value="rating" class="">
                        Rating
                      </option>
                    </select>
                  </div>
                </div>

                {/* Results */}
                <div className={styles.result_container}>
                  <h1>{Object.keys(filteredProducts).length} results</h1>
                </div>

                {/* All Products */}
                <div className={styles.all_product_container}>
                  {searchFilteredData.map((data, index) => (
                    <ProductCard key={index} data={data} />
                  ))}
                </div>

                <hr />
                {/* Pagination */}
                <Pagination />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
