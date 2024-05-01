import React, { useState, useContext } from "react";
import Navbar1 from "../components/navbar1";
import Footer from "../components/footer";
import BillDetail from "../components/billdetail";
import styles from "../css/pay_and_ship.module.css";
import { CartContext } from "../context/cartContext";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const PayAndShip = () => {
  const { cart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zip: "",
  });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState({});

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    setErrorMessage(errors);
    if (Object.keys(errors).length !== 0) {
      navigate("/home");
    }
  };

  const { handleTotalQuantity } = useContext(CartContext);

  return (
    <>
      <Navbar1 />

      {cart.length === 0 ? (
        <div className={styles.cart_empty}>
          <svg
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 256 256"
            enable-background="new 0 0 256 256"
          >
            <metadata>
              Svg Vector Icons : http://www.onlinewebfonts.com/icon{" "}
            </metadata>
            <g>
              <g>
                <g>
                  <path
                    fill="#000000"
                    d="M122.7,10.3c-11.4,1.3-21.4,6.6-29.3,15.4c-4.9,5.5-9.6,15.2-10.6,22c-0.4,2.9-0.9,6-1.1,6.8l-0.3,1.6H66.3c-14.7,0-15.2,0.1-16.9,1.6l-1.8,1.6l-7,78.2c-7.8,85.6-7.6,82.5-3.7,90.4c3.6,7.4,11.9,13.8,21.8,16.8c3.9,1.2,8.1,1.3,69.4,1.3c61.3,0,65.5-0.1,69.4-1.3c9.9-3,18.2-9.4,21.8-16.8c3.9-8,4-4.9-3.4-88.3c-3.7-41.9-7-77.1-7.1-78.4c-0.2-1.3-1.2-2.9-2.3-3.7c-1.7-1.3-2.7-1.4-16.8-1.4h-15l-0.8-5.6c-1.7-11.6-5.4-18.9-13.7-27.1c-4.2-4.2-7.1-6.3-11-8.2C140.6,10.9,131.5,9.3,122.7,10.3z M136.1,22.6c9.4,2.5,17.7,8.9,22,17c2.4,4.5,4.4,11.2,4.4,14.5v2H128H93.5v-2c0-6.6,4.6-16.8,10.1-22.3C112.1,23.4,125,19.7,136.1,22.6z M81.6,79.3c0.2,10.8,0.3,11.3,1.9,13c2.3,2.5,5.8,2.5,8.2,0.1c1.7-1.7,1.8-2,1.8-13V68.1H128h34.5v11.3c0,11.1,0.1,11.3,1.8,13c1.9,1.9,5.6,2.3,7.5,0.8c2.3-1.8,2.7-3.9,2.7-14.5V68.1h11.6h11.5l0.4,4c0.2,2.3,3.2,35.7,6.6,74.3c6.9,78.7,6.8,73.9,1.6,79.9c-1.7,1.9-4.6,4-7.5,5.4l-4.7,2.3H128H62.1l-4.4-2c-7.3-3.3-12.2-9.8-12.2-16.1c0-1.5,2.9-34.9,6.3-74.1c3.5-39.3,6.3-71.9,6.3-72.6c0-1.1,1.1-1.2,11.6-1.2h11.6L81.6,79.3z"
                  />
                  <path
                    fill="#000000"
                    d="M101.8,131.4c-3.7,3.7-3.2,4.8,8,16.1l10,10.1l-10,10.1c-11.1,11.3-11.7,12.3-8,16.1c3.7,3.7,4.8,3.2,16.1-8l10.1-10l10.1,10c11.3,11.1,12.3,11.7,16.1,8c3.7-3.7,3.2-4.8-8-16.1l-10-10.1l10-10.1c11.1-11.3,11.7-12.3,8-16.1c-3.7-3.7-4.8-3.2-16.1,8l-10.1,10l-10.1-10C106.6,128.2,105.6,127.7,101.8,131.4z"
                  />
                </g>
              </g>
            </g>
          </svg>
          <h1 className={styles.cart_empty_name}>
            Your Cart is Currently Empty!
          </h1>
          <Link to="/shop" target="_self">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.cart_container}>
            <Container>
              <Row>
                <Col lg={8}>
                  <div className={styles.back_shop}>
                    <Link to="/shop">
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
                      Continue Shopping /
                    </Link>
                    <Link to="/cart"> Cart</Link>
                  </div>

                  <div className={styles.cart_title}>
                    <h1 className={styles.cart_title_name}>
                      Shipping Details ({handleTotalQuantity()} item)
                    </h1>
                  </div>

                  <Form
                    onSubmit={handleSubmit}
                    className={styles.shipping_form}
                  >
                    <Form.Group controlId="name">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Name*"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input_tag}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="email">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input_tag}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="address">
                      <Form.Control
                        type="text"
                        name="address"
                        placeholder="Address*"
                        value={formData.address}
                        onChange={handleChange}
                        className={styles.input_tag}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="country">
                      <Form.Control
                        as="select"
                        name="country"
                        placeholder="Country*"
                        value={formData.country}
                        onChange={handleChange}
                        className={styles.input_tag}
                        required
                      >
                        <option value="">Select Country</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="state">
                      <Form.Control
                        as="select"
                        name="state"
                        placeholder="State*"
                        value={formData.state}
                        onChange={handleChange}
                        className={styles.input_tag}
                        required
                      >
                        <option value="">Select State</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="city">
                      <Form.Control
                        as="select"
                        name="city"
                        placeholder="City*"
                        value={formData.city}
                        onChange={handleChange}
                        className={styles.input_tag}
                        required
                      >
                        <option value="">Select City</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="zip">
                      <Form.Control
                        type="text"
                        name="zip"
                        placeholder="Zip*"
                        value={formData.zip}
                        onChange={handleChange}
                        className={styles.input_tag}
                        required
                      />
                    </Form.Group>
                  </Form>
                </Col>

                <Col lg={4}>
                  <Form className={styles.payment_form}>
                    <Form.Group controlId="paymentMethod">
                      <Form.Label>Payment Method</Form.Label>
                      <Form.Control
                        as="select"
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Payment Method</option>
                        <option value="cash">Cash on Delivery</option>
                        <option value="online">Online Payment</option>
                      </Form.Control>
                    </Form.Group>
                    {formData.paymentMethod === "online" && (
                      <div>
                        <Form.Group controlId="onlinePaymentOption">
                          <Form.Label>Select Online Payment Option</Form.Label>
                          <Form.Control
                            as="select"
                            name="onlinePaymentOption"
                            value={formData.onlinePaymentOption}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Option</option>
                            <option value="card">Credit/Debit Card</option>
                            <option value="netbanking">Netbanking</option>
                          </Form.Control>
                        </Form.Group>
                        {formData.onlinePaymentOption === "card" && (
                          <div>
                            <Form.Group controlId="cardNumber">
                              <Form.Label>Card Number</Form.Label>
                              <Form.Control
                                type="text"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                required
                              />
                            </Form.Group>
                          </div>
                        )}
                        {formData.onlinePaymentOption === "netbanking" && (
                          <div>
                            <Form.Group controlId="bank">
                              <Form.Label>Select Bank</Form.Label>
                              <Form.Control
                                as="select"
                                name="bank"
                                value={formData.bank}
                                onChange={handleChange}
                                required
                              >
                                <option value="">Select Bank</option>
                              </Form.Control>
                            </Form.Group>
                          </div>
                        )}
                      </div>
                    )}
                  </Form>

                  <div className={styles.bill_detail}>
                    <BillDetail />
                  </div>

                  <Link to="/home" className={styles.confirmorder_button}>
                    Place Order
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default PayAndShip;
