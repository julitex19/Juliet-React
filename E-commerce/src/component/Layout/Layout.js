import React from 'react'
import Advert from '../Advertisment/Advert'
import Nav from '../Navigation/Nav'
import Footer from '../Footer/Footer'
import styles from "./Layout.module.css"

function Layout( { children, Favourite, BuyCart, User}) {
  return (
    <div className={styles.container}>
        <div>
        <Advert/>
        <div className={styles.navigation}>
        <Nav Favourite={Favourite} BuyCart={BuyCart} User={User}/>
       </div> 
       </div>
        <div>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout;