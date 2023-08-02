import React,{useState,useEffect} from 'react'
import RunEffectOnlyOne from './RunEffectOnlyOne'

export default function UseEffectCleanup() {
    const[display,setDisplay] =useState(true)

  return (
   <>
    <div className='App'>
    <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
    {display && <RunEffectOnlyOne/>}
    </div>
   </>
  )
}
