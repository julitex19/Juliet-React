import React, { createContext, useState } from 'react'

export const context = createContext()

function Provider({children}) {
    const [fruits, setFruits] = useState([])
    const [name] = useState({firstName:'Juliet', lastName:'Obi'})
    const [mode, setMode] = useState('light')


    const toggleMode=()=>{
        if(mode === 'light'){
            setMode('dark')
        } else {
            setMode('light')
        }
    }

    
    const data = {
        fruits,
        name,
        setFruits,
        mode,
        toggleMode
    }

    
  return (
    <context.Provider value={data}>
        {children}
    </context.Provider>
  )
}

export default Provider