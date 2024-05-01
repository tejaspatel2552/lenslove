import React from "react";
import styles from "../css/banner.module.css";
import banner_img from "../images/banner_img.png";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

function Banner() {
  return (
    <>
      <div className={styles.banner_container}>
        <Row>
          <Col lg={6}>
            <div className={styles.banner_2}>
              <img src={banner_img}></img>
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.banner_1}>
              <Container>
                <h1>Spring Sale</h1>
                <h2>Up to 40% Off</h2>
                <Link className={styles.banner_btn} to="/shop">
                  See Offer
                </Link>
              </Container>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Banner;
