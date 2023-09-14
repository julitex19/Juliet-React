import React, { useContext } from 'react'
import { context } from './Provider'

function ListItem({name, id}) {
    const {setFruits, fruits} = useContext(context)
    const removeFruit=()=>{
        
        const newFruit = fruits.filter((item, i) => i !== id)
        console.log(id, fruits, newFruit)
        setFruits(newFruit)

    }
  return (
    <li>{name} <span onClick={removeFruit}>&times;</span></li>
  )
}

export default ListItem