import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from './Nav'
import Advert from '../Advertisment/Advert'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import About from '../About/About'
import SignUp from '../Sign-Up/SignUp'
import Error from '../Error/Error'
import HeroPage from '../Wishlist/Hero'
import Cart from '../Cart/Cart'
import Shop from '../Shop/Shop'


const Routing = () => {
  return (
    <div>
      <Router>
        <Advert />
        <Nav />
          <Routes>
            <Route path='/' element ={<Home />} />
            <Route  path='/Contact' element= {<Contact />}/>
            <Route  path='/About' element ={<About />}/>
            <Route  path='/SignUp' element ={<SignUp />}/>
            <Route  path='*' element ={<Error />}/>
            <Route  path='/HeroPage' element ={<HeroPage />}/>
            <Route path='/Cart' element ={<Cart />} />
            <Route  path='/Shop' element ={<Shop />}/>
          </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default Routing
