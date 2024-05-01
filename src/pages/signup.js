import React from "react";
import banner_signup from "../images/banner_signup.jpg";
import { Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import styles from "../css/signup.module.css";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePhone,
  validatePassword,
} from "../components/regex";

function SignUp({ setUserList }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // Call each validation function passing the formData and errors objects
    validateFirstName(formData, errors);
    validateLastName(formData, errors);
    validateEmail(formData, errors);
    validatePhone(formData, errors);
    validatePassword(formData, errors);

    // Set the errors state
    setErrorMessage(errors);

    if (Object.keys(errors).length === 0) {
      const id = uuidv4();
      setUserList((prev) => [...prev, { ...formData, id: id }]);
      navigate("/login");
    }
  };
  return (
    <>
      <ToastContainer />
      <div className={styles.signup_container}>
        <Row className="g-0">
          <Col lg={6}>
            <div className={styles.signup_banner}>
              <img src={banner_signup} alt="signup_banner" />
            </div>
          </Col>
          <Col lg={6}>
            <form onSubmit={handleSubmit} className={styles.form_container}>
              <h2 className={styles.title}>Create an Account</h2>

              <div className={styles.input1}>
                <div>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First Name*"
                    className={styles.input}
                    value={formData.firstName}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              {errorMessage.firstName && (
                <div className={styles.error_message}>
                  {errorMessage.firstName}
                </div>
              )}

              <div className={styles.input1}>
                <div>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name*"
                    className={styles.input}
                    value={formData.lastName}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              {errorMessage.lastName && (
                <div className={styles.error_message}>
                  {errorMessage.lastName}
                </div>
              )}

              <div className={styles.input1}>
                <div>
                  <input
                    name="phone"
                    type="text"
                    placeholder="Mobile*"
                    className={styles.input}
                    value={formData.phone}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              {errorMessage.phone && (
                <div className={styles.error_message}>{errorMessage.phone}</div>
              )}

              <div className={styles.input1}>
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
                <label>Already a member? </label>
                <Link to="/login" className={styles.linklabel}>
                  Login
                </Link>
              </div>

              <div className={styles.submit}>
                <input
                  type={"submit"}
                  value={"Sign Up"}
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

export default SignUp;
