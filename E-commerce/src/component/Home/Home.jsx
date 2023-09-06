import React from "react";
import styles from "./Home.module.css";
import PictureSlide from "../PictureSlide/PictureSlide";
import { BsApple, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import HomeUl from "../HomeUl/HomeUl";

const Home = () => {
  return (
    <div className={styles.container}>
      <HomeUl />
      <div className={styles.black_container}>
        <div className={styles.inner_flexed}>
          <div className={styles.Apple_flexed}>
            <BsApple className={styles.apple}/>
            <p>iPhone 14 Series</p>
          </div>
          <div><h1>Up to 10% <br /> off Voucher</h1></div>
          <Link to="/Shop">
            <div className={styles.link}>
              <span>Shop Now</span>
              <BsArrowRight  className={styles.arrow}/>
            </div>
          </Link>
        </div>
        <PictureSlide />
      </div>
    </div>
  );
};

export default Home;
