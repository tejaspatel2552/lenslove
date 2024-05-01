import React, { createContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import jsonData from "../db/shopData.json";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartClick, setCartClick] = useState({});
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);

  const coupons = [
    { code: "NEWONE", discount: 20 },
    { code: "SALE40", discount: 20 },
  ];

  const maxQuantity = 10;

  const handleCartClick = (productId) => {
    setCartClick((prevState) => ({
      ...prevState,
      [productId]: true,
    }));
    if (cart.some((item) => item.id === productId)) {
      const updatedCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      const findProduct = jsonData.glasses.find(
        (item) => item.id === productId
      );
      if (findProduct) {
        const updatedCart = [
          ...cart,
          {
            ...findProduct,
            addToCart: findProduct.addToCart,
          },
        ];
        setCart(updatedCart);
      }
    }
  };

  const handleIncreaseQuantity = (productId) => {
    const product = cart.find((item) => item.id === productId);
    if (product && product.addToCart < maxQuantity) {
      const increase = cart.map((item) => {
        if (item.id === productId) {
          const updatedQuantity = item.addToCart + 1;
          return { ...item, addToCart: updatedQuantity };
        }
        return item;
      });
      setCart(increase);
    } else if (product) {
      toast.warning("Maximum quantity reached");
    }
  };

  const handleDecreaseQuantity = (productId) => {
    const decrease = cart.map((item) => {
      if (item.id === productId && item.addToCart > 0) {
        const updatedQuantity = item.addToCart - 1;
        if (updatedQuantity === 0) {
          setCartClick((prevState) => ({
            ...prevState,
            [productId]: false,
          }));
          return { ...item, salePrice: 0, addToCart: 0 };
        }
        return { ...item, addToCart: updatedQuantity };
      }
      return item;
    });
    setCart(
      decrease.filter((item) => {
        return item.addToCart !== 0;
      })
    );
  };

  const getProductQuantity = (productId) => {
    const product = cart.find((item) => item.id === productId);
    return product ? product.addToCart : 1;
  };

  const handleTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.salePrice * item.addToCart,
      0
    );
  };

  const handleTotalQuantity = () => {
    return cart.reduce((total, item) => {
      return total + item.addToCart;
    }, 0);
  };

  const applyCoupon = (couponCode) => {
    const coupon = coupons.find((c) => c.code === couponCode);
    if (coupon) {
      setAppliedCoupon(couponCode);
      const totalDiscount = cart.reduce((acc, item) => {
        return acc + Math.min(coupon.discount, item.salePrice) * item.addToCart;
      }, 0);
      setCouponDiscount(totalDiscount);
    } else {
      toast.error("Invalid coupon code");
    }
  };

  const handleClearCart = () => {
    setCart([]);
    setCartClick({});
  };

  const handleRemoveCartItem = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    setCartClick((prevState) => ({
      ...prevState,
      [productId]: false,
    }));
  };

  return (
    <>
      <ToastContainer />
      <CartContext.Provider
        value={{
          cart,
          cartClick,
          handleCartClick,
          handleIncreaseQuantity,
          handleDecreaseQuantity,
          getProductQuantity,
          handleTotalPrice,
          handleTotalQuantity,
          handleClearCart,
          handleRemoveCartItem,
          appliedCoupon,
          couponDiscount,
          applyCoupon,
          coupons,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};
