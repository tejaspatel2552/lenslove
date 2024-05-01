import React, { useContext } from "react";
import styles from "../css/cart.module.css";
import { CartContext } from "../context/cartContext";

function BillDetail({ selectedCoupon }) {
  const { handleTotalPrice, couponDiscount } = useContext(CartContext);
  const itemTotal = handleTotalPrice();
  const netAmount = itemTotal - couponDiscount;
  return (
    <>
      <div className={styles.bill_title}>
        <h1>Bill Details</h1>
      </div>
      <div className={styles.quantity_price}>
        <div className={styles.quantity_price_flex}>
          <p>Item Total:</p>
          <p>€{itemTotal}</p>
        </div>
        {selectedCoupon && (
          <div className={styles.quantity_price_flex}>
            <p>Coupon ({selectedCoupon}):</p> <p>-€{couponDiscount}</p>
          </div>
        )}
        <div className={styles.quantity_price_flex}>
          <p>Net Amount:</p> <p>€{netAmount}</p>
        </div>
        <hr />
        <div className={styles.quantity_price_flex}>
          <p>Total payable:</p> <p>€{netAmount}</p>
        </div>
      </div>
    </>
  );
}

export default BillDetail;
