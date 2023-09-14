import React, { useContext, useState } from 'react'
import ListItem from './ListItem'
import { context } from './Provider'

function List() {
  const {mode, setFruits, fruits, toggleMode} = useContext(context);
  const [value, setValue] = useState('')

  const addFruit=()=>{
    setFruits((prevState)=> {
      console.log([...prevState, value])
      return [...prevState, value]
    })
    setValue('')
  }

  const handleInput=(event)=> {
    const val = event.target.value
    setValue(val)
  }
  console.log(123, mode)
  return (
    <div>
        <h1>Fruits {fruits.length  === 0 ? null: `(${fruits.length})`}</h1>
        <div className="">
          <button onClick={toggleMode}>{mode} mode</button>
        </div>
        <input type="text" value={value} onChange={handleInput} />
        <button onClick={addFruit}>Add Fruit</button>
       <ul>
        {
          fruits.length === 0 ?  <h1>No Fruit</h1>: fruits.map((fruit, i)=> <ListItem key={i} id={i} name={fruit} /> )
        }
       
       </ul>
    </div>
  )
}

export default List