import React from 'react'
import { useState,useMemo } from 'react';

export default function UseMemoHook() {
    const [counter1,setCounter1] =useState(0);
    const [counter2,setCounter2] =useState(0);


    const increment1 = () =>{
        setCounter1(counter1+1)
    }
    const increment2 = () =>{
        setCounter2(counter2+1)
    }

    const isEven = useMemo(()=>{
        let i=0
        while(i<2000000000) i++
        return counter1 % 2 ===0
    },[counter1])
    
    
  return (
    <>
        <div className='App'>
        <div>
        <span>{isEven()? 'Even':'odd'}</span>
        
            <button onClick={increment1}>Count1 - {counter1}</button> <br/>
        </div>
            <button onClick={increment2}>Count2 - {counter2}</button>
        </div>
    </>
  )
}
