import React,{useState,useEffect} from 'react'

export default function UseEffectWithIncorrectdependency() {
    const [count,setCount]= useState(0)
    const tick =()=> {
        setCount(preCount => preCount+1)
    }

    useEffect(()=>{
        const interval = setInterval(tick,1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <>
    <div className='App'>
    {count}
    </div>
    </>
  )
}
