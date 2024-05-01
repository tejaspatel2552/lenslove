import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import styles from "../css/login.module.css";
import banner_login from "../images/banner_login.jpg";
import { ToastContainer, toast } from "react-toastify";
import { validatePassword, validateEmail } from "../components/regex";
import { Row, Col } from "react-bootstrap";

function Login({ getUserList }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};

    validateEmail(formData, errors);
    validatePassword(formData, errors);

    setErrorMessage(errors);

    if (Object.keys(errors).length === 0) {
      const validUser = getUserList.filter(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (validUser?.length > 0) {
        navigate("/home");
      } else {
        toast.error("Invalid Credentails");
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <div className={styles.login_container}>
        <Row>
          <Col lg={12}>
            <div className={styles.login_banner_img}>
              <img src={banner_login} alt="banner_login" />
            </div>
          </Col>
          <Col lg={12}>
            <form onSubmit={handleSubmit} className={styles.form_container}>
              <h2 className={styles.title}>Log in to your account</h2>

              <div>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email*"
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              {errorMessage.email && (
                <div className={styles.error_message}>{errorMessage.email}</div>
              )}

              <div>
                <div className={styles.password_input_container}>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password*"
                    className={styles.input}
                    value={formData.password}
                    onChange={handleChange}
                  ></input>

                  <i
                    className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                    aria-hidden="true"
                    onClick={togglePasswordVisibility}
                  ></i>
                </div>
              </div>
              {errorMessage.password && (
                <div className={styles.error_message}>
                  {errorMessage.password}
                </div>
              )}

              <div className={styles.label_member}>
                <label>Not a Register? </label>
                <Link to="/signup" className={styles.linklabel}>
                  Sign Up
                </Link>
              </div>

              <div className={styles.submit}>
                <input
                  type={"submit"}
                  value={"Log in"}
                  className={styles.btn}
                />
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Login;
