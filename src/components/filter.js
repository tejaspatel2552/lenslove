import React, { useContext } from "react";
import { FilterContext } from "../context/filterSortContext";
import Slider from "@mui/material/Slider";
import styles from "../css/filter.module.css";
import filter_img_1 from "../images/filter_img_1.png";
import filter_img_2 from "../images/filter_img_2.png";
import filter_img_3 from "../images/filter_img_3.png";
import filter_img_4 from "../images/filter_img_4.png";
import filter_img_5 from "../images/filter_img_5.png";
import filter_img_6 from "../images/filter_img_6.png";

function Filter() {
  const {
    products,
    searchQuery,
    handleInputChange,
    checkedItems,
    handleCheckBox,
    handleTypeFilter,
    selectedCategory,
    handlePriceRangeCheckBox,
    priceRangesArray,
    priceRange,
  } = useContext(FilterContext);
  return (
    <>
      <div className={styles.filter_container}>
        {/* Image Section */}
        <div className={styles.filter_image}>
          {/* Image Filter Section 1 2 */}
          <div className={styles.grid_container}>
            <div
              className={styles.filter_section_1}
              onClick={() => handleTypeFilter("Contact Lenses")}
            >
              <div
                className={`${styles.filter_img_1} ${
                  selectedCategory === "Contact Lenses"
                    ? styles.filter_selected
                    : ""
                }`}
              >
                <img src={filter_img_1} alt="filter_img_1" />
              </div>
              <div className={styles.filter_text_1}>
                <p>Contact Lenses</p>
              </div>
            </div>
            <div
              className={styles.filter_section_2}
              onClick={() => handleTypeFilter("Colored Lenses")}
            >
              <div
                className={`${styles.filter_img_2} ${
                  selectedCategory === "Colored Lenses"
                    ? styles.filter_selected
                    : ""
                }`}
              >
                <img src={filter_img_2} alt="filter_img_2" />
              </div>
              <div className={styles.filter_text_2}>
                <p>Colored Lenses</p>
              </div>
            </div>
          </div>

          {/* Image Filter Section 3 4 */}
          <div className={styles.grid_container}>
            <div
              className={styles.filter_section_3}
              onClick={() => handleTypeFilter("Blue Light")}
            >
              <div
                className={`${styles.filter_img_3} ${
                  selectedCategory === "Blue Light"
                    ? styles.filter_selected
                    : ""
                }`}
              >
                <img src={filter_img_3} alt="filter_img_3" />
              </div>
              <div className={styles.filter_text_3}>
                <p>Blue Light</p>
              </div>
            </div>
            <div
              className={styles.filter_section_4}
              onClick={() => handleTypeFilter("Sports")}
            >
              <div
                className={`${styles.filter_img_4} ${
                  selectedCategory === "Sports" ? styles.filter_selected : ""
                }`}
              >
                <img src={filter_img_4} alt="filter_img_4" />
              </div>
              <div className={styles.filter_text_4}>
                <p>Sports</p>
              </div>
            </div>
          </div>

          {/* Image Filter Section 5 6 */}
          <div className={styles.grid_container}>
            <div
              className={styles.filter_section_5}
              onClick={() => handleTypeFilter("Sunwear")}
            >
              <div
                className={`${styles.filter_img_5} ${
                  selectedCategory === "Sunwear" ? styles.filter_selected : ""
                }`}
              >
                <img src={filter_img_5} alt="filter_img_5" />
              </div>
              <div className={styles.filter_text_5}>
                <p>Sunwear</p>
              </div>
            </div>
            <div
              className={styles.filter_section_6}
              onClick={() => handleTypeFilter("Optical")}
            >
              <div
                className={`${styles.filter_img_6} ${
                  selectedCategory === "Optical" ? styles.filter_selected : ""
                }`}
              >
                <img src={filter_img_6} alt="filter_img_6" />
              </div>
              <div className={styles.filter_text_6}>
                <p>Optical</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gender Section */}
        <div className={styles.gender_section}>
          <div className={styles.gender_title}>
            <p>Gender</p>
          </div>

          {Array.from(new Set(products.map((item) => item.gender))).map(
            (gender) => (
              <div key={gender} className={styles.checkbox_container}>
                <input
                  type="checkbox"
                  id={`checkbox-${gender}`}
                  name={gender}
                  checked={checkedItems[gender] || false}
                  onChange={handleCheckBox}
                />
                <label htmlFor={`checkbox-${gender}`}>{gender}</label>
              </div>
            )
          )}
        </div>

        {/* Frame Color Section */}
        <div className={styles.frame_color_section}>
          <div className={styles.frame_color_title}>
            <p>Frame Color</p>
          </div>

          {Array.from(new Set(products.map((item) => item.frameColor)))
            .sort()
            .map((frameColor) => (
              <div key={frameColor} className={styles.checkbox_container}>
                <input
                  type="checkbox"
                  id={`checkbox-${frameColor}`}
                  name={frameColor}
                  checked={checkedItems[frameColor] || false}
                  onChange={handleCheckBox}
                />
                <label htmlFor={`checkbox-${frameColor}`}>{frameColor}</label>
              </div>
            ))}
        </div>

        {/* Frame Size Section */}
        <div className={styles.frame_size_section}>
          <div className={styles.frame_size_title}>
            <p>Frame Size</p>
          </div>

          {Array.from(new Set(products.map((item) => item.frameSize)))
            .sort((a, b) => b.localeCompare(a))
            .map((frameSize) => (
              <div key={frameSize} className={styles.checkbox_container}>
                <input
                  type="checkbox"
                  id={`checkbox-${frameSize}`}
                  name={frameSize}
                  checked={checkedItems[frameSize] || false}
                  onChange={handleCheckBox}
                />
                <label htmlFor={`checkbox-${frameSize}`}>{frameSize}</label>
              </div>
            ))}
        </div>

        {/* Price Section */}
        <div className={styles.price_section}>
          <div className={styles.price_title}>
            <p>Price</p>
          </div>

          {priceRangesArray.map((range, index) => (
            <div key={index} className={styles.checkbox_container}>
              <input
                type="checkbox"
                id={`checkbox-price-${index}`}
                name={`€${range.min} - €${range.max}`}
                checked={range.checked}
                onChange={() => handlePriceRangeCheckBox(index)}
              />
              <label htmlFor={`checkbox-price-${index}`}>
                {`€${range.min} - €${range.max}`}
              </label>
            </div>
          ))}

          <hr />
          
          {/* Price Slider */}
          {/* <div className={styles.price_slider}>
            <Slider
              value={range}
              onChange={handleChanges}
              valueLabelDisplay="auto"
              style={{ color: "#025162" }}
              min={30}
              max={500}
            />
            <div className={styles.price_slider_2}>
              <span>{range[0]}</span> - <span>{range[1]}</span>
              <span className={styles.price_arrow}>
                <svg
                  width="5"
                  height="9"
                  viewBox="0 0 5 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.249117 0.177828C0.0120131 0.414932 0.0120131 0.799354 0.249117 1.03646L3.46266 4.25L0.249117 7.46354C0.0120131 7.70065 0.0120131 8.08507 0.249117 8.32217C0.486221 8.55928 0.870643 8.55928 1.10775 8.32217L4.7506 4.67932C4.98771 4.44221 4.98771 4.05779 4.7506 3.82069L1.10775 0.177828C0.870643 -0.059276 0.486221 -0.059276 0.249117 0.177828Z"
                    fill="#025162"
                  />
                </svg>
              </span>
            </div>
          </div> */}
        </div>
        
        {/* Brand Section */}
        <div className={styles.brand_section}>
          <div className={styles.brand_title}>
            <p>Brand</p>
          </div>

          <div className={styles.brand_filter_search}>
            <input
              type="text"
              placeholder="Search brand..."
              value={searchQuery}
              onChange={handleInputChange}
            />
          </div>

          {Array.from(new Set(products.map((item) => item.brand)))
            .sort()
            .map((brand) => (
              <div key={brand} className={styles.checkbox_container}>
                <input
                  type="checkbox"
                  id={`checkbox-${brand}`}
                  name={brand}
                  checked={checkedItems[brand] || false}
                  onChange={handleCheckBox}
                />
                <label htmlFor={`checkbox-${brand}`}>{brand}</label>
              </div>
            ))}

          <hr />
        </div>

        {/*  */}
        {/*  */}
      </div>
    </>
  );
}

export default Filter;
