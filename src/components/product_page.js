import React, { useContext } from "react";
import styles from "../css/product_page.module.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar1 from "./navbar1";
import Navbar2 from "./navbar2";
import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import jsonData from "../db/shopData.json";
import { WishlistContext } from "../context/wishlistContext";
import { CartContext } from "../context/cartContext";

function ProductPage() {
  const { productId } = useParams();
  const product = jsonData.glasses.find((p) => p.id === parseInt(productId));
  const navigate = useNavigate();

  // Wishlist
  const { wishButton, handleWishButton } = useContext(WishlistContext);

  // Add to Cart
  const {
    cartClick,
    handleCartClick,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    getProductQuantity,
  } = useContext(CartContext);

  const handleBuyButtonClick = () => {
    handleCartClick(product.id);
    navigate("/cart");
  };

  return (
    <>
      <Navbar1 />
      <Navbar2 />

      <div className={styles.product_page_container}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={styles.product_page_image_container}>
                <img src={product.image_url} alt="product_img" />
              </div>
            </Col>
            <Col lg={6}>
              <div className={styles.product_page_detail_container}>
                <div className={styles.product_page_brand_wish}>
                  <h1>{product.brand}</h1>
                  <i
                    className={`fa ${styles.heart_icon} ${
                      wishButton && wishButton[product?.id]
                        ? "fa-heart"
                        : "fa-heart-o"
                    }`}
                    aria-hidden="true"
                    onClick={() => handleWishButton(product?.id)}
                  ></i>
                </div>
                <div className={styles.product_page_text}>
                  <p>{product.details}</p>
                </div>
                <div className={styles.product_page_price}>
                  <span>
                    <strike>€{product.mrp}</strike>
                    <span>€{product.salePrice}</span>{" "}
                  </span>
                </div>
                <div className={styles.btn_add_checkout}>
                  {!cartClick[product.id] && (
                    <button
                      className={styles.add_to_cart_button}
                      onClick={() => handleCartClick(product.id)}
                    >
                      Add to Cart
                    </button>
                  )}
                  {cartClick[product.id] && (
                    <div className={styles.add_to_cart_quantity}>
                      <button
                        onClick={() => handleDecreaseQuantity(product.id)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={getProductQuantity(product.id)}
                        readOnly
                      />
                      <button
                        onClick={() => handleIncreaseQuantity(product.id)}
                      >
                        +
                      </button>
                    </div>
                  )}
                  <Link
                    to="/cart"
                    onClick={() => handleBuyButtonClick()}
                    className={styles.checkout_button}
                  >
                    Buy
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProductPage;
