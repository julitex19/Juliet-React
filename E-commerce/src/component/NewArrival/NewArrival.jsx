import React from 'react'
import styles from "./NewArrival.module.css"

const NewArrival = () => {
  return (
   <>
        <div className={styles.container}>
            <div className={styles.left}>
                <img src="./e-images/Big-PS5.svg" alt="" />
            </div>
            <div className={styles.right}>
                <img src="./e-images/woman-hat.svg" alt="" />
            </div>
        </div>
   </>
  )
}

export default NewArrival
