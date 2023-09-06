import React from 'react'
const GlobalContext = React.createContext();

const  Provider =({children} )=> {

 const ApiCall = async()=>{
    await fetch('http://localhost:3004/product')

 }
  return (
    <GlobalContext.Provider value={ApiCall}>{children}</GlobalContext.Provider>
  )
}

export {GlobalContext, Provider} 