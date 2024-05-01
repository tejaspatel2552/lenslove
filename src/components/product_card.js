import React, { useContext } from "react";
import styles from "../css/product_card.module.css";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/wishlistContext";
import { CartContext } from "../context/cartContext";

function ProductCard({ data }) {
  const { wishButton, handleWishButton } = useContext(WishlistContext);
  const {
    cartClick,
    handleCartClick,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    getProductQuantity,
  } = useContext(CartContext);

  return (
    <>
      <div key={data.id} className={styles.product_container}>
        <div className={styles.product_img}>
          <Link to={`/${data.id}`}>
            <img src={data?.image_url} alt="product_img"></img>
          </Link>
          <i
            className={`fa ${styles.heart_icon} ${
              wishButton && wishButton[data?.id] ? "fa-heart" : "fa-heart-o"
            }`}
            aria-hidden="true"
            onClick={() => handleWishButton(data?.id)}
          ></i>
          <h1>
            <i class="fa fa-star" aria-hidden="true"></i> {data.rating}
          </h1>
        </div>
        <div className={styles.product_details}>
          <div className={styles.product_name}>
            <Link to={`/${data.id}`}>
              <h1>{data.brand}</h1>
            </Link>
            <p className={styles.product_name_size_colour}>
              Size: {data.frameSize} • {data.frameColor}
            </p>
          </div>
          <div className={styles.product_price}>
            <p>
              <strike>€{data.mrp}</strike>
              <span>€{data.salePrice}</span>
            </p>
          </div>
          <div className={styles.product_cart}>
            {!cartClick[data.id] && (
              <i
                className={`fa ${styles.add_to_cart_button} fa-shopping-cart`}
                onClick={() => handleCartClick(data.id)}
                aria-hidden="true"
              ></i>
            )}
            {cartClick[data.id] && (
              <div className={styles.add_to_cart_quantity}>
                <button onClick={() => handleDecreaseQuantity(data.id)}>
                  -
                </button>
                <input
                  type="text"
                  value={getProductQuantity(data.id)}
                  readOnly
                />
                <button onClick={() => handleIncreaseQuantity(data.id)}>
                  +
                </button>
              </div>
            )}
          </div>
          <Link to={`/${data.id}`}>
            <div className={styles.product_other_details}>
              <p>
                See details
                <svg
                  className={styles.product_other_details_svg}
                  width="23"
                  height="15"
                  viewBox="0 0 23 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7931 1.9344C14.4026 1.54388 14.4026 0.910712 14.7931 0.520188C15.1837 0.129664 15.8168 0.129664 16.2074 0.520188L22.2073 6.52019C22.5979 6.91071 22.5979 7.54388 22.2073 7.9344L16.2074 13.9344C15.8168 14.3249 15.1837 14.3249 14.7931 13.9344C14.4026 13.5439 14.4026 12.9107 14.7931 12.5202L19.086 8.22728H1.51103C0.952653 8.22728 0.5 7.77956 0.5 7.22728C0.5 6.67499 0.952653 6.22728 1.51103 6.22728H19.086L14.7931 1.9344Z"
                    fill="#E75313"
                  />
                </svg>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
