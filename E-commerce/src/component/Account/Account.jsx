import React from 'react'
import styles from './Account.module.css'
import { Link } from 'react-router-dom'

function Account() {
  return (
    <div className={styles.Account}>
        <div className={styles.span_flexed}>
        <div className={styles.spann}>
        <Link to="/"><span className={styles.spann1}>Home</span></Link>
          <span>/</span>
          <span className={styles.spann2}>Contact</span>
          
        </div>

        <div className={styles.spans}>
          <p className={styles.spans1}>Welcome! </p>
          <p className={styles.spans2}>Guest</p>
        </div>
        </div>
        
    </div>
  )
}

export default Account