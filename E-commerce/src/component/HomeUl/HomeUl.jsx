import React from "react";
import styles from "./HomeUl.module.css";

function HomeUl() {
  return (

    <>
    <div>
      <ul className={styles.list}>
        <li>Women's Fashion </li>
        <li>men's Fashion</li>
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
