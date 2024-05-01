import React from "react";
import styles from "../css/our_advice.module.css";
import NavBar1 from "../components/navbar1";
import NavBar2 from "../components/navbar2";
import Footer from "../components/footer";
import Banner from "../components/banner";
import headline_1_img from "../images/headline_1.png";
import headline_2_img from "../images/headline_2.png";
import { Container, Col } from "react-bootstrap";

function OurAdvice() {
  return (
    <>
      <NavBar1 />
      <NavBar2 />

      <Banner />

      <div className={styles.our_advice_head}>
        <h1>Our Advice</h1>
      </div>

      <div className={styles.our_advice_container}>
        <div className={styles.headline_1}>
          <Col lg={6}>
            <div className={styles.headline_1_img}>
              <img src={headline_1_img} alt="headline_1_img" />
            </div>
          </Col>
          <Col
            lg={6}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Container>
              <div className={styles.headline_1_details}>
                <div className={styles.headline_1_head}>
                  <p>Headline</p>
                </div>
                <div className={styles.headline_1_text}>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem.+
                  </p>
                </div>
                <div className={styles.headline_1_readmore}>
                  <p>
                    Read more
                    <svg
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
              </div>
            </Container>
          </Col>
        </div>

        <div className={styles.headline_2}>
          <Col
            lg={6}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Container>
              <div className={styles.headline_2_details}>
                <div className={styles.headline_2_head}>
                  <p>Headline</p>
                </div>
                <div className={styles.headline_2_text}>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem.+
                  </p>
                </div>
                <div className={styles.headline_2_readmore}>
                  <p>
                    Read more
                    <svg
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
              </div>
            </Container>
          </Col>
          <Col lg={6}>
            <div className={styles.headline_2_img}>
              <img src={headline_2_img} alt="headline_2_img" />
            </div>
          </Col>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OurAdvice;
