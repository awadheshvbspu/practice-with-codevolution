import React,{useState} from 'react'

export default function UseStatewithPreviousState() {
    const initialValue = 0;
    const [count,setCount ] =useState(initialValue)

    const IncrementFive =()=>{
        for(let i=0; i<5;i++)
        setCount(prevCount => prevCount+1)
    }
  return (
    <div className='App'>
   <h1>{count}</h1>
   <button onClick={()=>setCount(initialValue)}>Reset</button>&nbsp;
    <button onClick={()=>setCount(prevCount => prevCount+1)}>+</button>&nbsp;
    <button  onClick={()=>setCount(prevCount => prevCount-1)}>-</button>
    <button onClick={IncrementFive}>Increment 5</button>
   </div>
  )
}
