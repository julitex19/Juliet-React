import React from "react";
import styles from "./NewArrival.module.css";
import { Link } from "react-router-dom";

const NewArrival = () => {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.intro2}>
          <div className={styles.intro2_flex}>
            <button className={styles.btn}></button>
            <h4>Featured</h4>
          </div>
          <h1>New Arrival</h1>
        </div>

        <div className={styles.wrapper}>

          <div className={styles.left}>
            <img src="./e-images/Big-PS5.svg" alt="" />
            <div className={styles.positioning}>
              <h1>PlayStation 5</h1>
              <h4>Black and White version of the PS5 <br /> coming out on sale.</h4>
              <Link to="/Shop">
                <div className={styles.link}>
                  <p>Shop Now</p>
                </div>
              </Link>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.top_right}>
              <div className={styles.hat}>
                <img src="./e-images/woman-hat.svg" alt="" />

                <div className={styles.positions}>
                  <h1>Women’s Collections</h1>
                  <h4>Featured woman collections <br /> that give you another vibe.</h4>
                  <Link to="/Shop">
                    <div className={styles.link}>
                      <p>Shop Now</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.bottom_right}>
              <div className={styles.perfume}>
                <img src="./e-images/speaker3.svg" alt="" />

                <div className={styles.position}>
                  <h1>Speakers</h1>
                  <h4>Amazon wireless speakers</h4>
                  <Link to="/Shop">
                    <div className={styles.link}>
                      <p>Shop Now</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className={styles.perfume}>
                <img src="./e-images/Gucci-perfume.svg" alt="" />

                <div className={styles.position}>
                  <h1>Perfume</h1>
                  <h4>GUCCI INTENSE OUD EDP</h4>
                  <Link to="/Shop">
                    <div className={styles.link}>
                      <p>Shop Now</p>
                    </div>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default NewArrival;
