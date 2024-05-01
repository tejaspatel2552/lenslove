import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { WishlistProvider } from "./context/wishlistContext";
import { CartProvider } from "./context/cartContext";
import { FilterProvider } from "./context/filterSortContext";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <CartProvider>
        <FilterProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </FilterProvider>
      </CartProvider>
    </React.StrictMode>
  </BrowserRouter>
);
reportWebVitals();
