import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import MyAccount from "./pages/my_account";
import Home from "./pages/home";
import Shop from "./pages/shop";
import OurAdvice from "./pages/our_advice";
import AboutUs from "./pages/about_us";
import ContactUs from "./pages/contact_us";
import ProductPage from "./components/product_page";
import ProductCard from "./components/product_card";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Cart from "./pages/cart";
import UserAccount from "./pages/useraccount";
import PayAndShip from "./pages/pay_and_ship.js";
import PublicRoute from "./routes/PublicRoutes";
import PrivateRoute from "./routes/PrivateRoutes";

function App() {
  const [getUserList, setUserList] = useState([]);

  useEffect(() => {
    getUserList?.length > 0 &&
      localStorage.setItem("users", JSON.stringify(getUserList));
  }, [getUserList]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    users?.length > 0 && setUserList(users);
  }, []);
  return (
    <>
      <Routes>
        <Route
          exact
          path="/signup"
          element={
            <PublicRoute>
              <SignUp getUserList={getUserList} setUserList={setUserList} />
            </PublicRoute>
          }
        />

        <Route
          exact
          path="/login"
          element={
            <PublicRoute>
              <Login getUserList={getUserList} setUserList={setUserList} />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/my_account"
          element={
            <PrivateRoute>
              <MyAccount />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/home"
          element={
            <PublicRoute>
              <Home getUserList={getUserList} setUserList={setUserList} />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/shop"
          element={
            <PublicRoute>
              <Shop />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/our_advice"
          element={
            <PublicRoute>
              <OurAdvice />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/about_us"
          element={
            <PublicRoute>
              <AboutUs />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/contact_us"
          element={
            <PublicRoute>
              <ContactUs />
            </PublicRoute>
          }
        />

        <Route
          exact
          path="/product_card"
          element={
            <PublicRoute>
              <ProductCard />
            </PublicRoute>
          }
        />

        <Route
          exact
          path="/:productId"
          element={
            <PublicRoute>
              <ProductPage />
            </PublicRoute>
          }
        />

        <Route
          exact
          path="/cart"
          element={
            <PublicRoute>
              <Cart />
            </PublicRoute>
          }
        />

        <Route
          exact
          path="/pay_and_ship"
          element={
            <PrivateRoute>
              <PayAndShip />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path="/useraccount"
          element={
            <PrivateRoute>
              <UserAccount />
            </PrivateRoute>
          }
        />
        <Route exact path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
