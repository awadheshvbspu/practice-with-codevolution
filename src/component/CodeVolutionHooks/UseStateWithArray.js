import React,{useState} from 'react'

export default function UseStateWithArray() {
    const[items,setItem] =useState([])

    const addItems  = () =>{
        setItem([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10+1)
        }])
    }
  return (
    <>
        <div className='App'>
        <button onClick={addItems}>add a number</button>
       <ul>
        {items?.map((item)=>(
<li key={item.id}>{item.value}</li>
        ))}
       </ul>
        </div>
    </>
  )
}
