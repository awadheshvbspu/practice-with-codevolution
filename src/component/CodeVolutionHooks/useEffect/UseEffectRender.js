import React,{useState} from 'react'
import { useEffect } from 'react';

export default function UseEffectRender() {
    const [count,setCount]= useState(0);
    const [name,setName] = useState('');

    useEffect(()=>{
        document.title =`${count}`
        console.log('UseEffect- Updating the title')
    },[count])
  return (
    <>
        <div className='App'>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>{count}times</button>
        </div>
    </>
    
  )
}
