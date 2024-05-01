import React from "react";
import styles from "../css/about_us.module.css";
import { Container } from "react-bootstrap";
import NavBar1 from "../components/navbar1";
import NavBar2 from "../components/navbar2";
import Footer from "../components/footer";

function AboutUs() {
  return (
    <>
      <NavBar1 />
      <NavBar2 />


      <div className={styles.about_us_head}>
        <h1>About Us</h1>
        <hr />
      </div>

      <Container>
        <div className={styles.about_us_container}>
          <p>
            LensLove is a frontrunner in crafting chic, high-quality eyewear at
            accessible prices. With over 250+ retail locations across Berlin,
            Frankfurt, and expanding into other cities, LensLove offers a
            diverse range of fashionable eyewear with a focus on redefining the
            eyewear shopping experience. Our mission is to provide the best in
            vision by offering the most advanced, comfortable, latest, and
            affordable eyewear, making eyecare an integral part of everyone's
            daily life.
          </p>

          <h1>Vision</h1>
          <p>
            Our vision is to ensure that every individual can access affordable
            eyecare, enhancing their ability to see the world better. At
            LensLove, we prioritize simplicity and affordability in pricing,
            providing customers with transparent pricing and ensuring
            wallet-friendliness.
          </p>

          <h1>Mission</h1>
          <p>
            LensLove's mission is to revolutionize the eyewear industry by
            providing affordable, stylish, and high-quality eyewear to our
            customers in Berlin, Frankfurt, and beyond. We strive to offer the
            most advanced and comfortable eyewear options, ensuring that every
            individual can access optimal vision solutions that enhance their
            daily lives. Through transparency in pricing, exceptional customer
            service, and a commitment to innovation, we aim to make eyecare
            accessible and enjoyable for everyone.
          </p>

          <h1>14Day Return Policy</h1>
          <p>
            We offer a 14-day return policy, understanding that sometimes
            purchases may not suit you. We take full responsibility and offer a
            complete refund with no questions asked within this period.
          </p>

          <h1>Unconditional Warranty</h1>
          <p>
            With an unconditional warranty on all products, we eliminate
            complicated conditions for warranty replacements. Simply walk into
            any nearby LensLove store with your bill to get your replacement
            hassle-free.
          </p>

          <h1>Commitment</h1>
          <p>
            Our commitment to staying at the forefront of design and technology
            is unwavering. Our dedicated research team continuously develops new
            designs and advancements in both lenses and frames, ensuring that
            our customers always have access to the latest in eyewear.
          </p>

          <h1>Service</h1>
          <p>
            Exceptional service is at the core of LensLove. Whether online or
            offline, our team is dedicated to assisting you, ensuring a
            memorable purchase experience. We go the extra mile to ensure your
            happiness and satisfaction with every interaction.
          </p>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default AboutUs;
