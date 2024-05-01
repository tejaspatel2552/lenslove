import React, { useState, useContext } from "react";
import styles from "../css/navbar.module.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { WishlistContext } from "../context/wishlistContext";
import { CartContext } from "../context/cartContext";
import { FilterContext } from "../context/filterSortContext";

function NavBar2() {
  const { searchQuery, handleInputChange } = useContext(FilterContext);
  const { wishList, handleRemoveWishList } = useContext(WishlistContext);
  const {
    cartClick,
    handleCartClick,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    getProductQuantity,
  } = useContext(CartContext);

  const [searchClick, setSearchClick] = useState(false);
  const handleSearchClick = () => {
    setSearchClick(true);
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#e75313" : "#414141",
    };
  };

  // WishCart
  const [wishCart, setWishCart] = useState(false);

  const handleWishCart = () => {
    setWishCart(!wishCart);
  };

  const handleCloseWishCart = () => {
    setWishCart(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className={styles.navbar_2}>
        <Container>
          <Row>
            <div className={styles.nav_links}>
              <Col lg={7} sm={0}>
                <div className={styles.nav_links_left}>
                  <nav>
                    <NavLink to="/home" style={navLinkStyles}>
                      Home
                    </NavLink>
                    <NavLink to="/shop" style={navLinkStyles}>
                      Shop
                    </NavLink>
                    <NavLink to="/our_advice" style={navLinkStyles}>
                      Our Advice
                    </NavLink>
                    <NavLink to="/about_us" style={navLinkStyles}>
                      About Us
                    </NavLink>
                    <NavLink to="/contact_us" style={navLinkStyles}>
                      Contact Us
                    </NavLink>
                  </nav>
                  <main>
                    <Outlet />
                  </main>
                </div>
              </Col>
              <Col lg={5} sm={12}>
                <div className={styles.nav_links_right}>
                  {/* Search SVG */}
                  {searchClick && (
                    <div className={styles.nav_links_search}>
                      <input
                        type="text"
                        placeholder="Search product..."
                        value={searchQuery}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
                  <svg
                    onClick={handleSearchClick}
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.153 15.747L12.8535 11.5161C13.9794 10.2929 14.6712 8.67509 14.6712 6.89489C14.6707 3.0867 11.534 0 7.66437 0C3.79477 0 0.658081 3.0867 0.658081 6.89489C0.658081 10.7031 3.79477 13.7898 7.66437 13.7898C9.3363 13.7898 10.8698 13.2115 12.0743 12.2501L16.3905 16.4976C16.6008 16.7047 16.9422 16.7047 17.1525 16.4976C17.3633 16.2904 17.3633 15.9541 17.153 15.747ZM7.66437 12.729C4.39027 12.729 1.7361 10.117 1.7361 6.89489C1.7361 3.67281 4.39027 1.06082 7.66437 1.06082C10.9385 1.06082 13.5926 3.67281 13.5926 6.89489C13.5926 10.117 10.9385 12.729 7.66437 12.729Z"
                      fill="#414141"
                    />
                  </svg>

                  {/* Wishlist SVG */}
                  <svg
                    onClick={handleWishCart}
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.14414 8.80841C0.111678 6.47788 0.614575 3.72661 2.23686 2.03652C3.85628 0.349414 6.5587 -0.245866 8.98238 1.79479L8.98243 1.79483C9.37299 2.12358 9.93842 2.1081 10.3148 1.781L10.3148 1.78097C12.5442 -0.15713 15.2905 0.329246 16.9821 1.956C17.8273 2.76872 18.3905 3.85299 18.4856 5.03784C18.5799 6.21232 18.2175 7.5254 17.1436 8.81679L10.2601 16.0112C9.92623 16.3602 9.36908 16.3602 9.03526 16.0113L2.14414 8.80841Z"
                      stroke="#414141"
                    />
                  </svg>
                  {wishCart && (
                    <div className={styles.wishlist_modal}>
                      <Modal.Dialog>
                        <Modal.Header
                          className={styles.wishlist_modal_title}
                          closeButton
                          onClick={handleCloseWishCart}
                        >
                          <h1>My Wishlist</h1>
                        </Modal.Header>

                        <Modal.Body>
                          {wishList.length === 0 ? (
                            <p className={styles.empty_wishlist_message}>
                              Your wishlist is empty.
                            </p>
                          ) : (
                            wishList.map((product) => (
                              <div
                                key={product.id}
                                className={styles.product_details}
                              >
                                <Link to={`/${product.id}`}>
                                  <img
                                    src={product.image_url}
                                    alt="wishlist_product_image"
                                    className={styles.product_image}
                                  />
                                </Link>
                                <div className={styles.product_info}>
                                  <p className={styles.product_name}>
                                    <Link to={`/${product.id}`}>
                                      <p>{product.brand}</p>
                                    </Link>
                                  </p>
                                  <p className={styles.product_price}>
                                    €{product.salePrice}
                                  </p>
                                  <div className={styles.buttons}>
                                    {!cartClick[product.id] && (
                                      <i
                                        className={`fa ${styles.add_to_cart_button} fa-shopping-cart`}
                                        onClick={() =>
                                          handleCartClick(product.id)
                                        }
                                        aria-hidden="true"
                                      ></i>
                                    )}
                                    {cartClick[product.id] && (
                                      <div
                                        className={styles.add_to_cart_quantity}
                                      >
                                        <button
                                          onClick={() =>
                                            handleDecreaseQuantity(product.id)
                                          }
                                        >
                                          -
                                        </button>
                                        <input
                                          type="text"
                                          value={getProductQuantity(product.id)}
                                          readOnly
                                        />
                                        <button
                                          onClick={() =>
                                            handleIncreaseQuantity(product.id)
                                          }
                                        >
                                          +
                                        </button>
                                      </div>
                                    )}
                                    <i
                                      className={`fas ${styles.remove_from_wishlist_button} fa-heart-broken`}
                                      onClick={() =>
                                        handleRemoveWishList(product.id)
                                      }
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            ))
                          )}
                        </Modal.Body>
                      </Modal.Dialog>
                    </div>
                  )}

                  {/* Add to Cart SVG */}
                  <Link to="/cart">
                    <svg
                      width="13"
                      height="18"
                      viewBox="0 0 13 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.672966 15.0244L1.47201 5.03632H10.653L11.452 15.0244C11.5228 15.9093 10.8238 16.6665 9.93602 16.6665H2.18895C1.30121 16.6665 0.602173 15.9093 0.672966 15.0244Z"
                        stroke="#414141"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.58252 7.56769V3.52604C3.58252 2.68402 4.08773 1 6.10856 1C8.12938 1 8.63459 2.68402 8.63459 3.52604V7.56769"
                        stroke="#414141"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NavBar2;
