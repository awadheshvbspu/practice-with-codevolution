import React,{useState,useEffect} from 'react'

export default function RunEffectOnlyOne() {
    const [x,setX] =useState(0);
    const [y,setY] =useState(0);

    const logMousePosition = (e)=>{
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove',logMousePosition)
        return ()=>{
            console.log('component unmounting code')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
  return (
    <>
        <div className='App'>
            hooks X- {x} Y- {y}
        </div>
    </>
  )
}
