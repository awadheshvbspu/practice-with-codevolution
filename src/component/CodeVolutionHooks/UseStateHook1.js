import React,{useState} from 'react'

export default function UseStateHook1() {
    const[count,setCount] = useState(0);
  return (
   <>
   <div className='App'>
   <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>+</button>&nbsp;
    <button  onClick={()=>setCount(count-1)}>-</button>
   </div>
   </>
  )
}
