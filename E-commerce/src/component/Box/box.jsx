import React from 'react'
import styles from "./box.module.css"
import Percentage from './Percentage';
import { GlobalContext } from '../../context';

const percentMaped = {
  Percentage:Percentage,
};

const Box = ({ product }) => {
  const {img, title, price, oldPrice, percent} = product
  const PercentComp = percentMaped[percent];

   const {addToCart, removeFromCart, cart} = React.useContext(GlobalContext)

   const handleAddToCart=()=>{
const check = cart.find(item=> item.id === product.id)
    const data = {
      ...product,
      qty:  check ? check.qty += 1 : 1
    }
    addToCart(data)
   }
  return (
    <div className={styles.wishlist}>

      <div className={styles.product}>
          <div className={styles.product_box}>
            <img src={img} alt="" />
            <div className={styles.cart} onClick={handleAddToCart}>
              <img src="./e-images/white-cart.svg" alt="" />
              <span>Add To Cart</span>
            </div>
            <div className={styles.position} onClick={()=>removeFromCart(product.id)}>
            {PercentComp && <PercentComp />}
            <img src="./e-images/Ellipse 13.png" alt="" className={styles.elipse} />
              <img src="./e-images/icon-delete.svg" alt="" className={styles.delete}/>
            </div>
          
          </div>
          <div className={styles.price}>
            <p>{title}</p>
            <div className={styles.dollar}>
              <span>${price}</span>
              <s>{oldPrice}</s>
            </div>
          </div>
        </div>



        </div>
  )
}

export default Box

