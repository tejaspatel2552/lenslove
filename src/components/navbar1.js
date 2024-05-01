import React, { useState, useEffect } from "react";
import styles from "../css/navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import UserAccount from "../pages/useraccount";

function NavBar1({ getUserList }) {
  const [sideNavWidth, setSideNavWidth] = useState(0);
  const [menuIconContent, setMenuIconContent] = useState("☰");

  function toggleNav() {
    if (sideNavWidth === 0) {
      setSideNavWidth(250);
      setMenuIconContent("✕");
    } else {
      setSideNavWidth(0);
      setMenuIconContent("☰");
    }
  }

  const [showUserModal, setShowUserModal] = useState(false);
  const handleOpenUserModal = () => {
    setShowUserModal(true);
  };

  const loggedIn = getUserList?.length > 0 && localStorage.getItem("users");
  const [firstName, setFirstName] = useState("");
  useEffect(() => {
    if (loggedIn) {
      const users = JSON.parse(loggedIn);
      if (Array.isArray(users) && users.length > 0 && users[0].firstName) {
        setFirstName(users[0].firstName);
      }
    }
  }, []);

  return (
    <>
      {/* Responsive Navbar */}
      <div style={{ width: sideNavWidth }} className={styles.sidenav}>
        <NavLink to="my_account">
          <i className="fa fa-user"></i> My Account
        </NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/our_advice">Our Advice</NavLink>
        <NavLink to="/about_us">About Us</NavLink>
        <NavLink to="/contact_us">Contact Us</NavLink>
      </div>

      <div className={styles.navbar_1}>
        <Container>
          <Row>
            <div className={styles.nav_logo}>
              <Col lg={7}>
                <div className={styles.nav_logo_left}>
                  <Link to="/home" target="_self">
                    <span className={styles.logo_left_bold}>LENS</span>
                    <span>LOVE</span>
                  </Link>
                </div>
              </Col>
              <Col lg={5}>
                <div className={styles.nav_logo_right}>
                  <p className={styles.contact_msg}>
                    <i class="fa fa-phone" aria-hidden="true"></i>0371 525 777
                  </p>
                  <Link
                    to="/contact_us"
                    className={styles.help_navbar}
                    target="_self"
                  >
                    Help
                  </Link>
                  <p className={styles.welcome_msg}>Welcome, {firstName}</p>
                  {loggedIn ? (
                    <>
                      <Link to="#" onClick={handleOpenUserModal}>
                        Account
                      </Link>
                      <UserAccount
                        show={showUserModal}
                        setShow={setShowUserModal}
                      />
                    </>
                  ) : (
                    <>
                      <span>
                        <Link
                          to="/login"
                          className={styles.login_navbar}
                          target="_self"
                        >
                          Login /
                        </Link>
                        <Link to="/signup" target="_self">
                          Sign Up
                        </Link>
                      </span>
                    </>
                  )}
                  {/* Banner Responsive Nav Button */}
                  <div className={styles.menuIconClass} onClick={toggleNav}>
                    {menuIconContent}
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NavBar1;
