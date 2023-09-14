import React, {useContext} from "react";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";
import NumberSelector from "../NumberSelector/NumberSelector";

function Cart() {
  const {cart} = useContext(GlobalContext)
  return (
    <div>
      <div className={styles.modal_item}>
        <div className={styles.spann}>
          <span >Home / </span>
          <span>Cart</span>
        </div>

        <table className={styles.cartTable}>
      <thead className={styles.tableHead}>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
      </tr>
      </thead>
      <tbody>
      {cart.map((item)=>{
              return <tr>
                <td>
                  <div className={styles.productDesc}>
                    <img src={item.image} alt="" className={styles.productDescImage} />
                    <p className="">{item.description}</p>
                  </div>
                </td>
                <td>{item.price}</td>
                <td><NumberSelector qty={item.qty} /></td>
                <td>{item.amount}</td>
              </tr>
            })}
      </tbody>

    </table>

        <div className={styles.items}>
          <div className={styles.modal_ibtn}>
            <button>Return To Shop</button>
            <button>Update Cart</button>
          </div>
          <div className={styles.checkout_flexed}>
            <div className={styles.inner_check}>
              <input type="text" placeholder="Coupon Code" />
              <a href="/">
                <button>Apply Coupon</button>
              </a>
            </div>
            <div className={styles.checkout}>
              <h5>Cart Total</h5>
              <div className={styles.subtotal}>
                <p>Subtotal</p>
                <p>$1750</p>
              </div>
              <hr />
              <div className={styles.subtotal}>
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <hr />
              <div className={styles.subtotal}>
                <p>Total</p>
                <p>$1750</p>
              </div>
              <Link to="/checkout">
                <button className="proceedbtn">Process To Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
