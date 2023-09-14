import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const GlobalContext = React.createContext();

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])


  useEffect(() => {
    const productApi = () => {
      fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    };
    productApi();
  }, []);

  const addToCart=(item)=>{
    const check = cart.find(prod => prod.id === item.id)
    if(check){
      const updatedCart = cart.map(prod=>{
        if(prod.id === item.id){
          return {
            ...prod,
            amount: prod.price * prod.qty
          }
        } 
        return prod
      })
      setCart(updatedCart)
      toast.success('Item quantity updated')
    } else {
      setCart((prevState)=> ([...prevState, {...item, amount: item.price * item.qty}]))
      toast.success('Item added to cart')
    }
    
  }

  const removeFromCart=(id)=>{
    const check = cart.find((item)=> item.id === id)

    if(check){
      const newCart = cart.filter(item => item.id !== id)
      setCart(newCart);
      toast.success('Item removed from cart')
    } else {
      toast.error('Item not in cart')
    }

    
  }

  console.log('Cart', cart)

  const data = {
    products,
    cart,
    addToCart,
    removeFromCart
  }

  // object to store and release all values in context.js
  return (
    // provider component to release all values in context.js
    <GlobalContext.Provider value={data}>{children}
        <ToastContainer /></GlobalContext.Provider>
  );
};

export default Provider;
