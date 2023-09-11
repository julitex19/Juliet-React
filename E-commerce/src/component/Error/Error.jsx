import React from "react";
import styles from "./Error.module.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <div className={styles.spann}>
      <span className={styles.span1}>Home / </span>
        <span className={styles.span2}>404 Error</span>
      </div>
      
      <div className={styles.Error}>
        <h1>404 Not Found</h1>

        <div className={styles.error_btn}>
          <Link to="/"><button>Back To Homepage</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
