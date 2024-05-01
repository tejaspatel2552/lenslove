import React from "react";
import styles from "../css/home.module.css";
import nav_icon_1 from "../images/nav_icon_1.png";
import nav_icon_2 from "../images/nav_icon_2.png";
import nav_icon_3 from "../images/nav_icon_3.png";
import category_img_1 from "../images/category_img_1.png";
import category_img_2 from "../images/category_img_2.png";
import NavBar1 from "../components/navbar1";
import NavBar2 from "../components/navbar2";
import Banner from "../components/banner";
import Footer from "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "../components/product_card";
import jsonData from "../db/shopData.json";

function Home({ getUserList, setUserList }) {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar1 getUserList={getUserList} setUserList={setUserList} />
      <NavBar2 />

      {/* Banner Profile */}
      <Banner />

      {/* Icon Container */}
      <Container>
        <div className={styles.nav_icon_container}>
          <div className={styles.nav_icon}>
            <img src={nav_icon_1} alt="nav_icon_1" />
            <p>Original products</p>
          </div>
          <div className={styles.nav_icon}>
            <img src={nav_icon_2} alt="nav_icon_2" />
            <p>Lifetime Warranty</p>
          </div>
          <div className={styles.nav_icon}>
            <img src={nav_icon_3} alt="nav_icon_3" />
            <p>Fast Delivery</p>
          </div>
        </div>
      </Container>

      {/* Category Container */}
      <div className={styles.category_container}>
        <Row className="g-0">
          <Col lg={6}>
            <div className={styles.category_item_1}>
              <div className={styles.category_img_1}>
                <img src={category_img_1} alt="category_img_1" />
              </div>
              <div className={styles.category_text_1}>
                <h1>Optical</h1>
                <Link to="/" target="_self">
                  Buy
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.category_item_2}>
              <div className={styles.category_img_2}>
                <img src={category_img_2} alt="category_img_2" />
              </div>
              <div className={styles.category_text_2}>
                <h1>Sunwear</h1>
                <Link to="/" target="_self">
                  Buy
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Popular Container */}
      <div className={styles.popular_container}>
        <div className={styles.popular_title}>
          <h1>Popular</h1>
        </div>

        <Container>
          <div className={styles.products}>
            {jsonData.glasses
              .filter((item) => item.sellingQuantity)
              .slice(0, 4)
              .sort((a, b) => b.sellingQuantity - a.sellingQuantity)
              .map((sellingQuantity, index) => (
                <ProductCard key={index} data={sellingQuantity} />
              ))}
          </div>
        </Container>

        {/* See all btn */}
        <div className={styles.see_all_btn}>
          <Link to="/" target="_self">
            Buy
          </Link>
        </div>
      </div>

      {/* New Container */}
      <div className={styles.new_container}>
        <div className={styles.new_title}>
          <h1>New</h1>
        </div>

        <Container>
          <div className={styles.products}>
            {jsonData.glasses
              .filter((item) => item.created)
              .slice(0, 4)
              .sort((a, b) => new Date(b.created) - new Date(a.created))
              .map((created, index) => (
                <ProductCard key={index} data={created} />
              ))}
          </div>
        </Container>

        {/* see all btn */}
        <div className={styles.see_all_btn}>
          <Link to="/" target="_self">
            Buy
          </Link>
        </div>
      </div>

      {/* Sunwear Container */}
      <div className={styles.sunwear_container}>
        <div className={styles.sunwear_title}>
          <h1>Sunwear</h1>
        </div>

        <Container>
          <div className={styles.products}>
            {jsonData.glasses
              .filter((item) => item.type === "Sunwear")
              .slice(0, 4)
              .sort((a, b) => b.salePrice - a.salePrice)
              .map((Sunwear, index) => (
                <ProductCard key={index} data={Sunwear} />
              ))}
          </div>
        </Container>

        {/* see all btn */}
        <div className={styles.see_all_btn}>
          <Link to="/" target="_self">
            Buy
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
