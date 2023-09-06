import React from "react";
import styles from "./HomeUl.module.css";
import { FaAngleRight } from'react-icons/fa'

function HomeUl() {
  return (

    <>
    <div>

      <ul className={styles.list}>
        <li className={styles.lists}> 
        <li>Women's Fashion </li>
        <FaAngleRight/>
        </li>

        <li className={styles.lists}>
        <li>men's Fashion</li>
        <FaAngleRight/>
        </li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby's & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
      </ul>
    </div>

    </>
  );
}

export default HomeUl;
