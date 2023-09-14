import React from 'react'
import style from './style.module.css'
import { GlobalContext } from '../../context'

function BuyCart() {
  const {cart} = React.useContext(GlobalContext)
  return (
    <div className={style.wrap}>
        <img src="./e-images/Cart1 with buy.svg" alt=""/>
        <span className={style.count}>{cart.length}</span>
    </div>
  )
}

export default BuyCart