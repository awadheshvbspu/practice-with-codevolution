import React,{useState,useEffect,useRef} from 'react'

export default function HookTimer() {
    const[timer,setTimer] =useState(0);
    const intervalRef =useRef()

    useEffect(()=>{
     intervalRef.current =setInterval (()=>{
            setTimer(prevTimer =>prevTimer+1)
        },1000)
        return()=>{
           clearInterval(intervalRef.current) 
        };
    },[])
  return (
    <div className='App'>HookTimer--
    {timer}
    <button  onClick={()=>clearInterval(intervalRef.current)}> clear timer</button>
    </div>
  )
}
