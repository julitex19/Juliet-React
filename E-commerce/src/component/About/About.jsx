import React from "react";
import styles from "./About.module.css";
import AboutDirectors from "../AboutDirectors/AboutDirectors";
import { Info } from "../AboutDirectors/Data2";
import AboutBox from "../AboutBox/AboutBox";

function About() {
  return (
    <div className={styles.AboutPage}>
        <div className={styles.spann}>
          <span>Home / </span>
          <span>About</span>
        </div>

      <div className={styles.main}>
        <div className={styles.write_up}>
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>

        <div>
          <img src="./e-images/portrait-two-african-females.svg" alt="" />
        </div>
      </div>

    <AboutBox />

      <div className={styles.container}>
      {Info && Info.map((items)=>{
           return <AboutDirectors key={items.id} details={items} />
      })}
  </div>
    </div>
  );
}

export default About;
