import React from 'react'
import Advert from '../Advertisment/Advert'
import Nav from '../Navigation/Nav'
import Footer from '../Footer/Footer'

function Layout( { children, Favourite, BuyCart, User}) {
  return (
    <div>
        <div>
        <Advert/>
        <div className='navigation'>
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