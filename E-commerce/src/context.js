import React, {useState} from 'react'
const GlobalContext = React.createContext();


const  Provider =({children} )=> {

//  const ApiCall = async()=>{
//     await fetch('http://localhost:3004/product')

//  }

const [products, setProducts] = useState();

// function to get api data
 const productApi = ()=> {
  fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => setProducts(data));
}


// object to store and release all values in context.js
const value = {
  products :products,
  productApi,
  // ApiCall
}
  return (
    // provider component to release all values in context.js
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}

export {GlobalContext, Provider} 