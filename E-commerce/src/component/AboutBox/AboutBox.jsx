import React from "react";
import styles from "./AboutBox.module.css";
import {PiHouseFill} from 'react-icons/pi'

function AboutBox() {
  return (
    <div>
      <div className={styles.AboutBox}>
        <div className={styles.pics}>
         <div className={styles.picture_outer}>
         <div className={styles.picture}>
         <PiHouseFill className={styles.img}/>
          {/* <img src="./e-images/home.svg" alt="" /> */}
          </div>
         </div>
     
        </div>
      </div>
    </div>
  );
}

export default AboutBox;
